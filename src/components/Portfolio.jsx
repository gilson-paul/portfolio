import React from "react";
import ServiceCard from "./ServiceCard";
import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="scroll-mt-[100px] dark:bg-black">
      <motion.h2
        className="text-5xl md:text-7xl lg:text-8xl dark:text-white font-bold text-center pt-16 mb-10 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Portfolio
      </motion.h2>

      {portfolioData.map((item, key) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ServiceCard
            wrapperClassName="w-[96%] mx-auto h-full"
            className={`container mt-8 mx-auto flex flex-col justify-center lg:justify-start items-center px-10 py-5 lg:gap-8 rounded-2xl bg-gradient-to-b border dark:border-gray-700 dark:ring-white/10 ${
              key % 2 === 0
                ? "bg-gray-100 dark:bg-zinc-900/70 border-gray-300/30 dark:border-gray-600/30 lg:flex-row"
                : "bg-gray-100 dark:bg-zinc-900/70 border-gray-300/30 dark:border-gray-600/30 lg:flex-row-reverse"
            }`}
          >
            {/* MODIFIED: Reduced size of the logo container and updated link property */}
            <div className="flex-shrink-0 w-40 h-40 lg:mr-6 bg-zinc-800/30 overflow-hidden rounded-xl border border-white/20 p-4">
              <a href={item.url} target="_blank" rel="noopener">
                <motion.img
                  loading="eager"
                  decoding="sync"
                  // MODIFIED: Updated to use 'logoSrc' from your data file
                  src={`./images/portfolio/${item.logoSrc}`}
                  // MODIFIED: Changed 'object-cover' to 'object-contain' to fit the logo properly
                  className="h-full w-full object-contain"
                  alt="Portfolio Logo"
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </a>
            </div>
            <div className="flex dark:text-white flex-col gap-5 text-center lg:text-left">
              {/* MODIFIED: Updated to use 'heading' from your data file */}
              <h3 className="font-semibold text-lg mt-5 lg:mt-0">
                {item.heading}
              </h3>
              {/* MODIFIED: Updated to use 'text' from your data file */}
              <p>{item.text}</p>
              {/* REMOVED: The section containing the "Visit Website" and "View on GitHib" buttons has been deleted. */}
            </div>
          </ServiceCard>
        </motion.div>
      ))}
    </section>
  );
};

export default React.memo(Portfolio);