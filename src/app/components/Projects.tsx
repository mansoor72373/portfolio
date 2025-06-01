"use client";
import {
  Box,
  Heading,
  Text,
  Flex,
  Tag,
  TagLabel,
  Image,
  Button,
  Container,
  VStack,
  HStack,
  useColorModeValue,
  Badge,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

// Enhanced project data with more details
const projects = [
  {
    id: 1,
    title: "Gadget Galaxy",
    description: "A modern e-commerce website for gadgets and electronics.",
    longDescription:
      "Gadget Galaxy is a responsive e-commerce platform showcasing a wide range of gadgets and electronics. Features include product listings, smooth navigation, and a clean UI.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web App",
    demoLink: "https://mansoor72373.github.io/Gadget-Galaxy/",
    githubLink: "https://github.com/mansoor72373/Gadget-Galaxy",
    featured: true,
  },
  {
    id: 2,
    title: "My Motion App",
    description:
      "A creative web app demonstrating animation with Framer Motion.",
    longDescription:
      "My Motion App is a portfolio project that leverages Framer Motion to create smooth, interactive animations and transitions, enhancing the user experience.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Framer Motion"],
    category: "Web App",
    demoLink: "https://mansoor72373.github.io/my-motion-app/",
    githubLink: "https://github.com/mansoor72373/my-motion-app",
    featured: true,
  },
];

// Filter categories based on project data
const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("teal.50", "teal.700");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const toggleProjectExpansion = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <Box
      as="section"
      id="projects"
      py={16}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Badge
              colorScheme="teal"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="md"
            >
              Portfolio
            </Badge>
            <Heading
              as="h2"
              size="2xl"
              textAlign="center"
              bgGradient="linear(to-r, teal.500, blue.500)"
              bgClip="text"
            >
              My Projects
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.400")}
              textAlign="center"
              maxW="container.md"
            >
              Explore my latest work across various domains and technologies
            </Text>
          </VStack>

          {/* Category Filter */}
          <Flex
            justify="center"
            wrap="wrap"
            gap={3}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                size="md"
                variant={activeCategory === category ? "solid" : "outline"}
                colorScheme="teal"
                onClick={() => setActiveCategory(category)}
                borderRadius="full"
                px={5}
              >
                {category}
              </Button>
            ))}
          </Flex>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            w="100%"
            minW="0"
            overflowX="visible"
            sx={{
              "::-webkit-scrollbar": { display: "none" },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            {filteredProjects.map((project, index) => (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                overflow="hidden"
                borderRadius="lg"
                boxShadow="md"
                bg={bgColor}
                position="relative"
                w="100%"
                minW="0"
              >
                {project.featured && (
                  <Badge
                    position="absolute"
                    top={3}
                    right={3}
                    colorScheme="purple"
                    zIndex={1}
                    borderRadius="full"
                    px={2}
                    py={0.5}
                  >
                    Featured
                  </Badge>
                )}

                <Box position="relative" h="180px" overflow="hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    objectFit="cover"
                    w="full"
                    h="full"
                    transition="transform 0.5s"
                    _groupHover={{ transform: "scale(1.05)" }}
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="blackAlpha.600"
                    opacity={0}
                    transition="opacity 0.3s"
                    _groupHover={{ opacity: 1 }}
                  />
                </Box>

                <VStack p={4} align="start" spacing={3}>
                  <Heading as="h3" size="md">
                    {project.title}
                  </Heading>

                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {expandedProject === project.id
                      ? project.longDescription
                      : project.description}
                  </Text>

                  <Button
                    variant="link"
                    colorScheme="teal"
                    size="sm"
                    onClick={() => toggleProjectExpansion(project.id)}
                  >
                    {expandedProject === project.id ? "Show less" : "Read more"}
                  </Button>

                  <HStack spacing={2} flexWrap="wrap">
                    {project.tags.map((tag) => (
                      <Tag
                        key={tag}
                        size="sm"
                        borderRadius="full"
                        colorScheme="blue"
                        variant="subtle"
                        my={1}
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </HStack>

                  <HStack spacing={3} pt={2}>
                    <Button
                      as="a"
                      href={project.demoLink}
                      target="_blank"
                      size="sm"
                      colorScheme="teal"
                      leftIcon={<Icon as={FaExternalLinkAlt} />}
                      borderRadius="full"
                    >
                      Live Demo
                    </Button>
                    <Button
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      size="sm"
                      leftIcon={<Icon as={FaGithub} />}
                      variant="outline"
                      borderRadius="full"
                    >
                      Code
                    </Button>
                  </HStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
