import {
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import Layout from "../common/Layout";
import {
  FORM_WIDTH,
  GRID_SPACING,
  HEADING_SIZE,
  INPUT_BORDER_RADIUS,
} from "../../lib/constants";

interface AuthFormProps {
  title: string;
  username?: string;
  password?: string;
  children?: ReactNode;
  errorMessage?: string;
  usernameHelperText?: ReactNode;
  passwordHelperText?: ReactNode;
  usernameLabelAddons?: ReactNode;
  passwordLabelAddons?: ReactNode;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
}

const AuthForm = ({
  title,
  username,
  password,
  children,
  errorMessage,
  onUsernameChange,
  onPasswordChange,
  usernameHelperText,
  passwordHelperText,
  usernameLabelAddons,
  passwordLabelAddons,
}: AuthFormProps) => {
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  return (
    <Layout justifyItems="center">
      <SimpleGrid width={FORM_WIDTH} spacing={GRID_SPACING}>
        {/* Error Message */}
        {errorMessage && (
          <Alert status="error">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}

        {/* Form Title */}
        <Heading as="h1" fontSize={HEADING_SIZE}>
          {title}
        </Heading>

        {/* Username Input */}
        <FormControl>
          <FormLabel htmlFor="username">
            Username: {usernameLabelAddons}
          </FormLabel>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            autoComplete="off"
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
            borderRadius={INPUT_BORDER_RADIUS}
          />
          {usernameFocus && usernameHelperText}
        </FormControl>

        {/* Password Input */}
        <FormControl>
          <FormLabel htmlFor="password">
            Password: {passwordLabelAddons}
          </FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            borderRadius={INPUT_BORDER_RADIUS}
          />
          {passwordFocus && passwordHelperText}
        </FormControl>
        {children}
      </SimpleGrid>
    </Layout>
  );
};

export default AuthForm;
