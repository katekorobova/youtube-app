import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
  BUTTON_BORDER_RADIUS,
  DEFAULT_CATEGORY,
  SELECTOR_HEIGHT,
  VIDEO_CATEGORIES,
} from "../../lib/constants";
import useQueryDraft from "../../hooks/useQueryDraft";

const CategorySelector = () => {
  const { queryDraft, setQueryDraft } = useQueryDraft();
  const currentCategory = VIDEO_CATEGORIES.find(
    ({ value }) => value === queryDraft.category
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        borderRadius={BUTTON_BORDER_RADIUS}
        rightIcon={<BsChevronDown />}
      >
        Category: {currentCategory?.label ?? DEFAULT_CATEGORY}
      </MenuButton>
      <MenuList maxHeight={SELECTOR_HEIGHT} overflowY="scroll">
        {VIDEO_CATEGORIES.map(({ value, label }) => (
          <MenuItem
            onClick={() => setQueryDraft({ ...queryDraft, category: value })}
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

export default CategorySelector;
