import { useSelector } from "react-redux";

export const MovieTrailerVideo = () => {
  const { trailer } = useSelector((state) => state.trailer);

  //embeding the youtube link to make it playable with iframe and attaching autoplay so that videos starts playing on selection
  const source =
    trailer?.TrailerURL.split("watch?v=").join("embed/") + "?autoplay=1";
  return (
    <div className="w-50 h-30 mobile-w-100 mobile-h-17">
      <iframe
        src={source}
        className="video"
        title={trailer?.name ? trailer.name : "video trailer"}
      ></iframe>
    </div>
  );
};
