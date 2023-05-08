import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth } = window;
  return innerWidth;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowSize);

    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);
  return windowSize;
};
