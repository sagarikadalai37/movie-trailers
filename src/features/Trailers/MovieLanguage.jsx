export const MovieLanguage = ({ movie }) => {
  return (
    <div className="mt-1">
      <p>{movie?.EventLanguage.toUpperCase()} </p>
    </div>
  );
};
