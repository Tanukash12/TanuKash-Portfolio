import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const roles = [
    "FullStack Developer",
    "Backend Developer",
    "React Developer",
    "UI Designer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      // pause then erase
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  const textRef = useRef();

  // simple animation on load
  useEffect(() => {
    const el = textRef.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";

    setTimeout(() => {
      el.style.transition = "all 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    }, 200);
  }, []);

  return (
    <motion.section
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  id="home"
  className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row items-center justify-between gap-10"
>

  {/* RIGHT SIDE (mobile pe top aayega) */}
  <div className="
    order-1 md:order-2
    flex flex-col items-center md:items-end
    md:pr-20
  ">
    
    {/* TRUST TEXT */}
    <p className="text-sm text-white/60 italic mb-6 text-center md:text-right">
      "Trust me, I'm a Full-Stack developer 😓"
    </p>

    {/* PHOTO */}
    <div className="relative flex items-center justify-center">
      
      {/* glow */}
      <div className="absolute w-75 h-75 md:w-105 md:h-105 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-40 animate-pulse"></div>

      {/* avatar */}
      <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full bg-black border border-pink-500 overflow-hidden shadow-xl">
        <img
          src="/assets/Tanu.jpeg"
          alt="Tanushka"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* LEFT SIDE TEXT */}
  <div
    ref={textRef}
    className="
      order-2 md:order-1
      max-w-xl text-center md:text-left
    "
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Tanushka{" "}
      <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        Kashyap
      </span>
    </h1>

    <h2 className="text-xl md:text-3xl mt-4 text-gray-300 h-10">
      {text}
      <span className="animate-pulse">|</span>
    </h2>

    <p className="mt-6 text-gray-400 leading-8 mb-6 text-justify">
      I’m Tanushka, a CSE undergrad who enjoys building things that actually
      work and sometimes breaking them just to understand them better. From
      late-night debugging sessions to experimenting with new stacks, I’m
      constantly exploring and learning. Currently, I’m focused on full-stack
      development with MERN, strengthening my Java & DSA skills, diving deeper
      into SQL, and building a strong foundation in core computer science.
    </p>

    <p className="mt-4 text-white font-medium">
      To Gain, To Lose, To End, To Start Again ✨
    </p>

    <p className="text-xs text-white/50 mt-6 italic tracking-widest">
      ~chatgpt
    </p>
  </div>

</motion.section>
  );
};

export default Hero;
