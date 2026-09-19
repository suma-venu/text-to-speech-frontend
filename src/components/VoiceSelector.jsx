function VoiceSelector({ voice, setVoice }) {
  const voices = [
    {
      id: "hpp4J3VqNfWAUOO0d1Us",
      name: "Female Voice",
    },
    {
      id: "CwhRBWXzGAHq8TQ4Fs17",
      name: "Male Voice",
    },
  ];

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
        {voices.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VoiceSelector;