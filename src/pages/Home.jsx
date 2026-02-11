import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Community from "../components/Community";



const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
        className={
            theme === "dark"
            ? "relative overflow-hidden bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a2e] text-white min-h-screen"
            : "relative overflow-hidden bg-white text-black min-h-screen"
        }
    >

      <Navbar />
      <Hero />
        <Community />


      
    </div>
  );
};

export default Home;
