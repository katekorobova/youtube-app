import { SimpleGrid, Text } from "@chakra-ui/react";
import useVideos from "../../hooks/useVideos";
import {
  GRID_COLUMNS,
  GRID_SPACING,
  SKELETON_COUNT,
} from "../../lib/constants";
import { VideoQuery } from "../../lib/types";
import PageTitle from "../common/PageTitle";
import VideoCard from "./VideoCard";
import VideoCardContainer from "./VideoCardContainer";
import VideoCardSkeleton from "./VideoCardSkeleton";

interface Props {
  query?: VideoQuery;
}

const VideoGrid = ({ query }: Props) => {
  const { data, error, isLoading, isExecuted } = useVideos(query);
  const skeletons = [...Array(SKELETON_COUNT).keys()];

  const renderContent = () => {
    if (isLoading) {
      return (
        <SimpleGrid columns={GRID_COLUMNS} spacing={GRID_SPACING}>
          {skeletons.map((skeleton) => (
            <VideoCardContainer key={skeleton}>
              <VideoCardSkeleton />
            </VideoCardContainer>
          ))}
        </SimpleGrid>
      );
    }
    if (isExecuted) {
      if (error) {
        return <Text>{error}</Text>;
      } else if (data.length) {
        return (
          <SimpleGrid columns={GRID_COLUMNS} spacing={GRID_SPACING}>
            {data.map((video) => (
              <VideoCardContainer key={video.id.videoId}>
                <VideoCard video={video} />
              </VideoCardContainer>
            ))}
          </SimpleGrid>
        );
      } else {
        return <Text>No videos found</Text>;
      }
    } else {
      return <Text>Press search</Text>;
    }
  };

  return (
    <>
      <PageTitle>Search results</PageTitle>
      {renderContent()}
    </>
  );
};

export default VideoGrid;
