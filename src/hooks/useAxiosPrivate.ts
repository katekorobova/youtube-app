import { useEffect } from "react";
import useAuth from "./useAuth";
import axios from "../api/axios";

const useAxiosPrivate = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (auth) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(new Error(error?.message || "Request failed"))
    );

    const responseIntercept = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 401) {
          setAuth(undefined);
        }
        return Promise.reject(new Error(error?.message || "Response failed"));
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);

  return axios;
};

export default useAxiosPrivate;
