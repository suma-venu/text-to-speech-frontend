import { useState } from "react";

import TextInput from "./components/TextInput";
import LanguageSelector from "./components/LanguageSelector";
import VoiceSelector from "./components/VoiceSelector";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [voice, setVoice] = useState("CwhRBWXzGAHq8TQ4Fs17");
  const [audioUrl, setAudioUrl] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSpeech = async () => {
  if (!text.trim()) {
    setError("Please enter some text before generating speech.");
    setSuccessMessage("");
    return;
  }

  setError("");
  setSuccessMessage("");
  setAudioUrl("");
   setIsLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        language,
        voice,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    // Receive the generated MP3 audio from the backend
    const audioBlob = await response.blob();

    // Create a temporary URL for the audio
    const audioUrl = URL.createObjectURL(audioBlob);

    setAudioUrl(audioUrl);
    setSuccessMessage("✅ Speech generated successfully!");
  } catch (error) {
    console.error("Error generating speech:", error);
    setError("Unable to connect to the speech server. Please try again.");
    setSuccessMessage("");
  }
  finally {
    setIsLoading(false);
  }
};

  return (
    <div className="tts-page">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="tts-icon">
            🔊
          </div>

          <h1 className="tts-title text-5xl font-extrabold tracking-tight md:text-6xl">
            Text to Speech
          </h1>

          <p className="mt-4 text-lg text-slate-500">
            Turn your text into natural-sounding speech
          </p>

          <div className="mt-3 text-sm font-medium text-indigo-400">
            Type&nbsp;&nbsp;•&nbsp;&nbsp;Choose&nbsp;&nbsp;•&nbsp;&nbsp;Generate&nbsp;&nbsp;•&nbsp;&nbsp;Listen&nbsp;&nbsp;•&nbsp;&nbsp;Download
          </div>
        </div>

        {/* Main Card */}
        <div className="tts-card rounded-3xl p-6 md:p-9">

          {/* Text Input */}
          <TextInput
            text={text}
            setText={(value) => {
              setText(value);
              setError("");
            }}
            error={error}
          />

          {/* Language + Voice */}
          <div className="grid gap-6 md:grid-cols-2">
            <LanguageSelector
              language={language}
              setLanguage={setLanguage}
            />

            <VoiceSelector
              voice={voice}
              setVoice={setVoice}
            />
          </div>

          {/* Generate Button */}
         <button
  onClick={handleGenerateSpeech}
  disabled={isLoading}
  className={`generate-btn mt-7 w-full rounded-xl px-6 py-4 text-lg font-bold text-white ${
    isLoading ? "cursor-not-allowed opacity-60" : ""
  }`}
>
  {isLoading ? "⏳ Generating Speech..." : "🔊 Generate Speech"}

  {!isLoading && <span className="ml-2">→</span>}
</button>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-600">
              {successMessage}
            </div>
          )}

          {/* Audio Player */}
          <AudioPlayer audioUrl={audioUrl} />
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="feature-item text-center">
            <div className="text-2xl">⚡</div>
            <p className="mt-2 text-sm font-bold text-slate-700">
              Fast & Easy
            </p>
            <p className="text-xs text-slate-400">
              Convert in seconds
            </p>
          </div>

          <div className="feature-item text-center">
            <div className="text-2xl">🌐</div>
            <p className="mt-2 text-sm font-bold text-slate-700">
              Multiple Languages
            </p>
            <p className="text-xs text-slate-400">
              Wide language support
            </p>
          </div>

          <div className="feature-item text-center">
            <div className="text-2xl">❤️</div>
            <p className="mt-2 text-sm font-bold text-slate-700">
              Natural Voices
            </p>
            <p className="text-xs text-slate-400">
              High-quality audio
            </p>
          </div>

          <div className="feature-item text-center">
            <div className="text-2xl">☁️</div>
            <p className="mt-2 text-sm font-bold text-slate-700">
              Download & Use
            </p>
            <p className="text-xs text-slate-400">
              Listen anytime
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;