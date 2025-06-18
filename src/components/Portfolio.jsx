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
            <div className=" w-full sm:min-w-[600px] sm:w-[600px] lg:mr-6 bg-zinc-500 overflow-hidden rounded-xl hover:scale-110 transition-all ease-in-out duration-500 border border-white">
              <a href={item.webUrl} target="_blank" rel="noopener">
                <motion.img
                  loading="eager"
                  decoding="sync"
                  src={`./images/portfolio/${item.imgSrc}`}
                  className="h-full w-full object-cover"
                  alt="PortfolioImage"
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </a>
            </div>
            <div className="flex dark:text-white flex-col gap-5 text-center lg:text-left">
              <h3 className="font-semibold text-lg mt-5 lg:mt-0">
                {item.title}
              </h3>
              <p>{item.desc}</p>
              <div className="flex flex-col sm:flex-row w-fit justify-center gap-5 pt-3 mx-auto lg:mx-0 lg:justify-start">
                <a
                  href={item.webUrl}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold hover:scale-110 transition duration-300 px-3 py-2 text-md  rounded-4xl border flex items-center"
                >
                  <p>Visit Website</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-bounce rotate-90 scale-70"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M13.06 3.283a1.5 1.5 0 0 0-2.12 0L5.281 8.939a1.5 1.5 0 0 0 2.122 2.122L10.5 7.965V19.5a1.5 1.5 0 0 0 3 0V7.965l3.096 3.096a1.5 1.5 0 1 0 2.122-2.122z"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold hover:scale-110 transition duration-300 px-3 py-2 text-md  rounded-4xl border flex items-center"
                >
                  <p>View on GitHib</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-bounce rotate-90 scale-70"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M13.06 3.283a1.5 1.5 0 0 0-2.12 0L5.281 8.939a1.5 1.5 0 0 0 2.122 2.122L10.5 7.965V19.5a1.5 1.5 0 0 0 3 0V7.965l3.096 3.096a1.5 1.5 0 1 0 2.122-2.122z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </ServiceCard>
        </motion.div>
      ))}
    </section>
  );
};

export default React.memo(Portfolio);
