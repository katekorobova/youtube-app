import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FILTER_BORDER_RADIUS } from "../../lib/constants";

interface Props {
  order: string;
  onSelectOrder: (order: string) => void;
}

const OrderSelector = ({ order, onSelectOrder }: Props) => {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "date", label: "Upload date" },
    { value: "viewCount", label: "View count" },
    { value: "rating", label: "Rating" },
    { value: "title", label: "Title" },
  ];

  const currentOrder = sortOrders.find((entry) => entry.value === order);

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
        {sortOrders.map((entry) => (
          <MenuItem
            onClick={() => onSelectOrder(entry.value)}
            key={entry.value}
            value={entry.value}
          >
            {entry.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
