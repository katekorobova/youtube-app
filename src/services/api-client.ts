import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: import.meta.env.VITE_API_KEY
  },
});
