import { SimpleGrid } from "@chakra-ui/react";
import useQueryDraft from "../../hooks/useQueryDraft";
import { GRID_COLUMNS, GRID_SPACING } from "../../lib/constants";
import CategorySelector from "./CategorySelector";
import DateSelector from "./DateSelector";
import LocationSelector from "./LocationSelector";
import OrderSelector from "./OrderSelector";

const FilterGrid = () => {
  const { queryDraft, setQueryDraft } = useQueryDraft();
  const { publishedAfter, publishedBefore } = queryDraft;

  return (
    <SimpleGrid
      columns={GRID_COLUMNS}
      spacing={GRID_SPACING}
      marginBottom={GRID_SPACING}
    >
      <DateSelector
        date={publishedAfter}
        onChangeDate={(publishedAfter) =>
          setQueryDraft({ ...queryDraft, publishedAfter })
        }
        label="From:"
      />
      <DateSelector
        date={publishedBefore}
        onChangeDate={(publishedBefore) =>
          setQueryDraft({ ...queryDraft, publishedBefore })
        }
        label="To:"
      />
      <CategorySelector />
      <LocationSelector />
      <OrderSelector />
    </SimpleGrid>
  );
};

export default FilterGrid;
