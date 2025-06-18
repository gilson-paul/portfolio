import React from "react";
import { my } from "../data/me";

const Footer = () => {
  return (
    <section className="dark:bg-black dark:text-white">
      <hr className="bg-black mb-5 w-[95%] hidden md:block rounded-full mx-auto" />
      <div className="hidden md:flex container justify-between mx-auto">
        <p>Made and designed by <a className="underline" href="#">{my.name}</a></p>
        <p>
          For feedback or improvments, please 
          <a
            href={`mailto:${my.email}`}
            className="underline ml-2"
          >
            reach me
          </a>
        </p>
      </div>

      <div
        className="w-screen h-5 rounded-b-4xl bg-white dark:bg-black translate-y-5"      />

      <footer className="bg-black dark:bg-white pt-5 h-20 text-white dark:text-black">
        <p className="text-center">
          &#169; {new Date().getFullYear()}
        </p>
        <p className="text-center hidden md:block">Made using React</p>
        <p className="text-center md:hidden ">Made and designed by <a className="underline" href="#">{my.name}</a></p>
      </footer>
    </section>
  );
};

export default React.memo(Footer);
