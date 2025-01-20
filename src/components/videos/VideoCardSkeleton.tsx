import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { SKELETON_HEIGHT } from "../../lib/constants";

const VideoCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={SKELETON_HEIGHT} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default VideoCardSkeleton;
