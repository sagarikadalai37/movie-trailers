export const MovieImage = ({ movie }) => {
  return (
    <img
      className="w-100 h-100 white"
      src={movie.EventImageUrl}
      alt={movie.EventTitle}
    />
  );
};
