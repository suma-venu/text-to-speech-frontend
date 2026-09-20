function TextInput({ text, setText, error }) {
  const maxCharacters = 5000;

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const handleClear = () => {
    setText("");
  };

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
        maxLength={maxCharacters}
        rows="8"
        className={`tts-textarea w-full resize-none rounded-2xl border bg-white p-5 text-slate-700 outline-none ${
          error ? "border-red-400" : "border-slate-200"
        }`}
      />

      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <div>
          {error && (
            <p className="text-sm font-medium text-red-500">
              ⚠️ {error}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Word Count */}
          <span className="text-sm text-slate-400">
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </span>

          {/* Character Count */}
          <span
            className={`text-sm ${
              text.length >= maxCharacters
                ? "font-semibold text-red-500"
                : "text-slate-400"
            }`}
          >
            {text.length} / {maxCharacters} characters
          </span>

          {/* Clear Button */}
          <button
            type="button"
            onClick={handleClear}
            disabled={!text}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            🗑️ Clear Text
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextInput;