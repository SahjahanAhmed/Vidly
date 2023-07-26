import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";
const options = {
  params: { maxResults: "20" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const data = await axios.get(`${BASE_URL}/${url}`, options);
  return data.data;
};
