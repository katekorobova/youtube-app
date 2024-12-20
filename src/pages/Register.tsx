import { Box, Button, FormHelperText, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCheck, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import { BUTTON_BORDER_RADIUS, LOGIN_PAGE } from "../lib/constants";
import { TokenResponse } from "../lib/types";

const REGISTER_URL = "register";
const USER_REGEX = /^[a-zA-Z][a-zA-Z\d-_]{2,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const { setAuth } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [validName, setValidName] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => setValidName(USER_REGEX.test(user)), [user]);
  useEffect(() => setValidPass(PASS_REGEX.test(pass)), [pass]);
  useEffect(() => setErrorMessage(undefined), [user, pass]);

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const response = await axios.post<TokenResponse>(REGISTER_URL, {
        username: user,
        password: pass,
      });
      const { username, accessToken } = response.data;
      setAuth({ username, accessToken });
    } catch (error: any) {
      if (!error?.response) {
        setErrorMessage("No Response");
      } else if (error.response?.status === 409) {
        setErrorMessage("Username Taken");
      } else {
        setErrorMessage("Registration Failed");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthForm
      title="Register"
      username={user}
      password={pass}
      onUsernameChange={setUser}
      onPasswordChange={setPass}
      errorMessage={errorMessage}
      usernameHelperText={
        !validName && (
          <FormHelperText>
            <div>3 to 24 charactters.</div>
            <div>Must begin with a letter.</div>
            <div>Letters, numbers, underscores, hyphens allowed.</div>
          </FormHelperText>
        )
      }
      passwordHelperText={
        !validPass && (
          <FormHelperText>
            <div>8 to 24 characters.</div>
            <div>
              Must include uppercase and lowercase letters, a number and a
              special character.
            </div>
            <div>Allowed special characters: !@#$%</div>
          </FormHelperText>
        )
      }
      usernameLabelAddons={
        <>
          {validName && <Icon as={BsCheck} />}
          {user && !validName && <Icon as={BsX} />}
        </>
      }
      passwordLabelAddons={
        <>
          {validPass && <Icon as={BsCheck} />}
          {pass && !validPass && <Icon as={BsX} />}
        </>
      }
    >
      <Button
        alignSelf="start"
        onClick={handleSubmit}
        borderRadius={BUTTON_BORDER_RADIUS}
        disabled={isLoading || !validName || !validPass}
      >
        Sign Up
      </Button>

      <Box>
        <Text>Already registered?</Text>
        <Text textDecoration="underline">
          <Link to={LOGIN_PAGE}>Sign In</Link>
        </Text>
      </Box>
    </AuthForm>
  );
}

export default Register;
