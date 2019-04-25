// URLS
const BASE_URL = `https://gist.githubusercontent.com/seanders/df38a92ffc4e8c56962e51b6e96e188f/raw/b032669142b7b57ede3496dffee5b7c16b8071e1`;
const GET_ALBUMS = page => `${BASE_URL}/page${page}.json`;

// API calls
export const getAlbums = async page => {
  const response = await fetch(GET_ALBUMS(page));
  return response.json();
};
