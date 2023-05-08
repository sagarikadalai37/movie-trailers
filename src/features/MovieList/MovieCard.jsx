import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  MovieDate,
  MovieImage,
  MovieLikeCount,
  MovieVotes,
  createTwoLists,
  showTrailer,
  useWindowSize
} from ".";

export const MovieCard = ({ movie, count }) => {
  const dispatch = useDispatch();
  //Calling the custom hook for getting the window size
  const windowSize = useWindowSize();

  const viewTrailer = () => {
    //adding the selected movie to the trailerSlice
    dispatch(showTrailer({ movie }));
    //separating the movie lists to two lists so that trailer video can be seen in between them
    dispatch(createTwoLists({ count, windowSize }));
  };
  return (
    <div className="rel h-100 border">
      <MovieImage movie={movie} />
      <AiOutlinePlayCircle
        className="abs center white lg-size cursor-pointer"
        onClick={() => viewTrailer()}
      />
      <MovieDate movie={movie} />
      <MovieLikeCount movie={movie} />
      <MovieVotes movie={movie} />
    </div>
  );
};
