function VoiceSelector({ voice, setVoice }) {
  return (
    <div>
      <label className="mb-3 block text-sm font-bold text-slate-700">
        🎙️ Voice
      </label>

      <select
        value={voice}
        onChange={(e) => setVoice(e.target.value)}
        className="tts-select w-full rounded-xl border border-slate-200 bg-white p-3.5 text-slate-700 outline-none"
      >
        <option value="female">English Female</option>
        <option value="male">English Male</option>
      </select>
    </div>
  );
}

export default VoiceSelector;