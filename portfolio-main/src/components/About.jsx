import React from "react";
import LogoSlider from "./SwiperLogo";
import { motion } from "framer-motion";


const About = () => {
  return (
    <>
      <h2 id="about" className="text-5xl md:text-7xl lg:text-8xl text-center mt-20 mb-10 scroll-mt-[100px]">About me</h2>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  className="flex items-center md:container xl:max-w-[1000px] mx-auto"
>
      
        <div className=" h-[400px] min-w-[300px]  bg-amber-500 rounded-xl hidden md:block overflow-hidden">
          <img loading="eager"decoding="sync" src="./images/myImages/2.jpg" className="object-cover scale-130 h-full w-full" alt="" />
        </div>
          <p className="px-8 md:px-5 lg:px-10 container mx-auto text-center md:text-left">
            I’m a full-stack developer skilled in the MERN stack (MongoDB,
            Express, React, Node.js), with experience in building RESTful APIs,
            integrating third-party services, and deploying applications to
            cloud platforms like Vercel and AWS.
            <br /> <br /> My <b>frontend</b> focus is on building clean, responsive UIs
            with React, Tailwind CSS, and modern JavaScript. On the <b>backend</b>, I
            handle authentication, database management, and server-side logic to
            ensure smooth performance and scalability. I enjoy solving complex
            problems and turning concepts into functional, beautiful apps.
          </p>
          </motion.div>
      <div className="min-h-36 w-full">
        <LogoSlider />
      </div>
    </>
  );
};

export default React.memo(About);
