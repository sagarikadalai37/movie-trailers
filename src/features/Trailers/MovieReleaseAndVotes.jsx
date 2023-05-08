import { MovieLikesAndVotes, MovieReleaseDate } from ".";

export const MovieReleaseAndVotes = ({ movie }) => {
  return (
    <div className="flex">
      <MovieLikesAndVotes movie={movie} />
      <MovieReleaseDate movie={movie} />
    </div>
  );
};
