import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
  BUTTON_BORDER_RADIUS,
  DEFAULT_LOCATION,
  LOCATIONS,
  SELECTOR_HEIGHT,
} from "../../lib/constants";
import useQueryDraft from "../../hooks/useQueryDraft";

const LocationSelector = () => {
  const { queryDraft, setQueryDraft } = useQueryDraft();
  const currentLocation = LOCATIONS.find(
    ({ value }) => value === queryDraft.locationData
  );

  return (
    <Menu>
      <MenuButton
        borderRadius={BUTTON_BORDER_RADIUS}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Location: {currentLocation?.label ?? DEFAULT_LOCATION}
      </MenuButton>
      <MenuList maxHeight={SELECTOR_HEIGHT} overflowY="scroll">
        {LOCATIONS.map(({ value, label }) => (
          <MenuItem
            onClick={() =>
              setQueryDraft({ ...queryDraft, locationData: value })
            }
            key={label}
            value={label}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LocationSelector;
