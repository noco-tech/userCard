import { memo, ReactNode, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  cardClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo(
  ({ id, imageUrl, userName, fullName, cardClick }) => {
    return (
      <Box
        p={4}
        w="260px"
        h="260px"
        bg="#fff"
        borderRadius="10px"
        shadow="md"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => cardClick(id)}
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src={imageUrl}
            alt={userName}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text fontSize="sm" color="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    );
  }
);
