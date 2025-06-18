import { my } from "../data/me";

const Navbar = ({toggleSidebar,showNavbarShadow}) => {

  return (
    <>
    
    <div className={`h-24 w-full fixed z-20 top-0 backdrop-blur transition ease-in-out duration-500 ${showNavbarShadow?"shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]":""}`}>
      <nav className="h-full xl:w-[80%] w-[95%] max-w-[1500px] mx-auto flex justify-between items-center">
        <div className="ml-5 sm:ml-0"><a href="#" className="text-2xl font-semibold">{my.brandName}</a></div>

        <ul className=" hidden sm:flex gap-5 md:gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a href="#contact" className="hidden lg:block px-10 py-4 bg-black text-white font-semibold rounded-full">Connect With Me</a>

        <div
          style={{ backgroundColor: "inherit" }}
          className="h-10 w-10 flex flex-col justify-evenly items-end group mr-5 sm:hidden"
          onClick={toggleSidebar}
        >
          <div
            style={{ backgroundColor: "black" }}
            className="w-[70%] h-[10%] rounded group-hover:w-[60%] transition-all duration-500"
          />
          <div
            style={{ backgroundColor: "black" }}
            className="w-full h-[10%] rounded group-hover:w-[50%] transition-all duration-500"
          />
          <div
            style={{ backgroundColor: "black" }}
            className="w-[50%] h-[10%] rounded group-hover:w-[70%] transition-all duration-500"
          />
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
