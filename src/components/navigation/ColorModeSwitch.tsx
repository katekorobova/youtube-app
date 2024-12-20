import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <BsFillSunFill />
      <Switch
        id="switch"
        colorScheme="pink"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <BsFillMoonFill />
    </HStack>
  );
};

export default ColorModeSwitch;
