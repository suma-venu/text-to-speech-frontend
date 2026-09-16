import { useState } from "react";

function App() {
  const [text, setText] = useState("");

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

          {/* Text Section */}
          <div className="mb-8">

            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  ✏️ Enter your text
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Type or paste the text you want to convert to speech
                </p>
              </div>

              <span className="hidden rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600 md:block">
                ✨ Multiple languages
              </span>
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing something amazing..."
              maxLength={5000}
              rows="8"
              className="tts-textarea w-full resize-none rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 outline-none"
            />

            <div className="mt-2 text-right text-sm text-slate-400">
              {text.length} / 5000 characters
            </div>
          </div>

          {/* Language + Voice */}
          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-3 block text-sm font-bold text-slate-700">
                🌐 Language
              </label>

              <select className="tts-select w-full rounded-xl border border-slate-200 bg-white p-3.5 text-slate-700 outline-none">
                <option>English</option>
                <option>Hindi</option>
                <option>Gujarati</option>
                <option>Marathi</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold text-slate-700">
                🎙️ Voice
              </label>

              <select className="tts-select w-full rounded-xl border border-slate-200 bg-white p-3.5 text-slate-700 outline-none">
                <option>English Female</option>
                <option>English Male</option>
              </select>
            </div>

          </div>

          {/* Generate */}
          <button
            className="generate-btn mt-7 w-full rounded-xl px-6 py-4 text-lg font-bold text-white"
          >
            🔊 Generate Speech
            <span className="ml-2">→</span>
          </button>

          {/* Audio */}
          <div className="audio-box mt-8 rounded-2xl p-6">

            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-800">
                🎵 Generated Audio
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Your generated speech will appear here
              </p>
            </div>

            <audio controls className="w-full">
              <source src="" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <button
              className="download-btn mt-5 rounded-xl border border-emerald-400 px-5 py-3 font-semibold text-emerald-600"
            >
              ⬇ Download Audio
            </button>

          </div>
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