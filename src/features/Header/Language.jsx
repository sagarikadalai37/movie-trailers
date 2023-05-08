import { useSelector } from "react-redux";
import { MultiSelectDropDown, selectLanguage } from ".";

export const Language = () => {
  //getting the data for the language dropdown from movieSlice
  const { selectedLanguages, languages, languageDisplay } = useSelector(
    (state) => state.movies
  );

  return (
    <div className="ml-3 mobile-mr-3">
      <MultiSelectDropDown
        placeholder={"All Languages"}
        collections={languages}
        selectedValues={selectedLanguages}
        func={selectLanguage}
        display={{ type: "language", value: languageDisplay }}
      />
    </div>
  );
};
