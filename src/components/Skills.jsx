import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const Skills = () => {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const skill = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "Javascript", category: "frontend" },
    { name: "React Js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tanstack Query", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "Form Validation", category: "frontend" },
    { name: "UI/UX", category: "frontend" },
    { name: "Axios", category: "frontend" },

    { name: "Java", category: "backend" },
    { name: "Spring Boot", category: "backend" },
    { name: "Spring Data JPA", category: "backend" },
    { name: "Spring MVC", category: "backend" },
    { name: "Spring Security", category: "backend" },
    { name: "Spring Hibernate", category: "backend" },
    { name: "Spring ORM", category: "backend" },
    { name: "RestFull API", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "PostgreSQL", category: "backend" },

    { name: "Git/GitHub", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "VsCode", category: "tools" },
    { name: "Intellij", category: "tools" },
    { name: "Gradle", category: "tools" },
    { name: "Maven", category: "tools" },
  ];

  const filteredSkills =
    category === "All"
      ? skill
      : skill.filter(
          (s) => s.category.toLowerCase() === category.toLowerCase()
        );
  return (
    <section id="skills" className="min-h-screen">
      <div className="min-h-[95vh] flex flex-col items-center justify-start pt-32">
        <span className="font-medium text-4xl md:text-5xl mb-8">My Skills</span>

        <div className="flex flex-wrap justify-between md:w-1/2 w-full">
          {categories?.map((item, index) => (
            <button
              key={index}
              onClick={() => setCategory(item)}
              className={` text-2xl px-6 py-2 cursor-pointer
                ${
                  category === item
                    ? "text-white bg-violet-500 rounded-full"
                    : "text-black"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl m-2 p-2">
          {filteredSkills.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className="font-light hover:font-medium p-5 rounded border border-violet-500 shadow-2xl text-center duration-500 hover:scale-110 hover:text-2xl focus:scale-110 focus:font-bold cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-center">
        <div className="bg-blue-600 h-10 w-10 rounded-full animate-pulse">
          <ArrowDown className="text-white h-10 w-10"/>
        </div>
      </div>
    </section>
  );
};

export default Skills;
