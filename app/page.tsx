import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
// import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
