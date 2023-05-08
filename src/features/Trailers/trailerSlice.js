import { createSlice } from "@reduxjs/toolkit";

export const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    status: "idle",
    trailer: null
  },
  reducers: {
    showTrailer: (state, action) => {
      state.trailer =
        state.trailer?.EventCode === action.payload.movie.EventCode
          ? null
          : action.payload.movie;
    },
    removeTrailer: (state) => {
      state.trailer = null;
    }
  }
});

export const { showTrailer, removeTrailer } = trailerSlice.actions;
export default trailerSlice.reducer;
