# Text-to-Speech Application

A web-based Text-to-Speech application that converts written text into natural-sounding speech.

Users can enter or paste text, select a language and voice, generate speech, listen to the generated audio, and download the audio file.

## Features

- Enter or paste text
- Character count
- Word count
- Maximum 5,000 characters
- Modify or clear text
- Select language
- Select male or female voice
- Generate speech
- Loading state while speech is being generated
- Play generated audio
- Pause, seek and control volume
- Download generated audio
- Validation and error messages
- Responsive user interface

## Technology Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- JavaScript

### Backend

- Node.js
- Express.js
- ElevenLabs Text-to-Speech API

## Project Structure

```text
client/
├── src/
│   ├── components/
│   │   ├── AudioPlayer.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── TextInput.jsx
│   │   └── VoiceSelector.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── package-lock.json
└── vite.config.js