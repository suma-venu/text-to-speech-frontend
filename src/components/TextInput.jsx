function TextInput({ text, setText }) {
  return (
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
  );
}

export default TextInput;