import { Heading, HStack, Image, Show } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  APP_NAME,
  HISTORY_PAGE,
  HOME_PAGE,
  NAV_BAR_SPACING,
} from "../../lib/constants";
import ColorModeSwitch from "./ColorModeSwitch";
import UserIcon from "./UserIcon";

interface Props {
  children: ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <HStack justifyContent="space-between" spacing={NAV_BAR_SPACING}>
      <HStack spacing={NAV_BAR_SPACING}>
        <Link to={HISTORY_PAGE}>
          <BsClockHistory size="24px" />
        </Link>
        <Link to={HOME_PAGE}>
          <HStack>
            <Image src={logo} minWidth="34.8px" alt="" />
            <Show above="md">
              <Heading fontSize="2xl">{APP_NAME}</Heading>
            </Show>
          </HStack>
        </Link>
      </HStack>

      {children}

      <HStack spacing={NAV_BAR_SPACING}>
        <ColorModeSwitch />
        <UserIcon />
      </HStack>
    </HStack>
  );
};

export default NavBar;
