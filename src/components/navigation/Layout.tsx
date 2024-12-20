import { Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import NavBar from "./NavBar";
import "./layout.css";
import { NAV_BAR_HEIGHT } from "../../lib/constants";

const PADDING = { X: 2, Y: 2 };

interface Props {
  children?: ReactNode;
  navChildren?: ReactNode;
  justifyItems?: string;
}

const Layout = ({ children, navChildren, justifyItems }: Props) => {
  const isLight = useColorMode().colorMode === "light";

  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem
        as="main"
        area="main"
        paddingTop={0}
        paddingX={PADDING.X}
        paddingBottom={PADDING.Y}
        justifyItems={justifyItems}
        marginTop={NAV_BAR_HEIGHT}
      >
        {children}
      </GridItem>
      <GridItem
        as="header"
        area="nav"
        paddingX={PADDING.X}
        paddingY={PADDING.Y}
        className={`header ${isLight ? "light-theme" : "dark-theme"}`}
        height={NAV_BAR_HEIGHT}
      >
        <NavBar>{navChildren}</NavBar>
      </GridItem>
    </Grid>
  );
};

export default Layout;
