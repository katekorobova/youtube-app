import { useEffect } from "react";
import axios from "../api/axios";
import useAuth from "./useAuth";
import { useRefreshToken } from "./useRefreshToken";

const AUTHORIZATION = "Authorization";
const BEARER = "Bearer";

const useAxiosAuthorized = () => {
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (!config.headers[AUTHORIZATION] && auth) {
          config.headers[AUTHORIZATION] = `${BEARER} ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(new Error(error?.message || "Request failed"))
    );

    const responseIntercept = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const retry = error?.config;
        if (error?.response?.status === 401 && !retry?.sent) {
          retry.sent = true;
          const newAuth = await refresh();
          retry.headers[AUTHORIZATION] = `${BEARER} ${newAuth.accessToken}`;
          setAuth(newAuth);
          return axios(retry);
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

export default useAxiosAuthorized;
