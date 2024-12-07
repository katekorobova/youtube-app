import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { SEARCH_BORDER_RADIUS } from "../../lib/constants";
import "./search-input.css";

interface Props {
  onSearch: (searchText: string) => void;
  onClick: () => void;
}

const SearchInput = ({ onSearch, onClick }: Props) => {
  const isLight = useColorMode().colorMode === "light";
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className={`search-form ${isLight ? "light-theme" : "dark-theme"}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup>
        <Input
          id="search-input"
          ref={ref}
          borderLeftRadius={SEARCH_BORDER_RADIUS}
          placeholder="Search"
          variant="outline"
          maxLength={50}
          onChange={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
          }}
        />
        <InputRightAddon
          as={Button}
          id="search-button"
          aria-label="Search Button"
          borderRightRadius={SEARCH_BORDER_RADIUS}
          onClick={onClick}
        >
          <BsSearch></BsSearch>
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
