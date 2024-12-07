import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FILTER_BORDER_RADIUS, SORT_ORDERS } from "../../lib/constants";

interface Props {
  order: string | null;
  onSelectOrder: (order: string | null) => void;
}

const OrderSelector = ({ order, onSelectOrder }: Props) => {
  const currentOrder = SORT_ORDERS.find((entry) => entry.value === order);

  return (
    <Menu>
      <MenuButton
        borderRadius={FILTER_BORDER_RADIUS}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Sort by: {currentOrder?.label ?? "Relevance"}
      </MenuButton>
      <MenuList>
        {SORT_ORDERS.map((entry) => (
          <MenuItem
            onClick={() => onSelectOrder(entry.value)}
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

export default OrderSelector;
