import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Video } from "../../hooks/useVideos";
import "./video-card.css";

function unescape(htmlStr: string) {
  htmlStr = htmlStr.replace(/&lt;/g, "<");
  htmlStr = htmlStr.replace(/&gt;/g, ">");
  htmlStr = htmlStr.replace(/&quot;/g, '"');
  htmlStr = htmlStr.replace(/&#39;/g, "'");
  htmlStr = htmlStr.replace(/&amp;/g, "&");
  return htmlStr;
}

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  const isLight = useColorMode().colorMode === "light";
  return (
    <Link href={href} isExternal>
      <Card className={isLight ? "video-card-light" : "video-card-dark"}>
        <Image src={video.snippet.thumbnails.high.url} />
        <CardBody>
          <Heading fontSize="xl" marginBottom={1}>
            {unescape(video.snippet.title)}
          </Heading>
          <Text fontSize="sm">{video.snippet.channelTitle}</Text>
          <Text fontSize="sm">{video.snippet.publishedAt}</Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default VideoCard;
