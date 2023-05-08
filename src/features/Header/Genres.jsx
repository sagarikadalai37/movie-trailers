import { useSelector } from "react-redux";
import { MultiSelectDropDown, selectGenres } from ".";

export const Genres = () => {
  //getting the data for the genre dropdown from movieSlice
  const { selectedGenres, genres, genreDisplay } = useSelector(
    (state) => state.movies
  );

  return (
    <div className="ml-2 mr-3 mobile-mr-0">
      <MultiSelectDropDown
        placeholder={"All Genres"}
        collections={genres}
        selectedValues={selectedGenres}
        func={selectGenres}
        display={{ type: "genre", value: genreDisplay }}
      />
    </div>
  );
};
