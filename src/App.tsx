import { Box, Grid, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import VideoGrid from "./components/videos/VideoGrid";
import NavBar from "./components/NavBar";
import SortSelector from "./components/filters/SortSelector";
import DateSelector from "./components/dates/DateSelector";
import { VideoQuery } from "./lib/types";
import { GRID_COLUMNS, GRID_SPACING } from "./lib/constants";

function App() {
  const [videoQueryDraft, setVideoQueryDraft] = useState<VideoQuery>({
    order: "relevance",
  } as VideoQuery);
  const [videoQuery, setVideoQuery] = useState<VideoQuery>({} as VideoQuery);

  return (
    <Grid
      paddingX={2}
      paddingY={2}
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
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
            <SortSelector
              order={videoQueryDraft.order}
              onSelectOrder={(order) =>
                setVideoQueryDraft({ ...videoQueryDraft, order })
              }
            />
          </SimpleGrid>
          <Heading as='h1' marginBottom={5} fontSize='5xl'>Search results</Heading>
        </Box>
        <VideoGrid videoQuery={videoQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
