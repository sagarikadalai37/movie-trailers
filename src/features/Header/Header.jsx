import { Genres, Language } from ".";

export const Header = () => {
  return (
    <div className="flex w-100 sp-bw ptb-1 h-5 bg-black mobile-h-6">
      <p className="white lg-size title pl-1">Movie Trailers</p>
      <div className="flex mobile-header">
        <Language />
        <Genres />
      </div>
    </div>
  );
};
