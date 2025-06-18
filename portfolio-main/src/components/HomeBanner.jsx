import { motion } from "framer-motion";
import React from "react";
import { my } from "../data/me";

const HomeBanner = () => {
  return (
    <>
      {/* Circle Animation */}
      <motion.div
        id="home"
        className="h-[250px] w-[250px] bg-red-400 rounded-full mx-auto mt-40 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img loading="eager"decoding="sync" src="/images/myImages/1.jpg" className="w-full scale-180 h-full object-cover" alt="" />
      </motion.div>

      {/* Heading Animation */}
      <motion.h2
        className="text-4xl md:text-7xl font-semibold mx-auto text-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {`I'm ${my.name},`}<br />
        <span className="text-zinc-700">Full Stack developer</span>
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        className=" container px-8 mt-10 mb-24 lg:mb-[300px] md:px-0 lg:px-32 text-center mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        I’m a full-stack developer who turns coffee ☕ into code 💻. Skilled in
        both frontend magic (React, Tailwind CSS), backend logic (Node.js,
        Express.js, MongoDB) and much more. I love building things that live on
        the internet and solve real problems.
      </motion.p>
    </>
  )
}

export default React.memo(HomeBanner);