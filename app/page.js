import Header       from "@/components/Header";
import Hero         from "@/components/Hero";
import TechScroller from "@/components/TechScroller";
import About        from "@/components/About";
import ResumeBanner from "@/components/ResumeBanner";
import LabSection   from "@/components/LabSection";
import MemoryGame   from "@/components/MemoryGame";
import ContactForm  from "@/components/ContactForm";
import Footer       from "@/components/Footer";
import EasterEgg    from "@/components/EasterEggs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechScroller />
        <About />
        <ResumeBanner />
        <LabSection />
        <MemoryGame />
        <ContactForm />
        <EasterEgg />
      </main>
      <Footer />
    </>
  );
}