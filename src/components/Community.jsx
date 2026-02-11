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
          Being part of the Microsoft Learn Student Ambassador (MLSA) community has been one of the most defining experiences of my college journey. 
          As the Content Head, I’ve had the opportunity to manage content, lead the team, and contribute to 
          organizing tech events and learning initiatives.

          This role helped me grow beyond just technical skills — it strengthened my confidence, creativity, leadership, 
          and ability to work with teams. From planning sessions to creating engaging content and supporting community-driven
          learning, I learned how strong communities can truly create impact.

          MLSA didn’t just enhance my technical journey — it taught me how collaboration, consistency, and sharing 
          knowledge can empower both individuals and the entire community.
        </p>

      </div>
    </motion.section>
  );
};

export default Community;
