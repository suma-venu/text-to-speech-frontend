function LanguageSelector({ language, setLanguage }) {
  return (
    <div>
      <label className="mb-3 block text-sm font-bold text-slate-700">
        🌐 Language
      </label>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="tts-select w-full rounded-xl border border-slate-200 bg-white p-3.5 text-slate-700 outline-none"
      >
        <option value="en-US">English</option>
        <option value="hi-IN">Hindi</option>
        <option value="gu-IN">Gujarati</option>
        <option value="mr-IN">Marathi</option>
        <option value="es-ES">Spanish</option>
        <option value="fr-FR">French</option>
        <option value="de-DE">German</option>
      </select>
    </div>
  );
}

export default LanguageSelector;