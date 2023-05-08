import { GoCalendar } from "react-icons/go";

export const MovieReleaseDate = ({ movie }) => {
  const date = movie?.ShowDate.split(",")[0];
  const year = movie?.ShowDate.split(",")[1];
  return (
    <div className="flex flex-center">
      <GoCalendar className="lg-size" />
      <div className="m-1">
        <p>{date}</p>
        <p>{year} </p>
      </div>
    </div>
  );
};
