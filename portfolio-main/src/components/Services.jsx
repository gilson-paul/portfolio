import { servicesData } from "../data/services";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <h2
        id="services"
        className="text-5xl md:text-7xl lg:text-8xl text-center mt-20 mb-10 scroll-mt-[100px]"
      >
        My Services
      </h2>

      <div className="lg:max-w-[1200px] md:max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 px-4 py-10 place-items-center">
        {servicesData.map((item, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
<ServiceCard
  wrapperClassName="w-80"
  className={`p-6 rounded-2xl shadow-lg border border-white/30 ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${
    key % 2 === 0
      ? "bg-gradient-to-br from-white/10 to-blue-400/20"
      : "bg-gradient-to-br from-white/10 to-pink-400/20"
  }`}
>


              <div className="flex flex-col space-y-3">
                <p className="text-sm text-gray-500 font-medium">0{key + 1}</p>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </ServiceCard>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Services;
