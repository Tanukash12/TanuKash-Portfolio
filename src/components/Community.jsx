import { motion } from "framer-motion";
const Community = () => {
  const images = [
    "/community/DEV.jpeg",
    "/community/bseCore.jpeg",
    "/community/gdg2.jpeg",
    "/community/BSE.jpeg",
    "/community/Tdev.jpeg",
    "/community/AVSAR.jpeg",
    "/community/work.jpeg",
    "/community/core.jpeg",
    "/community/DEVfun.jpeg",
    "/community/Samaarambh.jpeg",
  ];

  return (
    <motion.section
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  id="community" className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8">

        {/* heading */}
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">
          Growth Beyond Code 🚀
        </h2>

        {/* slider */}
        <div className="overflow-hidden relative w-full">
          <div className="flex gap-4 animate-scroll w-max">
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-[400px] h-[350px] object-cover rounded-xl border border-white/10"
              />
            ))}
          </div>
        </div>

        {/* text */}
        <p className="mt-8 text-gray-400 leading-relaxed">
          College wasn’t just about earning a degree for me — it was about building clarity and confidence. 
          Over the years, I stepped beyond my comfort zone, took on leadership roles, and learned how to collaborate, 
          communicate, and deliver under deadlines. From organizing events to leading initiatives, each experience 
          strengthened my sense of responsibility and ability to work with people. These experiences shaped me into 
          someone who is proactive, adaptable, and ready to take ownership, contribute meaningfully, 
          and grow with every opportunity I step into.
        </p>

      </div>
    </motion.section>
  );
};

export default Community;
