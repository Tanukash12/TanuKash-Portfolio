import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-semibold text-sm shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            TK
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-pink-400">Home</a>
          <a href="#experience" className="hover:text-pink-400">Experience</a>
          <a href="#projects" className="hover:text-pink-400">Projects</a>
          <a href="#skills" className="hover:text-pink-400">Skills</a>
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#community" className="hover:text-pink-400">Impact</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* theme */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 h-9 rounded-lg bg-pink-600 hover:bg-pink-700 text-sm"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          {/* hamburger */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col items-center py-6 gap-6 text-lg">

            <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
            <a onClick={()=>setMenuOpen(false)} href="#experience">Experience</a>
            <a onClick={()=>setMenuOpen(false)} href="#projects">Projects</a>
            <a onClick={()=>setMenuOpen(false)} href="#skills">Skills</a>
            <a onClick={()=>setMenuOpen(false)} href="#about">About</a>
            <a onClick={()=>setMenuOpen(false)} href="#community">Impact</a>
            <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
