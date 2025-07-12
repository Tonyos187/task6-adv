import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="bg-bg fixed w-full top-0 lg:px-112 lg:py-30 md:py-5 md:px-8 p-5 left-0 z-50">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-mainText">Your Name</p>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-mainText focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-6 text-mainText text-lg">
          <NavLink
            to="/"
            end
            className={`hover:text-secText ${
              location.pathname === "/"
                ? "font-bold border-b-2 border-mainText"
                : ""
            }`}
          >
            Blog
          </NavLink>
          <a href="#" className="hover:text-secText">
            Projects
          </a>
          <a href="#" className="hover:text-secText">
            About
          </a>
          <NavLink
            to="/newsletter"
            className={`hover:text-secText ${
              location.pathname === "/newsletter"
                ? "font-bold border-b-2 border-mainText"
                : ""
            }`}
          >
            Newsletter
          </NavLink>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <div className="group peer ring-0 bg-darkBg dark:bg-white rounded-full outline-none duration-300 after:duration-300 w-[96px] h-[40px] peer-checked:bg-white peer-checked:after:bg-darkBg peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[25px] after:w-[25px] after:top-[8px] after:right-[16px] after:flex after:justify-center after:items-center peer-checked:after:translate-x-[-40px] peer-hover:after:scale-95 flex justify-between items-center">
              <img
                src="/assets/icons/sun.png"
                className="w-[21px] h-[21px] ml-[16px]"
                alt=""
              />
              <img
                src="/assets/icons/moon.png"
                className="w-[21px] h-[21px] mr-[16px]"
                alt=""
              />
            </div>
          </label>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-bg text-mainText flex flex-col justify-between items-center z-50">
          <p className="pt-[20vh] text-center text-lg font-inter">Your Name</p>

          <ul className="space-y-6 text-lg text-center">
            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to="/"
                end
                className={
                  location.pathname === "/"
                    ? "font-bold border-b-2 border-mainText"
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to="/newsletter"
                className={
                  location.pathname === "/newsletter"
                    ? "font-bold border-b-2 border-mainText"
                    : ""
                }
              >
                Newsletter
              </NavLink>
            </li>
            <li>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
                <div className="group peer ring-0 bg-darkBg dark:bg-white rounded-full outline-none duration-300 after:duration-300 w-[96px] h-[40px] peer-checked:bg-white peer-checked:after:bg-darkBg peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[25px] after:w-[25px] after:top-[8px] after:right-[16px] after:flex after:justify-center after:items-center peer-checked:after:translate-x-[-40px] peer-hover:after:scale-95 flex justify-between items-center">
                  <img
                    src="/assets/icons/sun.png"
                    className="w-[21px] h-[21px] ml-[16px]"
                    alt=""
                  />
                  <img
                    src="/assets/icons/moon.png"
                    className="w-[21px] h-[21px] mr-[16px]"
                    alt=""
                  />
                </div>
              </label>
            </li>
          </ul>

          <div className="w-full py-20 flex flex-col items-center space-y-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-mainText w-full h-full flex justify-center items-center"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
