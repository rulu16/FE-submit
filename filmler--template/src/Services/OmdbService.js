const API_KEY = '206d3762';  // OMDb API anahtarınızı buraya girin

export const fetchMovies = async (searchQuery) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};