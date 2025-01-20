import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Video } from "../../hooks/useVideos";
import { DATE_FORMAT_OPTIONS } from "../../lib/constants";

const unescapeHtml = (htmlStr: string) =>
  htmlStr
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  return (
    <Link href={videoUrl} isExternal>
      <Card>
        <Image src={thumbnails.high.url} alt="Video Thumbnail" />
        <CardBody>
          <Heading fontSize="xl" marginBottom={1}>
            {unescapeHtml(title)}
          </Heading>
          <Box fontSize="sm">
            <Text>{channelTitle}</Text>
            <Text>
              {new Date(publishedAt).toLocaleString(
                "en-US",
                DATE_FORMAT_OPTIONS
              )}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default VideoCard;
