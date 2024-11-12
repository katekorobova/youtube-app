import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./search/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  onClick: () => void;
}

const NavBar = ({ onSearch, onClick }: Props) => {
  return (
    <HStack marginBottom={5}
    justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize="32px" />
        <Heading fontSize="2xl">UwuTube</Heading>
      </HStack>
      <SearchInput onSearch={onSearch} onClick={onClick}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
