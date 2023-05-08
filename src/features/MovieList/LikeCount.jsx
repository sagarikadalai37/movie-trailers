export const LikeCount = ({ movie }) => {
  //calculating the likepercent of the movie
  const likedPercent = Math.floor(
    (movie?.ratings.wtsCount / movie?.ratings.totalWTSCount) * 100
  );

  return <span className="ml-02 white">{likedPercent} %</span>;
};
