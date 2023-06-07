import axios from "axios";
const API_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "462dbb1220mshd3c293d58a4b540p17c0f6jsn1085f20317a1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${API_URL}/${url}`, options);
  return data;
};
