import { Button } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BUTTON_BORDER_RADIUS,
  LOGIN_PAGE,
  PROFILE_PAGE,
} from "../../lib/constants";

const UserIcon = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (auth) {
    return (
      <Button
        borderRadius={BUTTON_BORDER_RADIUS}
        onClick={() => navigate(PROFILE_PAGE)}
      >
        Hello, {auth.username}!
      </Button>
    );
  } else {
    return (
      <Button
        borderRadius={BUTTON_BORDER_RADIUS}
        onClick={() => navigate(LOGIN_PAGE, { state: { from: location } })}
      >
        Sign In
      </Button>
    );
  }
};

export default UserIcon;
