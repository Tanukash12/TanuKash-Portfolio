const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-gradient-to-r from-black via-[#0f0f0f] to-black">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
        <p className="text-gray-500">
          © TanushkaKashyap All Rights Reserved
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="https://www.linkedin.com/in/tanushka-kashyap-3b5a28211" className="hover:text-pink-400 transition">LinkedIn</a>
          <a href="https://github.com/Tanukash12" className="hover:text-pink-400 transition">GitHub</a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanushkakashyap506@gmail.com"
            target="_blank"
            className="hover:text-pink-400 transition"
            >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
