import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const About = () => {
  return (
    <section className="mt-44 ">
      <motion.h2
        className="text-5xl md:text-7xl lg:text-8xl transition dark:text-white font-bold text-center mt-0 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="md:container xl:max-w-[1000px] mx-auto px-6"
      >
        <div className="bg-white shadow-md dark:bg-zinc-800  rounded-2xl p-8 md:p-10 text-center md:text-left">
          <p className="text-lg md:text-xl leading-relaxed text-zinc-800 dark:text-white">
            👋 Hi! I'm a passionate{" "}
            <span className="font-semibold">full-stack developer</span>{" "}
            specializing in the <span className="font-medium">MERN stack</span>{" "}
            — MongoDB, Express, React, and Node.js. I build performant REST
            APIs, integrate 3rd-party services, and deploy cloud-ready
            applications on platforms like{" "}
            <span className="font-medium">Vercel</span> and{" "}
            <span className="font-medium">AWS</span>.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-800 dark:text-white">
            On the <span className="font-semibold">frontend</span>, I craft
            responsive, accessible UIs using React and Tailwind CSS. On the{" "}
            <span className="font-semibold">backend</span>, I handle everything
            from authentication and server-side logic to database design and
            performance tuning.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-800 dark:text-white">
            I love solving real-world problems with clean code, scalable
            architecture, and an eye for detail. Let’s build something
            impactful!
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <h3 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
          My Skills
        </h3>

        <section>
          <div className="flex flex-col">
            {skills.map(({ category, items }) => (
              <section key={category} className="mb-16 ">
                <h4 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left mb-6 dark:text-white">
                  {category}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white dark:border dark:border-zinc-700 shadow-md rounded-lg p-5 text-center dark:bg-zinc-900 dark:text-gray-100 hover:shadow-lg transition"
                    >
                      <h4 className="text-lg font-medium">{skill}</h4>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </motion.div>

      <div className="min-h-6 w-full mt-12"></div>
    </section>
  );
};

export default React.memo(About);
