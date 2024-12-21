import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useColorMode,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useQueryDraft from "../../hooks/useQueryDraft";
import { INPUT_BORDER_RADIUS } from "../../lib/constants";
import "./search-input.css";

interface Props {
  onClick: () => void;
}

const SearchInput = ({ onClick }: Props) => {
  const isLight = useColorMode().colorMode === "light";
  const { queryDraft, setQueryDraft } = useQueryDraft();

  return (
    <span className={`search-form ${isLight ? "light-theme" : "dark-theme"}`}>
      <InputGroup>
        <Input
          id="search-input"
          borderLeftRadius={INPUT_BORDER_RADIUS}
          placeholder="Search"
          variant="outline"
          maxLength={50}
          value={queryDraft.q ?? ""}
          onChange={(event) => {
            event.preventDefault();
            setQueryDraft({ ...queryDraft, q: event.target.value });
          }}
        />
        <InputRightAddon
          as={Button}
          id="search-button"
          aria-label="Search Button"
          borderRightRadius={INPUT_BORDER_RADIUS}
          onClick={onClick}
        >
          <BsSearch />
        </InputRightAddon>
      </InputGroup>
    </span>
  );
};

export default SearchInput;
