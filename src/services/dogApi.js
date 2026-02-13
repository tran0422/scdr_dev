import axios from "axios";

const ENDPT_URL =
  "https://api.rescuegroups.org/v5/public/orgs/2802/animals/search/available?limit=250";
const API_KEY = "mR4p0XQv";

// Cache
let cachedDogs = null;
let lastFetchTime = null;
const CACHE_DURATION = 5 * 60 * 1000;

export const getAllDogs = async () => {
  const now = Date.now();
  if (cachedDogs && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
    return cachedDogs;
  }

  const response = await axios.get(ENDPT_URL, {
    headers: { Authorization: API_KEY },
  });

  cachedDogs = response.data.data;
  lastFetchTime = now;
  return cachedDogs;
};

export const getDogById = async (id) => {
  const dogs = await getAllDogs();
  return dogs.find((dog) => dog.id === id);
};

export const getRandomDogs = async (count = 3) => {
  const dogs = await getAllDogs();
  const shuffled = [...dogs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
