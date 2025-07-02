import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="min-h-[90vh] flex flex-col items-center justify-center text-center">
        <span className="flex font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-2 sm:m-3">
          <span
            className="block opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
            style={{ animationDelay: "0.6s" }}
          >
            Hi, I'm
          </span>
          <span
            className="block opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
            style={{ animationDelay: "1.6s" }}
          >
            &nbsp;Vivin Christopher
          </span>
        </span>
        <p
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] mt-4 sm:mt-6"
          style={{ animationDelay: "2.6s" }}
        >
          Java Full Stack Developer
        </p>
        <a
          className="text-white bg-blue-600 hover:bg-blue-900 font-medium rounded-full text-sm px-5 py-3 m-5 cursor-pointer"
          type="button"
          href="#about"
        >
          <span>View About</span>
        </a>
      </div>
      <div className="flex items-end justify-center">
        <div className="bg-blue-600 h-12 w-12 rounded-full animate-pulse">
          <ArrowDown className="text-white h-12 w-12" />
        </div>
      </div>
    </section>
  );
};

export default Home;
