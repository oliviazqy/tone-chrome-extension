chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "tonePronounce",
    title: "Tone: Pronounce this text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "tonePronounce" && info.selectionText) {
    const selectedText = info.selectionText;
    const tabId = tab.id;

    chrome.storage.sync.get(["rate", "pitch"], (settings) => {
      chrome.tts.speak(selectedText, {
        lang: "en-US",
        rate: settings.rate || 1.0,
        pitch: settings.pitch || 1.0,
        enqueue: false
      }, () => {
        if (chrome.runtime.lastError) {
          injectWebSpeech(selectedText, tabId, settings);
        }
      });
    });
  }
});

function injectWebSpeech(text, tabId, settings) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (textToSpeak, rate, pitch) => {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "en-US";
      utterance.rate = rate;
      utterance.pitch = pitch;
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    },
    args: [text, settings.rate || 1.0, settings.pitch || 1.0]
  });
}