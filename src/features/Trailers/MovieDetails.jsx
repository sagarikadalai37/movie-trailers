import { useSelector } from "react-redux";
import {
  MovieTrailerName,
  MovieLanguage,
  MovieGenre,
  MovieReleaseAndVotes,
  TrailerButtons
} from ".";

export const MovieDetails = () => {
  const { trailer } = useSelector((state) => state.trailer);

  return (
    <div className="white w-50 flex fx-col flex-sp-bw mobile-w-100 prl-1 pb-1">
      <div className="prl-2 mobile-p-0">
        <MovieTrailerName movie={trailer} />
        <MovieLanguage movie={trailer} />
        <MovieGenre movie={trailer} />
        <MovieReleaseAndVotes movie={trailer} />
      </div>
      <TrailerButtons />
    </div>
  );
};
