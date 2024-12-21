import { Heading } from "@chakra-ui/react";
import { HEADING_SIZE } from "../../lib/constants";

interface Props {
  children: string;
}

const PageTitle = ({ children }: Props) => {
  return (
    <Heading as="h1" fontSize={HEADING_SIZE} marginBottom={4}>
      {children}
    </Heading>
  );
};

export default PageTitle;
