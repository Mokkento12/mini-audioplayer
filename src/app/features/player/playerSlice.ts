"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Track {
  id: string;
  title: string;
  src: string;
}

interface PlayerState {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
}

const initialState: PlayerState = {
  tracks: [],
  currentTrack: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setTracks, setCurrentTrack, togglePlay } = playerSlice.actions;
export default playerSlice.reducer;
