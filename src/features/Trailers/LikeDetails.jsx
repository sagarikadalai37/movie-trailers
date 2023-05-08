import { useSelector } from "react-redux";
import { Like } from ".";

export const LikeDetails = () => {
  const { trailer } = useSelector((state) => state.trailer);

  return (
    <div className="light-green">
      <p className="b-1-light-green br-100 w-3 h-3 rel">
        <Like className={`abs light-green center`} />
      </p>
      <p className="xsm-size text-center mt-05">WILL WATCH</p>
      <p className="xsm-size text-center mt-05">
        ({trailer?.ratings?.wtsCount})
      </p>
    </div>
  );
};
