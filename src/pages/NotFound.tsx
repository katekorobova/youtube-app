import { Text } from "@chakra-ui/react";
import Layout from "../components/common/Layout";
import PageTitle from "../components/common/PageTitle";

function NotFound() {
  return (
    <Layout>
      <PageTitle>Not Found</PageTitle>
      <Text>Sorry, the page doesn't exist</Text>
    </Layout>
  );
}

export default NotFound;
