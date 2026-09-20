import { useEffect, useState } from "react";

function VoiceSelector({ voice, setVoice }) {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voiceError, setVoiceError] = useState("");

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/voices");

        if (!response.ok) {
          throw new Error("Failed to fetch voices");
        }

        const data = await response.json();

        setVoices(data.voices);

        // Select the first available voice by default
        if (data.voices.length > 0 && !voice) {
          setVoice(data.voices[0].id);
        }
      } catch (error) {
        console.error("Error fetching voices:", error);
        setVoiceError("Unable to load voices.");
      } finally {
        setLoading(false);
      }
    };

    fetchVoices();
  }, [setVoice, voice]);

  return (
    <div>
      <label className="mb-3 block text-sm font-bold text-slate-700">
        🎙️ Voice
      </label>

      {loading ? (
        <div className="tts-select w-full rounded-xl border border-slate-200 bg-white p-3.5 text-slate-400">
          Loading voices...
        </div>
      ) : voiceError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-500">
          {voiceError}
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default VoiceSelector;