const Home = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
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
            &nbsp; Vivin Christopher
          </span>
        </span>
        <p
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] mt-4 sm:mt-6"
          style={{ animationDelay: "2.6s" }}
        >
          Welcome to my portfolio
        </p>
        <button
          className="text-white bg-blue-600 hover:bg-blue-900 font-medium rounded-full text-sm px-5 py-3 m-5"
          type="button"
        >
          <a href="#about">View About</a>
        </button>
      </div>
    </section>
  );
};

export default Home;
