import { axiosWithCredentials } from "../api/axios";
import { LOGOUT_URL } from "../lib/constants";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth(undefined);
    try {
      await axiosWithCredentials.post(LOGOUT_URL);
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
