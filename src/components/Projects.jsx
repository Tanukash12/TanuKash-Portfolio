import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";


const Projects = () => {

  const projectData = [
    {
      title: "Connect Four (4Z) — Real-Time Multiplayer Game",
      desc: "A full-stack, real-time Connect Four (4-in-a-Row) game built with WebSockets, Node.js, PostgreSQL, Kafka, and a responsive frontend. Supports Human vs Human, Human vs Bot, Reconnect handling, Leaderboard, and Event streaming.",
      tech: "React • TailwindCSS • Node.js • Express • PostgreSQL • Kafka • WebSockets",
      github: "https://github.com/Tanukash12/4Z",
      live: "",
    },
    {
      title: "Twitube API",
      desc: "This is a full-featured backend API built using Node.js, Express, and MongoDB. Inspired by YouTube and Twitter, this project supports video uploads, user authentication, playlists, likes, comments, and tweet-like features.",
      tech: "NodeJs • Express • MongoDB • JWT • Multer • Bcrypt • Cloudinary ",
      image : "",
      github: "https://github.com/Tanukash12/Twitter-Youtube-Application-complete-Backend-Repo",
      live: "",
    },
    {
      title: "Chat-Room-NodeJs-Redis",
      desc: "A real-time chat application built using Node.js, Express, Socket.io, and Moment.js. It allows users to join rooms with usernames and chat with others in real time. The app shows timestamps, user join/leave notifications, and supports multiple rooms. The frontend uses vanilla HTML, CSS, and JavaScript, while the backend is powered by Express & Socket.io.",
      tech: "React • TailwindCSS • Node.js • Express • Socket.io • Moment.js ",
      image : "",
      github: "https://github.com/Tanukash12/Chat-Room-NodeJs-Redis",
      live: "",
    },
    {
      title: "Log-Parser-Nodejs",
      desc: "A log parser application with a backend built using Node.js and TypeScript that converts a log file in a specific format to a JSON file. The log file format includes a timestamp, log level, transaction ID, and log information. The frontend, built using React and Tailwind CSS, provides a UI for uploading the log file and downloading the parsed JSON file. The UI includes a button for uploading the file and an alert to show API error messages. The build tool used is Vite.",
        tech: "Node.js • TypeScript • React • TailwindCSS • Vite",
        image : "",
      github: "https://github.com/Tanukash12/Log-Parser-Nodejs",
      live: "https://log-parser-nodejs-dgqv73ohq-tanushka-kashyaps-projects.vercel.app/",
    },
    {
      title: "Url_Shortener",
      desc: "A URL shortening service built with React, Node.js, Express, and MongoDB. It allows users to shorten long URLs and redirect them to their original destinations.",
      tech: "React • Node.js • Express • MongoDB",
      image : "",
      github: "https://github.com/Tanukash12/Url_Shortener",
      live: "",
    },
    {
      title: "Currency Converter ",
      desc: "A modern and responsive Currency Converter built using React, Custom Hooks, and Tailwind CSS. This project demonstrates API integration, component reusability, and optimized frontend performance.",
      tech: "React • TailwindCSS • API Integration • Custom Hooks",
      image : "",
      github: "https://github.com/Tanukash12/Currency-converter-React",
      live: "",
    },
    {
      title: "Security Monitoring System",
      desc: "The Security Monitoring System is a cybersecurity-focused web application designed to monitor internal user activity and detect suspicious or insider-related behaviour within an organization. The system combines rule-based security logic with machine learning–based anomaly detection to identify risky users in real time. It monitors login behaviour, device and location changes, and unauthorized file access, then assigns dynamic risk scores to users.",
      tech: "React • TailwindCSS  • Machine Learning • Anomaly Detection • Real-time Monitoring ",
      image : "",
      github: "https://github.com/Tanukash12/Security-Monitoring-System",
      live: "",
    },
    {
      title: "Heart_Disease_Predictor-Public",
      desc: "A machine learning project that predicts the likelihood of heart disease using patient health data and logistic regression. Includes data preprocessing, model training, evaluation, and visualizations. This project applies machine learning techniques to predict the presence of heart disease in patients using clinical parameters such as age, gender, cholesterol levels, resting blood pressure, fasting blood sugar, maximum heart rate, and exercise-induced angina.",
        tech: "Machine Learning • Logistic Regression",
        image : "",
      github: "https://github.com/Tanukash12/Heart_Disease_Predictor-Public",
      live: "",
    },
    {
      title: "Blockchain-Crowdfunding-app-byTk",
      desc: " Crowdfunding dApp, a decentralized application that empowers users to create and support fundraising campaigns using Ethereum. Designed with a sleek, hacker-themed UI and powered by Web3 technology, this dApp showcases the fusion of blockchain innovation and frontend aesthetics.",
        tech: "HTML • CSS • JavaScript • Web3 • Ethereum • TailwindCSS",
        image : "",
      github: "https://github.com/Tanukash12/Blockchain-Crowdfunding-app-byTk",
      live: "https://blockchain-crowdfunding-app-by-tk.vercel.app/",
    },
    {
      title: "Blockchain-Certificate-Generator",
      desc: "A blockchain-based certificate generator that creates and verifies digital certificates using Ethereum smart contracts. This project demonstrates the application of blockchain technology in creating tamper-proof, verifiable certificates.",
        tech: "HTML • CSS • JavaScript • Web3 • Ethereum • Solidity",
        image : "",
      github: "https://github.com/Tanukash12/Blockchain-Certificate-Generator",
      live: "https://blockchain-certificate-generator.vercel.app/",
    },
    
  ];

   return (
    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  id="projects"
  className="py-24 px-6"
>
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Projects 🚀
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-pink-500 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,0,255,0.15)] transition-all duration-300"
            >

              {/* show image ONLY if exists */}
              {project.image && (
                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    className="w-full h-44 object-cover rounded-xl"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {project.desc}
              </p>

              <p className="text-pink-400 text-xs mb-5">
                {project.tech}
              </p>

              <div className="flex gap-3 flex-wrap">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-2 text-sm border border-white/20 rounded-lg hover:border-pink-500 transition"
                  >
                    <FaGithub /> Code
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-pink-600 rounded-lg hover:bg-pink-700 transition"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}

                {!project.github && !project.live && (
                  <span className="px-3 py-2 text-xs bg-gray-700 rounded-lg text-gray-300">
                    Coming Soon
                  </span>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
