import { 
  FaReact, FaJava, FaPython, FaGithub, FaDocker, 
  FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaCloud, 
  FaJs, FaNetworkWired, FaDatabase
} from "react-icons/fa";

import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { DiDotnet } from "react-icons/di";


const Skills = () => {

  const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },

  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C#", icon: <DiDotnet /> },

  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Sass", icon: <FaSass /> },
  { name: "Cloud Basics", icon: <FaCloud /> },

  { name: "DBMS", icon: <FaDatabase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Networking", icon: <FaNetworkWired /> },
    ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Skills & Tech Stack ⚡
        </h2>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-pink-500 hover:scale-110 transition duration-300"
            >
              <div className="text-4xl text-pink-500 mb-3">
                {skill.icon}
              </div>

              <p className="text-gray-300 text-sm">
                {skill.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
