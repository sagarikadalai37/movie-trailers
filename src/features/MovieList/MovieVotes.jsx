export const MovieVotes = ({ movie }) => {
  return (
    <div className="abs right-05 bottom-05 white xsm-size">
      {movie?.ratings?.totalWTSCount} votes
    </div>
  );
};
