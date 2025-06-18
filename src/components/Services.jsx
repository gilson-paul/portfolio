import { servicesData } from "../data/services";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="dark:bg-black dark:text-white scroll-mt-[100px]">
      <motion.h2
        className="text-5xl  md:text-7xl lg:text-8xl font-bold text-center pt-16 mb-10 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 max-w-[1200px] mx-auto auto-rows-fr">
        {servicesData.map((item, key) => (
          <motion.div
            key={key}
            className="h-full flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ServiceCard
              wrapperClassName="w-full max-w-[350px] mx-auto h-full flex"
              className={`flex flex-col justify-between p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-xl
                ${
                  key % 2 === 0
                    ? "bg-white/20 dark:bg-zinc-500/10 border-white/30 dark:border-white/10"
                    : "bg-gray-400/10 dark:bg-zinc-500/20 border-white/30 dark:border-white/10"
                }
                shadow-md`}
              
            >
              <div className="flex flex-col space-y-3">
                <p className="text-sm text-gray-500 dark:text-white font-medium">0{key + 1}</p>
                <h3 className="text-xl font-bold dark:text-white text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-100 ">{item.desc}</p>
              </div>
            </ServiceCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
