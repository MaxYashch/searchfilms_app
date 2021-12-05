export const API_KEY = '4f7508e7';

export const movieSearch = async (options = {}) => {
  let result;

  try {
    result = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${options.query}&plot=full`
    );
    result = await result.json();
    console.log('search complete', result);
  } catch (e) {
    console.error('search failed', e.message);
  }

  return result;
};

export const movieDetails = async (options = {}) => {
  let result;

  try {
    result = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${options.imdbID}&plot=full`
    );
    result = await result.json();
    console.log('search complete', result);
  } catch (e) {
    console.error('search failed', e.message);
  }

  return result;
};
