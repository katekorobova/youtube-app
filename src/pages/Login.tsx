import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { axiosWithCredentials } from "../api/axios";
import AuthForm from "../components/auth/AuthForm";
import useAuth from "../hooks/useAuth";
import {
  BUTTON_BORDER_RADIUS,
  LOGIN_URL,
  REGISTER_PAGE,
} from "../lib/constants";
import { TokenResponse } from "../lib/types";

function Login() {
  const { setAuth } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    setErrorMessage(undefined);
  }, [user, pass]);

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const response = await axiosWithCredentials.post<TokenResponse>(
        LOGIN_URL,
        {
          username: user,
          password: pass,
        },
        {
          withCredentials: true,
        }
      );
      const { username, accessToken } = response.data;
      setAuth({ username, accessToken });
    } catch (error: any) {
      console.error(error);
      if (!error?.response) {
        setErrorMessage("No Response");
      } else if (error.response?.status === 400) {
        setErrorMessage("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrorMessage("Invalid Credentials");
      } else {
        setErrorMessage("Login Failed");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthForm
      title="Sign In"
      username={user}
      password={pass}
      onUsernameChange={setUser}
      onPasswordChange={setPass}
      errorMessage={errorMessage}
    >
      <Button
        alignSelf="start"
        onClick={handleSubmit}
        borderRadius={BUTTON_BORDER_RADIUS}
        disabled={isLoading || !user || !pass}
      >
        Sign In
      </Button>

      <Box>
        <Text>Don't have an account?</Text>
        <Text textDecoration="underline">
          <Link to={REGISTER_PAGE}>Sign Up</Link>
        </Text>
      </Box>
    </AuthForm>
  );
}

export default Login;
