"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Flex,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import ContacUsImage from "@/assets/images/ContactUs.png";

const Contact = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("teal.500", "teal.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const inputBg = useColorModeValue("white", "gray.800");
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: `Subject: ${subject}\n\n${message}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "Message sent.",
          description: "Your message has been sent successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error: unknown) {
      let errorMessage = "Failed to send message.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box as="section" id="contact" bg={bgColor} p={8}>
      <VStack
        spacing={8}
        textAlign="center"
        mb={12}
        maxW="container.xl"
        mx="auto"
      >
        <Heading
          color={headingColor}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
        >
          Contact Us
        </Heading>
        <Text color={textColor} fontSize={{ base: "md", md: "lg" }}>
          We&apos;d love to hear from you! Please fill out the form below or
          reach us through our contact information.
        </Text>
      </VStack>

      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        align="stretch"
        maxW="container.xl"
        mx="auto"
      >
        {/* Contact Form */}
        <VStack
          spacing={4}
          align="stretch"
          flex={1}
          px={4}
          as="form"
          onSubmit={handleSubmit}
        >
          <FormControl id="name" isRequired>
            <FormLabel color={textColor}>Name</FormLabel>
            <Input
              bg={inputBg}
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel color={textColor}>Email</FormLabel>
            <Input
              type="email"
              bg={inputBg}
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="subject">
            <FormLabel color={textColor}>Subject</FormLabel>
            <Input
              bg={inputBg}
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel color={textColor}>Message</FormLabel>
            <Textarea
              bg={inputBg}
              placeholder="Your Message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="teal"
            size="lg"
            alignSelf="flex-start"
            type="submit"
            isLoading={loading}
          >
            Send Message
          </Button>
        </VStack>

        {/* Contact Information */}
        <VStack
          spacing={4}
          align="stretch"
          flex={1}
          px={4}
          mt={{ base: 8, md: 0 }}
          display={{ base: "none", md: "flex" }}
        >
          <Image
            height={"550px"}
            borderRadius={"20px"}
            src={ContacUsImage.src}
            alt="Contact Us"
          />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
