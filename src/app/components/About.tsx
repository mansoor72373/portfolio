"use client";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Maan from "@/assets/images/Maan1.jpg";
const About = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("teal.500", "teal.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const accentColor = useColorModeValue("teal.500", "teal.300");
  const borderColor = useColorModeValue("white", "gray.700");

  return (
    <Box as="section" id="about" bg={bgColor} p={8}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        maxW="container.xl"
        mx="auto"
        gap={{ base: 10, md: 16 }}
      >
        {/* Profile Image */}
        <Box position="relative" flexShrink={0} mx={{ base: "auto", md: "0" }}>
          <Image
            src={Maan.src}
            alt="Mansoor Ahmad"
            boxSize={48}
            objectFit="cover"
            rounded="full"
            borderWidth={4}
            borderColor={borderColor}
            shadow="lg"
            zIndex={1}
            position="relative"
          />
        </Box>

        {/* Text Content */}
        <Box maxW="2xl" textAlign={{ base: "center", md: "left" }}>
          <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
            <Heading
              color={headingColor}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
            >
              About Me
            </Heading>
            <Text color={textColor} fontSize={{ base: "md", md: "lg" }}>
              Passionate about crafting modern web experiences.
            </Text>
            <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>
              Hi, I&apos;m{" "}
              <Text as="span" fontWeight="bold" color={accentColor}>
                Mansoor Ahmad
              </Text>
              , a passionate web developer specializing in modern JavaScript
              frameworks like React and Next.js. I love creating responsive,
              high-performance applications that enhance user experience.
            </Text>
            <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>
              My expertise includes front-end technologies such as HTML, CSS,
              JavaScript, Tailwind CSS, and Chakra UI. I thrive on building
              elegant UI/UX solutions and optimizing websites for performance
              and scalability.
            </Text>
            <HStack spacing={4} mt={2}>
              {[FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram].map(
                (IconType, index) => (
                  <Icon
                    key={index}
                    as={IconType}
                    color={iconColor}
                    _hover={{ color: accentColor }}
                    boxSize={6}
                    cursor="pointer"
                  />
                )
              )}
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
