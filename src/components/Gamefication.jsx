import { Text, Flex, Box, Divider, Badge } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, AttachmentIcon } from "@chakra-ui/icons";

function Gamefication() {
  return (
    <Flex
      minW="300px"
      border="1px"
      borderRadius="4px"
      borderColor="gray.200"
      direction="column"
      maxW="350px"
    >
      <Text
        color="black"
        p="10px"
        borderBottom="1px"
        borderColor="gray.200"
        as="b"
        fontSize="lg"
      >
        Suas atividades
      </Text>
      <Box px="10px">
        <Box py="10px">
          <Flex alignItems="center">
            <CheckIcon
              borderRadius="full"
              p="8px"
              bgGradient="linear(to-r, #4FDD71, #1DB37C)"
              boxSize={7}
              color="white"
            />
            <Flex direction="column" marginStart="8px">
              <Text color="black" as="b" fontSize="sm">
                32
              </Text>
              <Text fontSize="xs" color="gray.400">
                Atividades corretas
              </Text>
            </Flex>
            <Badge marginLeft="auto" borderRadius="4px" colorScheme="blue">
              + 20xp
            </Badge>
          </Flex>
        </Box>

        <Divider />

        <Box py="10px">
          <Flex alignItems="center">
            <CloseIcon
              borderRadius="full"
              p="8px"
              bgGradient="linear(to-r, #FF716F, #FA3F54)"
              boxSize={7}
              color="white"
            />
            <Flex direction="column" marginStart="8px">
              <Text color="black" as="b" fontSize="sm">
                32
              </Text>
              <Text fontSize="xs" color="gray.400">
                Atividades erradas
              </Text>
            </Flex>
            <Badge marginLeft="auto" borderRadius="4px" colorScheme="red">
              - 20xp
            </Badge>
          </Flex>
        </Box>

        <Divider />

        <Box py="10px">
          <Flex alignItems="center">
            <AttachmentIcon
              borderRadius="full"
              p="8px"
              bgGradient="linear(to-r, #0FE8FF, #48CAFF)"
              boxSize={7}
              color="white"
            />
            <Flex direction="column" marginStart="8px">
              <Text color="black" as="b" fontSize="sm">
                32
              </Text>
              <Text fontSize="xs" color="gray.400">
                Atividades enviadas para correção
              </Text>
            </Flex>
            <Badge marginLeft="auto" borderRadius="4px" colorScheme="blue">
              + 20xp
            </Badge>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Gamefication;
