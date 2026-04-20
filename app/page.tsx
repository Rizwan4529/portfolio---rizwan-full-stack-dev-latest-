import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
