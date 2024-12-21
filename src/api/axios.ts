import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const axiosWithCredentials = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
