import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useVideos from "../../hooks/useVideos";
import {
  GRID_COLUMNS,
  GRID_SPACING,
  HEADING_SIZE,
  SKELETON_COUNT,
} from "../../lib/constants";
import { VideoQuery } from "../../lib/types";
import VideoCard from "./VideoCard";
import VideoCardContainer from "./VideoCardContainer";
import VideoCardSkeleton from "./VideoCardSkeleton";

interface Props {
  query?: VideoQuery;
}

const VideoGrid = ({ query }: Props) => {
  const { data, error, isLoading } = useVideos(query);
  const skeletons = [...Array(SKELETON_COUNT).keys()];

  const renderContent = () => {
    if (!query) {
      return <Text>Press search</Text>;
    } else if (error) {
      return <Text>{error}</Text>;
    } else {
      return (
        <SimpleGrid columns={GRID_COLUMNS} spacing={GRID_SPACING}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <VideoCardContainer key={skeleton}>
                <VideoCardSkeleton />
              </VideoCardContainer>
            ))}
          {!isLoading &&
            (data.length ? (
              data.map((video) => (
                <VideoCardContainer key={video.id.videoId}>
                  <VideoCard video={video} />
                </VideoCardContainer>
              ))
            ) : (
              <Text>No videos found</Text>
            ))}
        </SimpleGrid>
      );
    }
  };

  return (
    <div>
      <Heading as="h1" fontSize={HEADING_SIZE} marginBottom={5}>
        Search results
      </Heading>
      {renderContent()}
    </div>
  );
};

export default VideoGrid;
