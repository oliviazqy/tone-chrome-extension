# Tone: A text to speech chrome extension

A text to speech chrome extension that allows users to highlight text on any webpage, right-click, and hear the American English pronunciation.

## Why I Built This

As language learners and educators often struggle with proper pronunciation of English words, I created Tone to provide:

- **Seamless Learning Experience**: Learn correct American English pronunciation without leaving your browsing context
- **Accessibility**: Help non-native speakers improve their pronunciation directly from any content they're reading
- **Efficiency**: Eliminate the need to copy/paste text into separate pronunciation tools or dictionaries
- **Simplicity**: Provide a clean, straightforward interface that doesn't interrupt the reading flow

Whether you're studying English, preparing for a presentation, or simply unsure how to pronounce a particular word or phrase, Tone makes the learning process faster and more natural.

### Personalized Pronunciation Experience

Many pronunciation tools offer a one-size-fits-all approach, but Tone is different:

- **Voice Preview**: Test voice settings before applying them to actual content, allowing users to find their ideal listening experience
- **Customizable Speech Rate**: Adjust the speaking pace to match your learning needs - slower for beginners or faster for advanced learners
- **Pitch Control**: Fine-tune the pitch to create a more comfortable and natural-sounding voice that suits your preferences

These customization options make Tone particularly valuable for different types of language learners, educators, and those with specific auditory processing needs.

## Screenshots and recordings 
- Screenshots:
  <br><br>
  <img width="300" alt="Screenshot 2025-04-15 at 11 11 09 PM" src="https://github.com/user-attachments/assets/93d30668-1ccb-4b0d-9271-0407d014f38b" />
  <br><br>
  <img width="300" alt="Screenshot 2025-04-15 at 11 11 32 PM" src="https://github.com/user-attachments/assets/95c4b898-63fa-47ce-83ea-2b96ec48199b" />
  <br><br>
- Recordings: https://www.loom.com/share/2f01e6066cc14643994415e43d8ffac9 

## Features
- Right-click to pronounce selected text
- Adjust speech rate and pitch via settings
- Dark mode support
- Works offline using Chrome's built-in TTS capabilities

## Permissions
- **contextMenus**: To create the right-click menu option
- **tts**: To use Chrome's text-to-speech functionality
- **scripting**: To execute scripts on web pages when fallback is needed
- **storage**: To save user preferences (speech rate, pitch, and dark mode)

## Installation
1. Download or clone this repository
2. Go to chrome://extensions/
3. Enable Developer Mode
4. Click "Load unpacked"
5. Select the folder containing the extension files
