import { Bars } from "react-loading-icons";

export const Loader = ({ status }) => {
  return (
    <div className="w-100 h-100">
      {status === "loading" && (
        <Bars fill={"#34d399"} className="x-lg-size abs center" />
      )}
    </div>
  );
};
