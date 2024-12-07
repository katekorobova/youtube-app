import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FILTER_BORDER_RADIUS, LOCATIONS } from "../../lib/constants";
import { LocationData } from "../../lib/types";

interface Props {
  locationData: LocationData | null;
  onSelectLocation: (location: LocationData | null) => void;
}

const LocationSelector = ({ locationData, onSelectLocation }: Props) => {
  const currentLocation = LOCATIONS.find(
    (entry) => entry.value === locationData
  );

  return (
    <Menu>
      <MenuButton
        borderRadius={FILTER_BORDER_RADIUS}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Location: {currentLocation?.label ?? "Any"}
      </MenuButton>
      <MenuList maxHeight="12rem" overflowY="scroll">
        {LOCATIONS.map((entry) => (
          <MenuItem
            onClick={() => onSelectLocation(entry.value)}
            key={entry.label}
            value={entry.label}
          >
            {entry.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LocationSelector;
