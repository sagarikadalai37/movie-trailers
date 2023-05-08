import { useSelector } from "react-redux";
import { DisLike } from ".";

export const DisLikeDetails = () => {
  const { trailer } = useSelector((state) => state.trailer);
  return (
    <div className="light-red">
      <p className="b-1-light-red br-100 w-3 h-3 rel">
        <DisLike className={`abs center`} />{" "}
      </p>

      <p className="xsm-size text-center mt-05">WON'T WATCH</p>
      <p className="xsm-size text-center mt-05">
        ({trailer?.ratings?.dwtsCount})
      </p>
    </div>
  );
};
