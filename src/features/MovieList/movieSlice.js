import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesData } from ".";
import { languages, genres } from "../../data";

export const getMovies = createAsyncThunk("get/movies", async () => {
  const response = await getMoviesData();
  return response;
});
export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    status: "idle",
    movies: [],
    movies1: [],
    movies2: [],
    languages,
    genres,
    selectedLanguages: [],
    selectedGenres: [],
    appliedFilters: [],
    languageDisplay: false,
    genreDisplay: false
  },
  reducers: {
    // This will create two separate list of movies if any video is selected
    createTwoLists: (state, action) => {
      const windowSize = action.payload.windowSize;
      const count = action.payload.count;
      //Calculating the number of elements that can be displayed in the current window size
      const maxElementsInARow = Math.floor(windowSize / (14 * 16));
      //Now calculating if the selected video is in between or the edge of the row
      //1. If it is in the edge then split the array into the two lists one having the elements equal to the count
      //While the second will be having elements from count index to the end
      //2. If it is in between then split the array in such a way that first will be having the elements equal to count + the number of elements that can be fit into the remaining space
      //and second will be having count+ no derived from above index to the end
      const numberOfItems =
        count % maxElementsInARow === 0
          ? count
          : count + maxElementsInARow - (count % maxElementsInARow);

      state.movies1 = state.movies.slice(0, numberOfItems);
      state.movies2 = state.movies.slice(numberOfItems);
      return state;
    },
    //Filtering out the movies according to the filter of language and genre selected.
    filterMovies: (state) => {
      state.movies1 =
        state.selectedLanguages.length !== 0
          ? state.movies.filter((movies) =>
              state.selectedLanguages.find(
                (language) => movies.EventLanguage === language
              )
            )
          : state.movies;
      state.movies1 =
        state.selectedGenres.length !== 0
          ? state.movies1.filter((movies) =>
              state.selectedGenres.find((genre) =>
                movies.EventGenre.includes(genre)
              )
            )
          : state.movies1;
      state.movies2 = [];
    },
    //All the filters been saved to Applied filters
    modifyFilters: (state, action) => {
      state.appliedFilters = state.appliedFilters.find(
        (appliedFilter) => action.payload.collection === appliedFilter
      )
        ? state.appliedFilters.filter(
            (appliedFilter) => action.payload.collection !== appliedFilter
          )
        : [...state.appliedFilters, action.payload.collection];
    },
    //Selection of the language if the language is already selected then remove it or if it is new then add it
    selectLanguage: (state, action) => {
      state.selectedLanguages = state.selectedLanguages.find(
        (language) => action.payload.collection === language
      )
        ? state.selectedLanguages.filter(
            (language) => action.payload.collection !== language
          )
        : [...state.selectedLanguages, action.payload.collection];
    },
    //Selection of the genres if the genres is already selected then remove it or if it is new then add it
    selectGenres: (state, action) => {
      state.selectedGenres = state.selectedGenres.find(
        (genre) => action.payload.collection === genre
      )
        ? state.selectedGenres.filter(
            (genre) => action.payload.collection !== genre
          )
        : [...state.selectedGenres, action.payload.collection];
    },
    //Removing the filters from the applied filters and languages and genres too
    removeFilters: (state, action) => {
      state.appliedFilters = state.appliedFilters.filter(
        (appliedFilter) => appliedFilter !== action.payload.filter
      );
      state.selectedLanguages = state.selectedLanguages.filter(
        (appliedFilter) => appliedFilter !== action.payload.filter
      );
      state.selectedGenres = state.selectedGenres.filter(
        (appliedFilter) => appliedFilter !== action.payload.filter
      );
    },
    //managing whether to display the language and genre dropdown or not
    showOrHideDisplay: (state, action) => {
      state.languageDisplay =
        action.payload.display === "language"
          ? !state.languageDisplay
          : state.languageDisplay;
      state.genreDisplay =
        action.payload.display === "genre"
          ? !state.genreDisplay
          : state.genreDisplay;
    },
    //hiding the display if clicked outside
    hideDisplay: (state) => {
      state.languageDisplay = false;
      state.genreDisplay = false;
    }
  },
  //managing the statuses when asking for the data from the server
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = "loading";
    },
    [getMovies.fulfilled]: (state, action) => {
      state.status = "success";
      state.movies = action.payload;
      state.movies1 = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.status = "error";
    }
  }
});
//Exporting all the actions
export const {
  createTwoLists,
  filterMovies,
  modifyFilters,
  selectLanguage,
  selectGenres,
  removeFilters,
  showOrHideDisplay,
  hideDisplay
} = movieSlice.actions;

export default movieSlice.reducer;
