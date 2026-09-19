function AudioPlayer({ audioUrl }) {
  return (
    <div className="audio-box mt-8 rounded-2xl p-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-800">
          🎵 Generated Audio
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Listen to your generated speech below
        </p>
      </div>

      {audioUrl ? (
        <>
          <audio
            controls
            preload="metadata"
            src={audioUrl}
            className="w-full"
            aria-label="Generated speech audio player"
          >
            Your browser does not support the audio element.
          </audio>

          <a
            href={audioUrl}
            download="generated-speech.mp3"
            className="download-btn mt-5 inline-block rounded-xl border border-emerald-400 px-5 py-3 font-semibold text-emerald-600"
          >
            ⬇ Download Audio
          </a>
        </>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <div className="text-4xl">🎧</div>

          <p className="mt-3 font-medium text-slate-500">
            No audio generated yet
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Enter some text and click Generate Speech
          </p>
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;