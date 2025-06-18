import React from "react";
import { my } from "../data/me";

const Footer = () => {
  return (
    <div>
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
        className="w-screen h-5 rounded-b-4xl bg-white translate-y-5"      />

      <footer className="bg-black pt-5 ">
        <p className="text-center text-white">
          &#169; {new Date().getFullYear()}
        </p>
        <p className="text-center hidden md:block text-white">Made using React</p>
        <p className="text-center md:hidden text-white">Made and designed by <a className="underline" href="#">{my.name}</a></p>
      </footer>
    </div>
  );
};

export default React.memo(Footer);
