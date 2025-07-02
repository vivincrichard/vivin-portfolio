import { ArrowDown, Briefcase } from "lucide-react";
import profile from "../assets/pp.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  const experience = [
    {
      company: "OneData Software Solutions",
      role: "Frontend Developer",
      duration: "JUN 2024 – MAY 2025",
      summary:
        "Built and maintained a responsive healthcare application using React, TypeScript, Redux, Axios, and React Router, ensuring seamless UI/UX and API integration.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-6 py-12"
    >
      <div className="flex flex-col justify-center items-center gap-12 w-full max-w-6xl ">
        <img
          src={profile}
          alt="Vivin Christopher"
          className="w-72 h-72 sm:w-80 sm:h-80 lg:w-70 lg:h-70 object-cover rounded-3xl shadow-2xl border-5 border-white"
        />
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl text-gray-600 font-semibold mb-1">
            ~ About Me
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Who is Vivin Christopher
          </h1>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            I’m a passionate Software Developer with 1 year of hands-on
            experience in building modern, responsive web applications. My core
            expertise lies in Frontend Development using technologies like&nbsp;
            <strong>React.js</strong>,<strong> TypeScript</strong>,&nbsp;
            <strong>Redux</strong>, <strong>Axios</strong>,
            <strong>Formik</strong>,<strong> Form Handling, Validation</strong>
            &nbsp;and&nbsp;
            <strong>Api Integration</strong>.
            <br />I also bring strong Backend Development skills, especially in
            building scalable <strong>RESTful APIs</strong> using&nbsp;
            <strong>
              Java Spring Boot, Database Management - MySQL,PostgreSQL
            </strong>
            ,<strong>Spring Data JPA</strong>, &nbsp;
            <strong>Hibernate</strong>, and the
            <strong> Spring MVC</strong> framework. I thrive in full stack
            environments where I can contribute to both frontend and backend
            solutions. <br />
            <strong> I proudly identify as a Java Full Stack Developer.</strong>
          </p>
        </div>
      </div>

      {/* 🔧 Work Experience Section */}
      <div className="w-full max-w-4xl">
        <h2 className="flex items-center justify-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          <Briefcase className="m-2"/>
          Work Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-300 rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {exp.role} @ {exp.company}
                </h3>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div className="font-bold bg-fuchsia-700 rounded-full p-5 m-6 hover:bg-fuchsia-950 hover:text-white cursor-pointer">
        <a
          href="https://drive.google.com/file/d/182RH0s0Ne0OcjwZIhcG2PF1KZUd7DuEm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my CV
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

export default About;
