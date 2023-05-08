import { useSelector } from "react-redux";
import { MayBe } from ".";

export const MayBeDetails = () => {
  const { trailer } = useSelector((state) => state.trailer);
  return (
    <div className="light-orange">
      <p className="b-1-light-orange br-100 w-3 h-3 rel">
        <MayBe className={`abs light-orange center`} />
      </p>
      <p className="xsm-size text-center mt-05">MAYBE</p>
      <p className="xsm-size text-center mt-05">({trailer?.ratings.maybe})</p>
    </div>
  );
};
