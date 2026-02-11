import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";



const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-3">

          {/* circle logo */}
          <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            <span className="tracking-widest">TK</span>
          </div>

          

        </div>



        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-pink-400 transition">Home</a>
          <a href="#experience" className="hover:text-pink-400 transition">Experience</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 h-10 rounded-lg bg-pink-600 hover:bg-pink-700 transition"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
