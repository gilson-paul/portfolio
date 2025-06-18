import { useState } from "react";
import { motion } from "framer-motion";
import { my } from "../data/me";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_W3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
    }
    setTimeout(() => setIsSubmitting(false), 100);
  };

  return (
    <section id="contact" className="scroll-mt-[100px]">
      <motion.h2
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-center pt-16 mb-10 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get in touch
      </motion.h2>
      {/* MODIFIED: Adjusted classes for better centering of content below */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex max-w-4xl px-10 overflow-hidden flex-col items-center text-center mx-auto"
      >
        <div className="w-full">
          <h4 className="text-2xl font-semibold md:mt-10 mb-5">Let's talk</h4>
          <p className="px-10 sm:px-0">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="w-fit mx-auto mt-5 mb-5 space-y-2">
            <div className="flex items-center">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
                />
              </svg>
              <a href={`mailto:${my.email}`}>{my.email}</a>
            </div>

            <div className="flex items-center">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                />
              </svg>
              <a
                href={`https://wa.me/${my.whatsappNo}?text=Hello,%20I'd%20like%20to%20know%20more%20about%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {my.phoneNo}
              </a>
            </div>

            <div className="flex items-center">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
                />
              </svg>
              <a href={my.location}>{my.address}</a>
            </div>
            
            {/* ADDED: LinkedIn link section */}
            <div className="flex items-center">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
              >
                <path 
                  fill="currentColor" 
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-3.18V18.5h3.18v-5.91c0-.62.4-1.16 1.16-1.16s1.16.54 1.16 1.16V18.5zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68M8.25 18.5v-9.69H5.5V18.5z"
                />
              </svg>
              <a href={my.linkedin} target="_blank" rel="noopener noreferrer">{my.linkedinHandle}</a>
            </div>
          </div>
        </div>
        <form
          className="w-full rounded-2xl py-5 sm:w-full max-w-2xl px-4 flex flex-col gap-5 my-10 border sm:border-0"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col text-left">
            <label
              htmlFor="name"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />
          </div>

          <div className="flex flex-col text-left">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />
          </div>

          <div className="flex flex-col text-left">
            <label
              htmlFor="message"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 transition resize-none"
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-zinc-800 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] dark:bg-gray-200 dark:hover:bg-white text-white dark:text-black py-3 px-6 rounded-lg font-semibold hover:bg-black transition duration-500"
          >
            {isSubmitting ? "Submitting..." : "Submit now"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;