import { Heading, Text } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";
import { HEADING_SIZE } from "../lib/constants";

function NotFound() {
  return (
    <Layout>
      <Heading as="h1" fontSize={HEADING_SIZE} marginBottom={4}>
        Not Found
      </Heading>
      <Text>Sorry, the page doesn't exist</Text>
    </Layout>
  );
}

export default NotFound;
