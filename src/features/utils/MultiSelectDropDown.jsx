import { RiArrowDropDownLine } from "react-icons/ri";
import { DropDownValues, showOrHideDisplay } from ".";
import { useDispatch } from "react-redux";

export const MultiSelectDropDown = ({
  placeholder,
  collections,
  func,
  selectedValues,
  display
}) => {
  const dispatch = useDispatch();

  return (
    <div className="rel w-10">
      <input
        placeholder={placeholder}
        defaultValue={selectedValues}
        className="light-green p-05 med-size w-100 bg-black b-light-green"
      />
      <RiArrowDropDownLine
        id="dropdown-arrow"
        className="cursor-pointer light-green abs top-02 right--1 z2 lg-size"
        onClick={() => dispatch(showOrHideDisplay({ display: display.type }))}
      />
      {display.value && (
        <DropDownValues
          collections={collections}
          func={func}
          selectedValues={selectedValues}
        />
      )}
    </div>
  );
};
