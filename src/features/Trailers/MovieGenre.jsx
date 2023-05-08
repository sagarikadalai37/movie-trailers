export const MovieGenre = ({ movie }) => {
  //splitting the genres into an array
  const genres = movie?.EventGenre.split("|");

  return (
    <div className="flex mt-1">
      {genres?.map((genre, index) => (
        <p key={movie?.name + genre + index} className="secondary-btn m-05">
          {genre}
        </p>
      ))}
    </div>
  );
};
