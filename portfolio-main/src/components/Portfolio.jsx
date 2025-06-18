import React from "react";
import ServiceCard from "./ServiceCard";
import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";



const Portfolio = () => {
  return (
    <>
      <h2 id="portfolio" className="text-5xl md:text-7xl lg:text-8xl text-center mt-20 mb-10 scroll-mt-[100px]">My Portfolio</h2>

      {portfolioData.map((item, key) => (
        <motion.div
        
          key={key}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ServiceCard
            wrapperClassName="w-full h-full mb-10"
            className={`container mx-auto flex flex-col justify-center lg:justify-start items-center px-10 py-5 lg:gap-8 rounded-2xl bg-gradient-to-b ${
              key % 2 === 0
                ? "lg:bg-gradient-to-br from-white/10 to-blue-400/20 lg:flex-row"
                : "lg:bg-gradient-to-tl  from-white/10 to-pink-400/20 lg:flex-row-reverse"
            }`}
          >
            <div className=" w-screen sm:min-w-[600px] sm:w-[600px] lg:mr-6 bg-zinc-500 overflow-hidden rounded-xl hover:scale-110 transition-all ease-in-out duration-500 border border-white">
            <a href={item.url} target="_blank" rel="noopener">
                <img
                loading="eager"decoding="sync"
                  src={`./images/portfolio/${item.imgSrc}`}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </a>
            </div>
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <h3 className="font-semibold text-lg mt-5 lg:mt-0">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          </ServiceCard>
        </motion.div>
      ))}
    </>
  );
};

export default React.memo(Portfolio);
