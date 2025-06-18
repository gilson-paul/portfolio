import { lazy, useEffect, useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import About from "./components/About";
const Sidebar=lazy(()=>import("./components/Sidebar"))
const Services= lazy(()=>import("./components/Services"))
const Portfolio=lazy(()=>import("./components/Portfolio"))
const Contact=lazy(()=>import("./components/Contact"))
const Footer =lazy(()=>import("./components/Footer"))

function App() {
  const [sidebarState, setSidebarState] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showNavbarShadow, setShowNavbarShadow] = useState(false);

  const toggleSidebar = () => setSidebarState(!sidebarState);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    const handleScrollBehavior = () => {
      const isMobile = window.innerWidth < 640;
      if (sidebarState && isMobile) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = originalOverflow || "visible";
      }
    };
    handleScrollBehavior();

    window.addEventListener("resize", handleScrollBehavior);
    return () => {
      window.removeEventListener("resize", handleScrollBehavior);
      document.body.style.overflow = originalOverflow;
    };
  }, [sidebarState]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowBackToTop(y > 300);
      setShowNavbarShadow(y > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        showNavbarShadow={showNavbarShadow}
      />
      <HomeBanner />
      <About />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <Sidebar sidebarState={sidebarState} toggleSidebar={toggleSidebar} />
        <Services />
        <Portfolio />
        <Contact />

        <Footer />
      </Suspense>

      <a
        href="#"
        className={`fixed bottom-14 z-20 right-5 h-10 w-10 bg-black hover:scale-110 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18t-.712-.288T11 17z"
          />
        </svg>
      </a>
    </>
  );
}

export default App;
