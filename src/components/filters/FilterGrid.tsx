import { SimpleGrid } from "@chakra-ui/react";
import { GRID_COLUMNS, GRID_SPACING } from "../../lib/constants";
import { VideoQuery } from "../../lib/types";
import DateSelector from "./DateSelector";
import CategorySelector from "./CategorySelector";
import LocationSelector from "./LocationSelector";
import OrderSelector from "./OrderSelector";

interface Props {
  videoQueryDraft: VideoQuery;
  setVideoQueryDraft: (videoQueryDraft: VideoQuery) => void;
}

const FilterGrid = ({ videoQueryDraft, setVideoQueryDraft }: Props) => {
  return (
    <SimpleGrid
      columns={GRID_COLUMNS}
      spacing={GRID_SPACING}
      marginBottom={GRID_SPACING}
    >
      <DateSelector
        date={videoQueryDraft.publishedAfter}
        onChangeDate={(publishedAfter) =>
          setVideoQueryDraft({ ...videoQueryDraft, publishedAfter })
        }
        label="From:"
      />
      <DateSelector
        date={videoQueryDraft.publishedBefore}
        onChangeDate={(publishedBefore) =>
          setVideoQueryDraft({ ...videoQueryDraft, publishedBefore })
        }
        label="To:"
      />
      <CategorySelector
        category={videoQueryDraft.category}
        onSelectCategory={(category) =>
          setVideoQueryDraft({ ...videoQueryDraft, category })
        }
      />
      <LocationSelector
        locationData={videoQueryDraft.locationData}
        onSelectLocation={(locationData) =>
          setVideoQueryDraft({ ...videoQueryDraft, locationData })
        }
      />
      <OrderSelector
        order={videoQueryDraft.order}
        onSelectOrder={(order) =>
          setVideoQueryDraft({ ...videoQueryDraft, order })
        }
      />
    </SimpleGrid>
  );
};

export default FilterGrid;
