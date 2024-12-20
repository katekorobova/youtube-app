import { useState } from "react";
import FilterGrid from "../components/filters/FilterGrid";
import Layout from "../components/navigation/Layout";
import SearchInput from "../components/search/SearchInput";
import VideoGrid from "../components/videos/VideoGrid";
import { VideoQuery } from "../lib/types";
import useQueryDraft from "../hooks/useQueryDraft";

function Home() {
  const [query, setQuery] = useState<VideoQuery>();
  const { queryDraft } = useQueryDraft();
  return (
    <Layout
      navChildren={<SearchInput onClick={() => setQuery({ ...queryDraft })} />}
    >
      <FilterGrid />
      <VideoGrid query={query} />
    </Layout>
  );
}

export default Home;
