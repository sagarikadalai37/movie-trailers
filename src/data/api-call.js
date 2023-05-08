import { videos } from ".";

export const getMoviesData = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const response = Object.keys(videos).map((key) => videos[key]);

        return resolve(response);
      }, 1000);
    } catch (error) {
      console.log({ error });
      return reject(error);
    }
  });
};
