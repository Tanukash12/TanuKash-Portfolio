import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I’m Tanushka — a curious learner, builder, and someone who genuinely enjoys figuring things out. 
            I work with Java, JavaScript, Python, C, Node.js, and have recently explored C# basics along with some data analysis. 
            Currently, I’m focused on building full-stack applications using the MERN stack, while also experimenting with Java backend 
            and related technologies — still learning, still experimenting, and honestly, loving every bit of the process.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
           As a developer, I enjoy creating things that actually solve problems, whether it’s a simple project 
           or something more complex. I believe real learning happens when you try, fail, debug, and then 
           rebuild it your way. Every project teaches something new — not just about code, but about thinking and 
           problem-solving.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            Beyond tech, I love travelling, reading random interesting things, and meeting new people. 
            For me, it’s always about learning, growing, and making every experience count — both in code and in life.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Thank you for taking the time to read. 
            Truly grateful for your presence here — let’s keep building, learning, and growing together. 🌿
          </p>
        </div>

        {/* RIGHT PHOTO */}
        <div className="flex flex-col items-center">

          {/* image */}
          <div className="w-72 h-80 rounded-3xl border border-pink-500 overflow-hidden">
            <img
              src="/assets/original.jpeg"
              alt="tanushka"
              className="w-full h-full object-cover"
            />
          </div>

          {/* icons */}
          <div className="flex gap-6 mt-6 text-2xl text-gray-400">

            <a href="mailto:tanushkakashyap506@gmail.com" target="_blank" className="hover:text-pink-500">
              <FaEnvelope />
            </a>

            <a href="https://www.linkedin.com/in/tanushka-kashyap-3b5a28211" target="_blank" className="hover:text-pink-500">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Tanukash12" target="_blank" className="hover:text-pink-500">
              <FaGithub />
            </a>

            <a href="https://leetcode.com/u/tanushka_kash/" target="_blank" className="hover:text-pink-500">
              <SiLeetcode />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
