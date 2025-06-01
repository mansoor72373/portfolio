"use client";
import {
  Box,
  Text,
  Link,
  Flex,
  Icon,
  Container,
  Divider,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const hoverColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box as="footer" bg={bgColor} py={8} borderTop="1px" borderColor="gray.200">
      <Container maxW="container.xl" mx="auto">
        <VStack spacing={6}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            w="full"
            align="center"
            gap={4}
          >
            <VStack align={{ base: "center", md: "flex-start" }}>
              <Text fontWeight="bold" fontSize="lg" color={textColor}>
                Maan Portfolio
              </Text>
              <Text color={textColor} fontSize="sm">
                Showcasing my work and expertise
              </Text>
            </VStack>

            <HStack spacing={4}>
              <Link href="https://github.com/" isExternal>
                <Icon
                  as={FaGithub}
                  boxSize={5}
                  color={iconColor}
                  _hover={{ color: hoverColor }}
                />
              </Link>
              <Link href="https://linkedin.com/" isExternal>
                <Icon
                  as={FaLinkedin}
                  boxSize={5}
                  color={iconColor}
                  _hover={{ color: hoverColor }}
                />
              </Link>
              <Link href="https://twitter.com/" isExternal>
                <Icon
                  as={FaTwitter}
                  boxSize={5}
                  color={iconColor}
                  _hover={{ color: hoverColor }}
                />
              </Link>
              <Link href="mailto:contact@example.com">
                <Icon
                  as={FaEnvelope}
                  boxSize={5}
                  color={iconColor}
                  _hover={{ color: hoverColor }}
                />
              </Link>
            </HStack>
          </Flex>

          <Divider />

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            w="full"
            align="center"
            gap={2}
          >
            <Text fontSize="sm" color={textColor}>
              © {new Date().getFullYear()} Maan. All rights reserved.
            </Text>
            <Text fontSize="sm" color={textColor}>
              Built with{" "}
              <Link href="https://nextjs.org" color={hoverColor} isExternal>
                Next.js
              </Link>{" "}
              and{" "}
              <Link href="https://chakra-ui.com" color={hoverColor} isExternal>
                Chakra UI
              </Link>
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
