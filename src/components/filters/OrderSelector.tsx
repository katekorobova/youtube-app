import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
  BUTTON_BORDER_RADIUS,
  DEFAULT_CATEGORY,
  SORT_ORDERS,
} from "../../lib/constants";
import useQueryDraft from "../../hooks/useQueryDraft";

const OrderSelector = () => {
  const { queryDraft, setQueryDraft } = useQueryDraft();
  const currentOrder = SORT_ORDERS.find(
    ({ value }) => value === queryDraft.order
  );

  return (
    <Menu>
      <MenuButton
        borderRadius={BUTTON_BORDER_RADIUS}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Sort by: {currentOrder?.label ?? DEFAULT_CATEGORY}
      </MenuButton>
      <MenuList>
        {SORT_ORDERS.map(({ value, label }) => (
          <MenuItem
            onClick={() => setQueryDraft({ ...queryDraft, order: value })}
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

export default OrderSelector;
