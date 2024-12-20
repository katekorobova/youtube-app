import { Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/navigation/Layout";
import useAuth from "../hooks/useAuth";
import {
  BUTTON_BORDER_RADIUS,
  FORM_WIDTH,
  GRID_SPACING,
  HEADING_SIZE,
  HISTORY_PAGE,
  HOME_PAGE,
} from "../lib/constants";

const Profile = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    setAuth(undefined);
  };

  return (
    <Layout justifyItems="center">
      <SimpleGrid width={FORM_WIDTH} spacing={GRID_SPACING}>
        <Heading as="h1" fontSize={HEADING_SIZE}>
          <Text>Hello, {auth?.username}!</Text>
        </Heading>
        <Button
          onClick={() => navigate(HOME_PAGE)}
          borderRadius={BUTTON_BORDER_RADIUS}
        >
          Go to the home page
        </Button>
        <Button
          onClick={() => navigate(HISTORY_PAGE)}
          borderRadius={BUTTON_BORDER_RADIUS}
        >
          View your search history
        </Button>
        <Button onClick={logout} borderRadius={BUTTON_BORDER_RADIUS}>
          Sign Out
        </Button>
      </SimpleGrid>
    </Layout>
  );
};

export default Profile;
