import { configureStore } from "@reduxjs/toolkit";
import movieReduucer from "../features/MovieList/movieSlice";
import trailerReducer from "../features/Trailers/trailerSlice";

export default configureStore({
  reducer: {
    movies: movieReduucer,
    trailer: trailerReducer
  }
});
