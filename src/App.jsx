import Approach from "./components/Approach";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Landing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Clients/>
        <Projects/>
        <Testimonials/>
        <Stats/>
        <Approach/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
