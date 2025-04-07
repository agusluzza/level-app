import Faq from "./components/Faq";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Landing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import { HeroUIProvider } from "@heroui/react";

export default function App() {
  return (
    <HeroUIProvider>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Projects />
        <Testimonials />
        <Stats />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </HeroUIProvider>
  );
}
