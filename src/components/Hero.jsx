import { useRef, useEffect , useState} from "react";

const Hero = () => {

    const roles = ["FullStack Developer", "Backend Developer", "React Developer" ,"UI Designer"];

        const [text, setText] = useState("");
        const [roleIndex, setRoleIndex] = useState(0);
        const [charIndex, setCharIndex] = useState(0);

        useEffect(() => {
        const currentRole = roles[roleIndex];

        if (charIndex < currentRole.length) {
            const timeout = setTimeout(() => {
            setText(prev => prev + currentRole[charIndex]);
            setCharIndex(charIndex + 1);
            }, 80);

            return () => clearTimeout(timeout);
        } 
        else {
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
    <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* LEFT TEXT */}
            <div ref={textRef} className="max-w-xl">
                
                <p className="text-pink-500 font-medium mb-3">
        Hello, I'm
        </p>

        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
        Tanushka{" "}
        <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Kashyap
        </span>
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-gray-300 h-10">
        {text}
        <span className="animate-pulse">|</span>
        </h2>


        <p className="mt-6 text-gray-400">
          Full-stack MERN developer building fast, scalable, and user-centric web apps.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-700 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-gray-500 rounded-xl hover:border-pink-500 transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
<div className="mt-16 md:mt-0 relative flex items-center justify-center md:justify-end md:pr-20">


  {/* glow ring */}
  <div className="absolute w-[420px] h-[420px]  rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-40 animate-pulse"></div>


  {/* main avatar */}
  <div className="relative w-80 h-80 rounded-full bg-black border border-pink-500 overflow-hidden">
  <img 
    src="/assets/Tanu.jpeg"  
    alt="Tanushka"
    className="w-full h-full object-cover"
  />
</div>


</div>
      


    </section>
  );
};

export default Hero;
