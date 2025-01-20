import { axiosWithCredentials } from "../api/axios";
import { REFRESH_URL } from "../lib/constants";
import { TokenResponse } from "../lib/types";

export const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axiosWithCredentials.post<TokenResponse>(
      REFRESH_URL
    );
    return response.data;
  };

  return refresh;
};
