import { LikeDetails, DisLikeDetails, MayBeDetails } from ".";

export const TrailerButtons = () => {
  return (
    <div className="flex flex-sp-ad w-100">
      <LikeDetails />
      <MayBeDetails />
      <DisLikeDetails />
    </div>
  );
};
