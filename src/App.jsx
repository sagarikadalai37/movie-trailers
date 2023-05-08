import "./styles.css";
import { AppliedFilters, Header } from "./features/Header";
import { MovieList, Error, Loader } from "./features";
import { useSelector } from "react-redux";

export default function App() {
  const { appliedFilters, status } = useSelector((state) => state.movies);

  return (
    <div className="App rel">
      <Loader status={status} />
      <Error status={status} />
      {status === "success" && <Header />}
      {appliedFilters.length !== 0 && <AppliedFilters />}
      <MovieList />
    </div>
  );
}
