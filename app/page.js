import Header from "./components/homeHeader";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import AboutMe from "./components/about-me";
import Gallery from "./components/gallery";

export default function Home(){
  return(
    <>
      <Header/>
      <Hero/>
      {/* <AboutMe/> */}
      <Gallery/>
      <Footer/>
    </>
  );
}