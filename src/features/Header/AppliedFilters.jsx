import { useDispatch, useSelector } from "react-redux";
import { TiTimes } from "react-icons/ti";
import { filterMovies, removeFilters } from ".";

export const AppliedFilters = () => {
  const { appliedFilters } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return (
    <div className="white flex m-05 v-center">
      Applied Filters:
      <div className="flex flex-wp">
        {appliedFilters.map((appliedFilter) => (
          <div className="secondary-btn flex sp-bw flex-center m-05">
            {appliedFilter}{" "}
            <TiTimes
              className="ml-02"
              onClick={() => {
                dispatch(removeFilters({ filter: appliedFilter }));
                dispatch(filterMovies());
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
