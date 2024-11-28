import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import VideoGrid from "./components/videos/VideoGrid";
import NavBar from "./components/NavBar";
import { VideoQuery } from "./lib/types";
import FilterGrid from "./components/filters/FilterGrid";

function App() {
  const [videoQueryDraft, setVideoQueryDraft] = useState<VideoQuery>(
    {} as VideoQuery
  );
  const [videoQuery, setVideoQuery] = useState<VideoQuery | null>(null);

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
        <FilterGrid
          videoQueryDraft={videoQueryDraft}
          setVideoQueryDraft={setVideoQueryDraft}
        />
        <VideoGrid videoQuery={videoQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
