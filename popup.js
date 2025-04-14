// Load saved settings
chrome.storage.sync.get(["rate", "pitch"], (data) => {
  document.getElementById("rate").value = data.rate || 1.0;
  document.getElementById("pitch").value = data.pitch || 1.0;
  document.getElementById("rateVal").textContent = data.rate || "1.0";
  document.getElementById("pitchVal").textContent = data.pitch || "1.0";
});

// Update value displays when sliders change
document.getElementById("rate").oninput = (e) => {
  document.getElementById("rateVal").textContent = e.target.value;
};
document.getElementById("pitch").oninput = (e) => {
  document.getElementById("pitchVal").textContent = e.target.value;
};

// Save settings
document.getElementById("save").onclick = () => {
  const rate = parseFloat(document.getElementById("rate").value);
  const pitch = parseFloat(document.getElementById("pitch").value);
  chrome.storage.sync.set({ rate, pitch }, () => {
    showStatus("Settings saved!");
  });
};

// Preview voice with animation
document.getElementById("preview").onclick = () => {
  const rate = parseFloat(document.getElementById("rate").value);
  const pitch = parseFloat(document.getElementById("pitch").value);
  const utterance = new SpeechSynthesisUtterance("This is your preview voice.");
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = pitch;
  
  // Show animation while speaking
  showSpeakingAnimation(true);
  
  // Disable preview button while speaking
  const previewButton = document.getElementById("preview");
  previewButton.disabled = true;
  
  // Listen for end of speech
  utterance.onend = () => {
    showSpeakingAnimation(false);
    previewButton.disabled = false;
  };
  
  // In case the speech synthesis fails
  utterance.onerror = () => {
    showSpeakingAnimation(false);
    previewButton.disabled = false;
    showStatus("Speech failed. Please try again.", "error");
  };
  
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
};

// Load dark mode preference
chrome.storage.sync.get(["darkMode"], (data) => {
  if (data.darkMode) {
    document.body.classList.add("dark");
    document.getElementById("darkToggle").checked = true;
  }
});

// Toggle dark mode
document.getElementById("darkToggle").onchange = (e) => {
  const enabled = e.target.checked;
  if (enabled) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  chrome.storage.sync.set({ darkMode: enabled });
};

// Helper function to show status message
function showStatus(message, type = "success") {
  const statusElement = document.getElementById("status");
  statusElement.textContent = message;
  
  if (type === "error") {
    statusElement.style.color = "red";
  } else {
    statusElement.style.color = "var(--status-color)";
  }
  
  // Clear status after 1.5 seconds
  setTimeout(() => {
    statusElement.textContent = "";
  }, 1500);
}

// Helper function to control speaking animation
function showSpeakingAnimation(show) {
  const animation = document.getElementById("speakingAnimation");
  if (show) {
    animation.classList.add("active");
  } else {
    animation.classList.remove("active");
  }
}