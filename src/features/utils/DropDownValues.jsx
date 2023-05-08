import { useDispatch } from "react-redux";
import { removeTrailer, filterMovies, modifyFilters } from ".";

export const DropDownValues = ({ collections, func, selectedValues }) => {
  const dispatch = useDispatch();

  return (
    <div className="abs z2 light-green w-100 bg-light-gray p-05">
      {collections.map((collection, index) => (
        <p className="dropdown-values" key={collection + index}>
          <label
            id="dropdown-values"
            className="iniline-block rel container white ml-05 w-100"
          >
            {collection}
            <input
              type="checkbox"
              className="m-05 checkbox"
              value={collection}
              checked={selectedValues.find((value) => value === collection)}
              onChange={(e) => {
                dispatch(func({ collection: e.target.value }));
                dispatch(modifyFilters({ collection: e.target.value }));
                dispatch(filterMovies());
                dispatch(removeTrailer());
              }}
            />
            <span className="checkmark abs"></span>
          </label>
        </p>
      ))}
    </div>
  );
};
