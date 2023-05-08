import { Like, LikeCount } from ".";

export const MovieLikesAndVotes = ({ movie }) => {
  return (
    <div className="flex flex-center">
      <Like className={"lg-size"} />
      <div className="m-1">
        <LikeCount movie={movie} />
        <div className="white xsm-size">
          {movie?.ratings?.totalWTSCount} votes
        </div>
      </div>
    </div>
  );
};
