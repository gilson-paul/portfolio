import { my } from "../data/me";
import ThemeToggleIcon from "./ThemeToggleIcon";

const Navbar = ({ toggleSidebar, showNavbarShadow, themeToggle }) => {
  return (
    <>
      <div
        className={`h-24 w-full fixed z-30 top-0 dark:bg-black/20 backdrop-blur-sm transition ease-in-out border-white border-0 duration-500 dark:text-white ${
          showNavbarShadow &&
          "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:border-b-1"
        }`}
      >
        <nav className="h-full xl:w-[80%] w-[95%] max-w-[1500px] mx-auto flex justify-between items-center">
          <div className="ml-5 sm:ml-0">
            <a href="#" className="text-2xl font-semibold">
              {my.brandName}
            </a>
          </div>

          <ul className=" hidden h-full items-center sm:flex gap-5 md:gap-10">
            <li className="hover:scale-105 transition-all duration-300">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-105 transition-all duration-300">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:scale-105 transition-all duration-300">
              <a href="#services">Services</a>
            </li>
            <li className="hover:scale-105 transition-all duration-300">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:scale-105 transition-all duration-300">
              <a onClick={themeToggle}>
                <ThemeToggleIcon />
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="hidden lg:block px-8 py-3 text-lg bg-black dark:bg-white dark:text-black hover:scale-105 transition duration-500 text-white font-semibold rounded-full"
          >
            Connect With Me
          </a>

          <div className="ml-auto mr-5 sm:hidden">
            <ThemeToggleIcon />
          </div>
          <div
            className="h-10 w-10 flex flex-col justify-evenly items-end group mr-5 sm:hidden"
            onClick={toggleSidebar}
          >
            <div
              className="w-[70%] h-[10%] bg-black dark:bg-white rounded group-hover:w-[60%] transition-all duration-500"
            />
            <div
              className="w-full h-[10%] bg-black dark:bg-white rounded group-hover:w-[50%] transition-all duration-500"
            />
            <div
              className="w-[50%] h-[10%] bg-black dark:bg-white rounded group-hover:w-[70%] transition-all duration-500"
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
