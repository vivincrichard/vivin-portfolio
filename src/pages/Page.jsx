import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

export const Page = () => {
    return (
      <div className="min-h-screen scroll-smooth">
        <Navbar />

        {/* Invisible anchor point for #home scroll */}
        <div id="home" className="h-20" />

        <main>
          <Home />
          <About />
        </main>
      </div>
    );
}