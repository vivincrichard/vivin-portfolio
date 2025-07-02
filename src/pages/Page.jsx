import About from "../components/About";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export const Page = () => {
    return (
      <div>
        <Navbar />

        {/* Invisible anchor point for #home scroll */}
        <div id="home"/>
        <main>
          <Home />
          <About />
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
        <Footer/>
      </div>
    );
}