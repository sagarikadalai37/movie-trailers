import { MovieCard, MovieName } from ".";

export const Movie = ({ movie, count }) => {
  return (
    <div className="m-1 w-12 flex fx-col sp-bw">
      <div className="h-100">
        <MovieCard movie={movie} count={count} />
      </div>
      <MovieName movie={movie} />
    </div>
  );
};
