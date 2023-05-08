import { useSelector } from "react-redux";
import { MovieTrailerVideo, MovieDetails } from ".";

export const MovieTrailer = () => {
  const { trailer } = useSelector((state) => state.trailer);
  return (
    <div
      className={`${
        trailer ? "show" : "hide"
      } flex flex-sp-bw h-30 mobile-flex-col m-1 bg-lighter-gray mobile-h-35`}
    >
      <MovieTrailerVideo />
      <MovieDetails />
    </div>
  );
};
