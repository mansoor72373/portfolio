"use client";
import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Collapse,
  VStack,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  FaGithub,
  FaLinkedin,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const iconColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box as="header" p={8} boxShadow="md" bg={bgColor} color={textColor}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
        mx="auto"
      >
        <Heading as="h1" size="lg">
          Mansoor Ahmad
        </Heading>
        <HStack display={{ base: "none", md: "flex" }} spacing={4}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="teal"
            >
              Sections
            </MenuButton>
            <MenuList bg={bgColor} color={textColor}>
              <MenuItem
                as={Link}
                href="#about"
                icon={<FaUser color={iconColor} />}
              >
                About
              </MenuItem>
              <MenuItem
                as={Link}
                href="#projects"
                icon={<FaProjectDiagram color={iconColor} />}
              >
                Projects
              </MenuItem>
              <MenuItem
                as={Link}
                href="#skills"
                icon={<FaTools color={iconColor} />}
              >
                Skills
              </MenuItem>
              <MenuItem
                as={Link}
                href="#contact"
                icon={<FaEnvelope color={iconColor} />}
              >
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            aria-label="Toggle theme"
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            color={iconColor}
          />
          <Button
            leftIcon={<FaGithub color={iconColor} />}
            as="a"
            href="https://github.com/mansoor72373"
            target="_blank"
            color={textColor}
          >
            GitHub
          </Button>
          <Button
            leftIcon={<FaLinkedin color={iconColor} />}
            as="a"
            href="https://www.linkedin.com/in/mansoor-ahmad-26a232217/"
            target="_blank"
            color={textColor}
          >
            LinkedIn
          </Button>
        </HStack>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          color={iconColor}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack
          display={{ md: "none" }}
          spacing={4}
          alignItems="start"
          mt={4}
          px={4}
          bg={bgColor}
          color={textColor}
        >
          <Button
            as={Link}
            href="#about"
            leftIcon={<FaUser color={iconColor} />}
            w="full"
            justifyContent="flex-start"
          >
            About
          </Button>
          <Button
            as={Link}
            href="#projects"
            leftIcon={<FaProjectDiagram color={iconColor} />}
            w="full"
            justifyContent="flex-start"
          >
            Projects
          </Button>
          <Button
            as={Link}
            href="#skills"
            leftIcon={<FaTools color={iconColor} />}
            w="full"
            justifyContent="flex-start"
          >
            Skills
          </Button>
          <Button
            as={Link}
            href="#contact"
            leftIcon={<FaEnvelope color={iconColor} />}
            w="full"
            justifyContent="flex-start"
          >
            Contact
          </Button>
          <Button
            leftIcon={<FaGithub color={iconColor} />}
            as="a"
            href="https://github.com/mansoor72373"
            target="_blank"
            w="full"
            justifyContent="flex-start"
            color={textColor}
          >
            GitHub
          </Button>
          <Button
            leftIcon={<FaLinkedin color={iconColor} />}
            as="a"
            href="https://www.linkedin.com/in/mansoor-ahmad-26a232217/"
            target="_blank"
            w="full"
            justifyContent="flex-start"
            color={textColor}
          >
            LinkedIn
          </Button>
          <IconButton
            aria-label="Toggle theme"
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            w="full"
            justifyContent="flex-start"
            color={iconColor}
          />
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Header;
