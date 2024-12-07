import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode:
    localStorage.getItem("chakra-ui-color-mode") === "light" ? "light" : "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#444444",
      700: "#202020",
      800: "#121212",
      900: "#0f0f0f",
    },
    pink: {
      50: "#ffe3fe",
      100: "#ffccfb",
      200: "#ffb2f3",
      300: "#fd81ea",
      400: "#fd51e1",
      500: "#fc26d9",
      600: "#e316c0",
      700: "#b10d95",
      800: "#7f056b",
      900: "#4d0041",
    },
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          _light: {
            backgroundColor: "gray.100",
            shadow: "none",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        textAlign: "left",
        fontWeight: "",
      },
    },
  },
});

export default theme;
