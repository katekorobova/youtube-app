import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useVideos from "../../hooks/useVideos";
import { GRID_COLUMNS, GRID_SPACING } from "../../lib/constants";
import { VideoQuery } from "../../lib/types";
import VideoCard from "./VideoCard";
import VideoCardContainer from "./VideoCardContainer";
import VideoCardSkeleton from "./VideoCardSkeleton";

interface Props {
  videoQuery: VideoQuery | null;
}

const VideoGrid = ({ videoQuery }: Props) => {
  const { data, error, isLoading } = useVideos(videoQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;

  return (
    <div>
      <Heading as="h1" marginBottom={5}>
        Search results
      </Heading>
      <SimpleGrid columns={GRID_COLUMNS} spacing={GRID_SPACING}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <VideoCardContainer key={skeleton}>
              <VideoCardSkeleton />
            </VideoCardContainer>
          ))}
        {!isLoading &&
          data.map((video) => (
            <VideoCardContainer key={video.id.videoId}>
              <VideoCard video={video} />
            </VideoCardContainer>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default VideoGrid;
