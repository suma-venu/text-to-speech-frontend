function LanguageSelector({ language, setLanguage }) {
  const languages = [
    { code: "en-US", name: "English" },
    { code: "hi-IN", name: "Hindi" },
    { code: "kn-IN", name: "Kannada" },
    { code: "mr-IN", name: "Marathi" },
    { code: "es-ES", name: "Spanish" },
    { code: "fr-FR", name: "French" },
    { code: "de-DE", name: "German" },
  ];

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
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;