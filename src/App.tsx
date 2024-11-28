import { Box, Grid, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import VideoGrid from "./components/videos/VideoGrid";
import NavBar from "./components/NavBar";
import OrderSelector from "./components/filters/OrderSelector";
import DateSelector from "./components/filters/DateSelector";
import { VideoQuery } from "./lib/types";
import { GRID_COLUMNS, GRID_SPACING } from "./lib/constants";
import CategorySelector from "./components/filters/CategorySelector";
import LocationSelector from "./components/filters/LocationSelector";

function App() {
  const [videoQueryDraft, setVideoQueryDraft] = useState<VideoQuery>(
    {} as VideoQuery
  );
  const [videoQuery, setVideoQuery] = useState<VideoQuery>({} as VideoQuery);

  return (
    <Grid paddingX={2} paddingY={2} templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => {
            setVideoQueryDraft({ ...videoQueryDraft, searchText });
          }}
          onClick={() => {
            setVideoQuery({ ...videoQueryDraft });
          }}
        />
      </GridItem>
      <GridItem area="main">
        <Box>
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
            ></CategorySelector>
            <LocationSelector
              locationData={videoQueryDraft.locationData}
              onSelectLocation={(locationData) =>
                setVideoQueryDraft({ ...videoQueryDraft, locationData })
              }
            ></LocationSelector>
            <OrderSelector
              order={videoQueryDraft.order}
              onSelectOrder={(order) =>
                setVideoQueryDraft({ ...videoQueryDraft, order })
              }
            />
          </SimpleGrid>
          <Heading as="h1" marginBottom={5}>
            Search results
          </Heading>
        </Box>
        <VideoGrid videoQuery={videoQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
