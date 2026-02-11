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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8">

        {/* heading */}
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Community & Hackathon Journey 🚀
        </h2>

        {/* slider */}
        <div className="overflow-hidden relative w-full">
          <div className="flex gap-4 animate-scroll w-max">
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-[240px] h-[160px] object-cover rounded-xl border border-white/10"
              />
            ))}
          </div>
        </div>

        {/* text */}
        <p className="mt-8 text-gray-400 leading-relaxed">
          Everyone says joining college communities is a waste of time — but honestly,
          it shaped my confidence and leadership. Being part of tech communities,
          hackathons and events helped me grow beyond coding into real collaboration
          and impact.
        </p>

      </div>
    </section>
  );
};

export default Community;
