"use client";

import {
  Heading,
  Text,
  Button,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Maan from "../../assets/images/maan.png";

const Hero = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Flex p={8} as="section" bg={bgColor} w="100%">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "left" }}
        alignItems="center"
        gap={{ base: "32px", md: "20px" }}
        maxW="container.xl"
        mx="auto"
        w="100%"
      >
        <Flex
          marginTop={{ base: "0", md: "30px" }}
          justifyContent="center"
          w={{ base: "100%", md: "50%" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heading
              as="h1"
              lineHeight={0.75}
              size="2xl"
              mb={6}
              fontWeight="bold"
              color={headingColor}
            >
              Let&apos;s Work
            </Heading>
            <Heading
              lineHeight={0.75}
              as="h2"
              size="2xl"
              mb={6}
              fontWeight="semibold"
              color="teal.500" // Teal color remains the same in both themes
            >
              Together to Create
            </Heading>
            <Heading
              lineHeight={0.75}
              as="h2"
              size="2xl"
              mb={6}
              fontWeight="semibold"
              color="teal.500" // Teal color remains the same in both themes
            >
              Wonders with Us
            </Heading>
            <Text fontSize="xl" mb={8} color={textColor}>
              A passionate web developer, transforming ideas into seamless
              digital experiences. Skilled in crafting intuitive and visually
              stunning web solutions.
            </Text>
            <Flex gap={4} justify={{ base: "center", md: "flex-start" }}>
              <Button colorScheme="teal" size="lg" px={8}>
                Let&apos;s Talk
              </Button>
              <Button variant="outline" colorScheme="teal" size="lg" px={8}>
                Start Project
              </Button>
            </Flex>
          </motion.div>
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: "0", md: "20px" }}
          w={{ base: "100%", md: "50%" }}
          mt={{ base: "32px", md: "0" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={Maan.src} // Replace with your illustration image
              alt="Illustration"
              maxW={{ base: "90vw", md: "380px", lg: "420px" }}
              w="100%"
              h={{ base: "auto", md: "450px" }}
              borderTopRadius={"50px"}
              style={{ background: "transparent" }}
              mx="auto"
            />
          </motion.div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
