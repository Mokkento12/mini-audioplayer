"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentTrack } from "@/app/features/player/playerSlice";
import type { Track } from "@/app/features/player/playerSlice";
import type { RootState } from "@/app/store/store";

const tracks: Track[] = [
  {
    id: "1",
    title: "eona emotional ambient pop",
    src: "/eona-emotional-ambient-pop-351436.mp3",
  },
  { id: "2", title: "tell me what", src: "/tell-me-what-379638.mp3" },
  { id: "3", title: "the motion", src: "/the-motion-349853.mp3" },
];

const TrackList = () => {
  const dispatch = useDispatch();
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );

  const handlePlay = (track: Track) => {
    dispatch(setCurrentTrack(track));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🎵 Track List</h2>
      <ul className="space-y-2">
        {tracks.map((track) => (
          <li
            key={track.id}
            className="flex items-center justify-between border p-2 rounded"
          >
            <span>{track.title}</span>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => handlePlay(track)}
            >
              {currentTrack?.id === track.id ? "Playing..." : "Play"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
