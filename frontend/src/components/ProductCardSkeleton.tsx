// /frontend/src/components/ProductCardSkeleton.tsx
import { Box, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

export const ProductCardSkeleton = () => {
  return (
    <Box
      bg="gray.800"
      p={6}
      borderRadius="lg"
      border="1px"
      borderColor="gray.700"
    >
      <VStack spacing={4}>
        <Skeleton height="200px" width="200px" borderRadius="md" />
        <Skeleton height="20px" width="80%" />
        <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" width="100%" />
        <Skeleton height="30px" width="50%" mt={4} />
      </VStack>
    </Box>
  );
};