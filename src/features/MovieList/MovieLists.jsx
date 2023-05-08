import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie, MovieTrailer, getMovies } from ".";

export const MovieList = () => {
  const { movies1, movies2, status } = useSelector((state) => state.movies);
  let count = 0;
  const dispatch = useDispatch();

  //Calling the function to get the movies data
  useEffect(() => {
    dispatch(getMovies());
    //eslint-disable-next-line
  }, []);

  return (
    <div className="rel h-100 w-100">
      {/* If the movie data were successfully downloaded then rendering them into the screen */}
      {status === "success" && (
        <>
          {/* Displaying the first list of the movies */}
          <div className="flex flex-wp flex-center">
            {movies1.map((movie) => (
              <Movie movie={movie} key={movie.EventCode} count={++count} />
            ))}
          </div>
          {/* Displaying the trailer of the movie selected */}
          <MovieTrailer />
          {/* Displaying the second list of the movies */}
          <div className="flex flex-wp flex-center">
            {movies2.map((movie) => (
              <Movie movie={movie} key={movie.EventCode} count={++count} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
