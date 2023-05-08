import { Like, LikeCount } from ".";

export const MovieLikeCount = ({ movie }) => {
  return (
    <div className="abs flex flex-center bottom-1 right-05 med-size">
      <Like className={`light-green`} />
      <LikeCount movie={movie} />
    </div>
  );
};
