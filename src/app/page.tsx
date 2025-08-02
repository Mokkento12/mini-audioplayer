"use client";

import TrackList from "@/app/components/TrackList";
import AudioPlayer from "@/app/components/AudioPlayer";

export default function Home() {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎧 Музыкальный плеер</h1>

      <TrackList />
      <AudioPlayer />
    </main>
  );
}
