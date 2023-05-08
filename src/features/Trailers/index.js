import { MovieName, LikeCount } from "../MovieList";
import { MovieLanguage } from "./MovieLanguage";
import { MovieTrailerVideo } from "./MovieTrailerVideo";
import { MovieDetails } from "./MovieDetails";
import { MovieTrailer } from "./MovieTrailer";
import { MovieGenre } from "./MovieGenre";
import { MovieLikesAndVotes } from "./MovieLikesAndVotes";
import { MovieReleaseDate } from "./MovieReleaseDate";
import { MovieReleaseAndVotes } from "./MovieReleaseAndVotes";
import { MovieTrailerName } from "./MovieTrailerName";
import { TrailerButtons } from "./TrailerButtons";
import { DisLike, Like, MayBe } from "../utils";
import { LikeDetails } from "./LikeDetails";
import { DisLikeDetails } from "./DisLikeDetails";
import { MayBeDetails } from "./MayBeDetails";
import { showTrailer } from "./trailerSlice";
import { removeTrailer } from "./trailerSlice";

export {
  MovieTrailer,
  MovieDetails,
  MovieName,
  MovieLanguage,
  MovieTrailerVideo,
  MovieLikesAndVotes,
  MovieReleaseDate,
  MovieReleaseAndVotes,
  MovieGenre,
  MovieTrailerName,
  LikeCount,
  TrailerButtons,
  DisLike,
  Like,
  MayBe,
  LikeDetails,
  DisLikeDetails,
  MayBeDetails,
  showTrailer,
  removeTrailer
};
