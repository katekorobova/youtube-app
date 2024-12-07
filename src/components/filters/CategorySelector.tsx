import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FILTER_BORDER_RADIUS, VIDEO_CATEGORIES } from "../../lib/constants";

interface Props {
  category: number | null;
  onSelectCategory: (category: number | null) => void;
}

const CategorySelector = ({ category, onSelectCategory }: Props) => {
  const currentCategory = VIDEO_CATEGORIES.find(
    (entry) => entry.value === category
  );

  return (
    <Menu>
      <MenuButton
        borderRadius={FILTER_BORDER_RADIUS}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Category: {currentCategory?.label ?? "Any"}
      </MenuButton>
      <MenuList maxHeight="12rem" overflowY="scroll">
        {VIDEO_CATEGORIES.map((entry) => (
          <MenuItem
            onClick={() => onSelectCategory(entry.value)}
            key={entry.value}
            value={entry.label}
          >
            {entry.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;
