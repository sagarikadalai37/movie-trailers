export const MovieDate = ({ movie }) => {
  //Caluclating the date and year of release
  const day = movie.ShowDate.split(" ")[1].split(",")[0];
  const year = movie.ShowDate.split(" ")[2];

  return (
    <div className="p-02 text-center circle bg-light-green w-2 h-2 sm-size white abs top-05 right-05">
      <div>
        <p>{day}</p>
        <p className="pt-02">{year}</p>
      </div>
    </div>
  );
};
