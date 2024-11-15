import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Video } from "../../hooks/useVideos";

function unescape(htmlStr: string) {
  return htmlStr
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  return (
    <Link href={href} isExternal>
      <Card>
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