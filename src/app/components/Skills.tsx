"use client";
import {
  Box,
  Heading,
  Text,
  Flex,
  Progress,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaTabletAlt } from "react-icons/fa";

const skills = [
  { name: "React", value: 80, color: "blue.400" },
  { name: "Next.js", value: 75, color: "pink.400" },
  { name: "Node.js", value: 70, color: "green.400" },
  { name: "MongoDB", value: 65, color: "yellow.400" },
  { name: "TypeScript", value: 60, color: "purple.400" },
  { name: "Chakra UI", value: 85, color: "teal.400" },
  { name: "REST APIs", value: 90, color: "red.400" },
  { name: "GraphQL", value: 50, color: "pink.400" },
];

const Skills = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("teal.500", "teal.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const progressTextColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box as="section" id="skills" p={8} bg={bgColor}>
      <Box maxW="container.xl" mx="auto">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={4}
          color={headingColor}
        >
          My Skills
        </Heading>
        <Text textAlign="center" mb={10} color={textColor}>
          I Like To Craft Beautiful And Scalable Web Products
        </Text>

        <Flex direction={{ base: "column", md: "row" }} gap={8} align="center">
          {/* Left Side - Skill Categories */}
          <VStack align="start" spacing={6} w={{ base: "100%", md: "40%" }}>
            <HStack>
              <Icon as={FaCode} boxSize={6} color="blue.500" />
              <Box>
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  Design + Development
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Clean, modern designs - optimized for performance, search
                  engines, and converting users.
                </Text>
              </Box>
            </HStack>

            <HStack>
              <Icon as={FaLaptopCode} boxSize={6} color="green.500" />
              <Box>
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  Technology
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Combined all the latest technologies to build progressive
                  websites.
                </Text>
              </Box>
            </HStack>

            <HStack>
              <Icon as={FaTabletAlt} boxSize={6} color="purple.500" />
              <Box>
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  Always Responsive
                </Text>
                <Text fontSize="sm" color={textColor}>
                  A responsive design ensures accessibility on all devices.
                </Text>
              </Box>
            </HStack>
          </VStack>

          {/* Right Side - Progress Bars */}
          <VStack align="start" w={{ base: "100%", md: "60%" }} spacing={5}>
            {skills.map((skill) => (
              <Box key={skill.name} w="100%">
                <Text fontSize="md" fontWeight="bold" mb={1} color={textColor}>
                  {skill.name}
                </Text>
                <Box position="relative" w="100%">
                  <Progress
                    value={skill.value}
                    size="md"
                    colorScheme={skill.color.replace(".400", "")}
                  />
                  <Text
                    position="absolute"
                    top="50%"
                    right="4px"
                    transform="translateY(-50%)"
                    fontSize="sm"
                    fontWeight="bold"
                    color={progressTextColor}
                  >
                    {skill.value}%
                  </Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Skills;
