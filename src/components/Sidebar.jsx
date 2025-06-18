import React from "react";

const Sidebar = ({ sidebarState, toggleSidebar }) => {
  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 z-30 bg-black transition-all duration-500 sm:hidden ${
          sidebarState ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 w-[250px] h-screen sm:hidden z-40 transition-all ease-in-out duration-500 bg-white dark:bg-black dark:text-white ${
          sidebarState ? "translate-x-0" : "translate-x-[250px]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleSidebar}
          className="ml-auto mr-5 mt-5 w-12 h-12"
          width={32}
          height={32}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 12.727l-3.592 3.592q-.16.16-.354.15T7.7 16.3t-.16-.364q0-.203.16-.363L11.273 12L7.681 8.433q-.16-.16-.15-.364t.169-.363t.364-.16q.203 0 .363.16L12 11.298l3.567-3.592q.16-.16.354-.16t.354.16q.166.165.166.366t-.166.36L12.702 12l3.592 3.592q.16.16.16.354t-.16.354q-.165.166-.366.166t-.36-.166z"
          />
        </svg>
        <ul className="flex flex-col mt-10 h-full">
          <li className="ml-10 mb-3 hover:scale-105 transition-all">
            <a
              className="text-2xl font-semibold"
              onClick={toggleSidebar}
              href="#"
            >
              Home
            </a>
          </li>
          <li className="ml-10 mb-3 hover:scale-105 transition-all">
            <a
              className="text-2xl font-semibold"
              onClick={toggleSidebar}
              href="#about"
            >
              About Me
            </a>
          </li>
          <li className="ml-10 mb-3 hover:scale-105 transition-all">
            <a
              className="text-2xl font-semibold"
              onClick={toggleSidebar}
              href="#services"
            >
              Services
            </a>
          </li>
          <li className="ml-10 mb-3 hover:scale-105 transition-all">
            <a
              className="text-2xl font-semibold"
              onClick={toggleSidebar}
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="ml-10 mb-3 hover:scale-105 transition-all">
            <a
              className="text-2xl font-semibold"
              onClick={toggleSidebar}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li className="mt-auto mb-[200px] mx-auto">
            <a
              href="#contact"
              onClick={toggleSidebar}
              className="sm-hidden w-fit px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full"
            >
              Connect With Me
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
