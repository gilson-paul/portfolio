import { useState } from "react";
import { motion } from "framer-motion";
import { my } from "../data/me";


const Contact=()=> {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_W3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert(data.message)
    }
  };

  return (
    <>
      <h2 id="contact" className="text-5xl md:text-7xl lg:text-8xl text-center mt-20 mb-10 scroll-mt-[100px]">Get in touch</h2>
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }} className="flex container flex-col text-center md:text-left md:flex-row mx-auto ">
        <div className="w-full mx-auto md:mx-0">
          <h4 className="text-2xl font-semibold md:mt-10 mb-5">Let's talk</h4>
          <p className="px-10 sm:px-0">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className=" w-fit mx-auto md:mx-0 mt-5 mb-5">
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
              <a href={`mailto:${my.email}`}>
                {my.email}
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
                  d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                />
              </svg>
              <a href={`https://wa.me/${my.whatsappNo}?text=Hello,%20I'd%20like%20to%20know%20more%20about%20your%20services`} target="_blank">{my.phoneNo}</a>
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
              <a href={my.location}>
                {my.address}
              </a>
            </div>
          </div>
        </div>
        <form
          className="w-full max-w-2xl mx-auto px-6 md:p-10 bg-white flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col ">
            <label
              htmlFor="name"
              className="mb-1 text-sm font-medium text-gray-700"
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

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-700"
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

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-1 text-sm font-medium text-gray-700"
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
            type="submit"
            className="bg-zinc-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-grey-700 transition"
          >
            Submit now
          </button>
        </form>

      </motion.div>

    </>
  );
}

export default Contact;