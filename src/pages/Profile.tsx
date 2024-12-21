import { Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";
import {
  BUTTON_BORDER_RADIUS,
  FORM_WIDTH,
  GRID_SPACING,
  HEADING_SIZE,
  HISTORY_PAGE,
  HOME_PAGE,
} from "../lib/constants";

const Profile = () => {
  const logout = useLogout();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
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
        <Button onClick={signOut} borderRadius={BUTTON_BORDER_RADIUS}>
          Sign Out
        </Button>
      </SimpleGrid>
    </Layout>
  );
};

export default Profile;
