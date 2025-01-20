import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import { Text } from "@chakra-ui/react";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const newAuth = await refresh();
        setAuth(newAuth);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    auth ? setIsLoading(false) : verifyRefreshToken();
  }, []);

  if (isLoading) return <Text>Loading...</Text>;
  else return <Outlet />;
};

export default PersistLogin;
