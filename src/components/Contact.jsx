import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }} id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Let's Connect 🤝
          </h2>

          <p className="text-gray-400 mb-6">
            Actively seeking internships, collaborations, and growth-driven tech opportunities. 
            If you’d like to work together or just connect, feel free to 
            reach out — I’d be glad to hear from you.
          </p>

          <div className="flex gap-6 text-2xl text-gray-400">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanushkakashyap506@gmail.com"
            target="_blank"
            className="hover:text-pink-400 transition">
              <FaEnvelope />
            </a>

            <a href="https://github.com/Tanukash12" target="_blank" className="hover:text-pink-500">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/tanushka-kashyap-3b5a28211" target="_blank" className="hover:text-pink-500">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="bg-[#111] border border-white/10 rounded-2xl p-8 space-y-5">

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanushkakashyap506@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-pink-600 py-3 rounded-lg hover:bg-pink-700 transition font-medium"
          >
            Send Email
          </a>
        
        </form>

      </div>
    </motion.section>
  );
};

export default Contact;
