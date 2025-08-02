import type { RootState } from "@/app/store/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePlay } from "../features/player/playerSlice";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();
  const { currentTrack, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && currentTrack) {
      audio.play().catch((error) => {
        console.log("Ошибка воспроизведения:", error);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  const handleEnded = () => {
    dispatch(togglePlay());
  };

  if (!currentTrack) {
    return (
      <div className={"bg-gray-100 p-4 rounded text-center text-gray-500"}>
        Выберите трек для воспроизведения
      </div>
    );
  }
  return (
    <div className={"bg-white shadow-md rounded-lg p-4 mt-4"}>
      <h3 className={"text-lg font-medium mb-2"}>
        🎧 Сейчас играет:{currentTrack.title}
      </h3>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={handleEnded}
        controls={false}
        className="hidden"
      />
      <div className={"flex items-center justify-center space-x-4"}>
        <button
          onClick={() => dispatch(togglePlay())}
          className={
            "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          }
        >
          {isPlaying ? "⏸ Пауза" : "▶ Воспроизвести"}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
