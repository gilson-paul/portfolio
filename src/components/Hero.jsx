import React from "react";
import { motion } from "framer-motion";
import { my } from "../data/me";
import LogoSlider from "./SwiperLogo";

const Hero = ({ isScrolled }) => {
  const scrollControls = {
    animate: isScrolled
      ? { opacity: 0, scale: 0.95, y: -50, zIndex: 0 }
      : { opacity: 1, scale: 1, y: 0, zIndex: 50 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
<motion.section
  className="flex flex-col items-center h-screen justify-center px-6 text-center overflow-hidden"
  initial={{
    opacity: 1,
    scale: 1,
    maxHeight: "calc(100vh - 6rem)",
  }}
  animate={{
    opacity: isScrolled ? 0 : 1,
    scale: isScrolled ? 0.95 : 1,
    maxHeight: isScrolled ? 0 : "calc(100vh - 6rem)",
  }}
  transition={{
    opacity: { duration: 0.4, ease: "easeInOut" },
    scale: { type: "spring", stiffness: 120, damping: 20 },
    maxHeight: { type: "spring", stiffness: 100, damping: 24 },
  }}
  style={{
    overflow: isScrolled ? "hidden" : "visible",
    pointerEvents: isScrolled ? "none" : "auto",
  }}
>


      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl min-w-[350px] lg:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-outline">{my.name}</span>
        <br />
        <span className="text-gray-700 dark:text-gray-300">Full Stack Developer</span>
      </motion.h1>

      {/* Subtext for larger screens */}
      <motion.p
        className="hidden sm:block mt-6 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I'm a full-stack developer who builds scalable, user-centric applications from
        frontend interfaces to backend systems. I work across the stack—crafting dynamic UIs,
        designing APIs, and managing databases—to create seamless digital experiences.
      </motion.p>

      {/* Subtext for small screens */}
      <motion.p
        className="block sm:hidden mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I'm a full-stack developer building user-friendly apps with modern tools, front to back.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-10 flex gap-5 flex-col-reverse sm:flex-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="#portfolio"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center px-6 py-3 text-lg font-medium text-white bg-black dark:text-black dark:bg-white rounded-full shadow-md hover:translate-y-2 transition"
        >
          <p>View Projects</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce scale-70"
            width={32}
            height={32}
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0z" />
              <path
                fill="currentColor"
                d="M10.5 16.035L7.404 12.94a1.5 1.5 0 1 0-2.122 2.121l5.657 5.657a1.5 1.5 0 0 0 2.122 0l5.657-5.656a1.5 1.5 0 1 0-2.122-2.122L13.5 16.035V4.5a1.5 1.5 0 0 0-3 0z"
              />
            </g>
          </svg>
        </a>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center px-6 py-3 text-lg font-medium text-black dark:text-white dark:bg-black dark:border-white border rounded-full shadow-md hover:translate-x-2 transition"
        >
          <p>View CV</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce rotate-90 scale-70"
            width={32}
            height={32}
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0z" />
              <path
                fill="currentColor"
                d="M13.06 3.283a1.5 1.5 0 0 0-2.12 0L5.281 8.939a1.5 1.5 0 0 0 2.122 2.122L10.5 7.965V19.5a1.5 1.5 0 0 0 3 0V7.965l3.096 3.096a1.5 1.5 0 1 0 2.122-2.122z"
              />
            </g>
          </svg>
        </a>
      </motion.div>


      <motion.div
      id="about" 
  className="mt-10 scroll-m-100"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <LogoSlider />
</motion.div>
      {/* Scroll Hint */}
      <p 
        className={`mt-10 z-20 bg-white border sm:border-none rounded-2xl px-2 animate-bounce text-sm cursor-default text-gray-500 absolute bottom-10 transition ease-in-out ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        ↓ Scroll to see more
      </p>
    </motion.section>
  );
};

export default React.memo(Hero);
