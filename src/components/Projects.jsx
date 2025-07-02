import fakeStoreImg from "../assets/fakeStoreImg.png";
import portfolioPic from "../assets/portfolioPic.png";
import familyManagement from "../assets/familyManagement.png";
import libraryManagement from "../assets/libraryManagement.png";
import { ArrowDown } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      dd: `${portfolioPic}`,
      heading: "My Portfolio",
      info: "Ever wondered what drives me and what I create? My portfolio tells the story better than words — check it out!",
      stack: ["React Js", "Tailwind Css"],
    },
    {
      dd: `${fakeStoreImg}`,
      heading: "Fake Store",
      info: "Fetched product data from Fake Store API using fetch()/Axios and rendered it in a responsive grid. Implemented real-time category filtering using React state and conditional rendering.",
      stack: ["React Js", "Fake Store API", "BootStrap"],
      source: "https://github.com/vivincrichard/react-fakeStore",
    },
    {
      dd: `${familyManagement}`,
      heading: "Family Management",
      info: "A digital family manager API built with Java Spring Boot to perform CRUD operations on structured family data stored in a relational database.",
      stack: [
        "Java",
        "Spring Boot",
        "MySQL",
        "CRUD",
        "RestFull API",
        "Hibernate",
      ],
      source: "https://github.com/vivincrichard/family-management",
    },
    {
      dd: `${libraryManagement}`,
      heading: "Library Management",
      info: "A Java Spring Boot REST API for managing library operations, including books, members, and lending activity, all stored in a structured relational database.",
      stack: [
        "Java",
        "Spring Boot",
        "MySQL",
        "CRUD",
        "RestFull API",
        "Hibernate",
      ],
      source: "https://github.com/vivincrichard/1Solution-project",
    },
  ];

  return (
    <div className="min-h-screen bg-violet-100">
      <section id="projects" className="min-h-[90vh]">
        <div className="min-h-[15vh] flex items-end justify-center text-4xl font-bold">
          <span>Featured Projects</span>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-6 mt-6 mx-3">
          {projects.map((pro, index) => (
            <div
              key={index}
              className="max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={pro.source} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-t-lg w-full h-48 object-cover cursor-pointer"
                  src={pro?.dd}
                  alt={pro?.heading || "Project image"}
                />
              </a>

              <div className="flex flex-wrap gap-2 m-2">
                {Array.isArray(pro.stack) ? (
                  pro.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 bg-amber-200 text-amber-900 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="bg-amber-200 text-amber-900 text-xs font-medium px-3 py-1 rounded-full">
                    {pro.stack}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {pro?.heading}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {pro?.info}
                  </p>
                </div>

                <a
                  href={pro?.source}
                  target="_blank"
                  className="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center p-2">
        <div className="bg-blue-600 h-12 w-12 rounded-full animate-pulse">
          <ArrowDown className="text-white h-12 w-12" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
