import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Box, Text, Link } from "@chakra-ui/react";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}
