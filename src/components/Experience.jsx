import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      role: "Software Development Intern",
      company: "Indian Army",
      duration: "April 2025 – June 2025",
      desc: "Worked on responsive responsive and secure web interfaces with clean UI structure and role-based functionality, focusing on performance, usability, and real-world application logic.",
    },
    {
      role: "MLSA Content Head",
      company: "Microsoft Learn Student Ambassador – MIET",
      duration: "2024 – 2025",
      desc: "Managed technical documentation, event content, and community operations. Organized tech events, hackathons & workshops.",
    },
    {
      role: "Hackathons & Community",
      company: " MLSA • College Communities",
      duration: "2023 – 2025",
      desc: "Actively participated in hackathons, tech communities, and collaborative projects. Built real-world problem solving skills.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Work Experience 💼
        </h2>

        {/* timeline */}
        <div className="relative border-l border-white/10">

          {experienceData.map((exp, index) => (
            <div key={index} className="mb-12 ml-6">

              {/* dot */}
              <span className="absolute w-3 h-3 bg-pink-500 rounded-full -left-1.5"></span>

              {/* card */}
              <div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-pink-500 transition">
                
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-pink-400 text-sm">
                  {exp.company}
                </p>

                <p className="text-gray-500 text-xs mb-3">
                  {exp.duration}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
