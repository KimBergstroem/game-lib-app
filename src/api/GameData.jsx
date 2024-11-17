const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const DEFAULT_PARAMS = {
  platforms: "4",
  page_size: "20",
};

const SELECTED_GENRE_IDS = [4, 51, 3, 5, 2, 7];

const fetchFromAPI = async (endpoint, params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      key: API_KEY,
      ...params,
    });

    const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`);
    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

const GameData = {
  getGames: async (customParams = {}) => {
    const data = await fetchFromAPI("/games", {
      ...DEFAULT_PARAMS,
      ...customParams,
    });
    return data?.results || [];
  },

  getGameDetails: async (id) => {
    return await fetchFromAPI(`/games/${id}`);
  },

  getGenres: async () => {
    const data = await fetchFromAPI("/genres");
    const results = data?.results || [];
    return results.filter((genre) => SELECTED_GENRE_IDS.includes(genre.id));
  },
};

export default GameData;
