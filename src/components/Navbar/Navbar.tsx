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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <nav className="bg-bg dark:bg-bg fixed top-0 left-0 w-full z-50">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-20 md:px-112 md:py-30 lg:px-162">
          <h1 className="font-semibold text-xl text-mainText dark:text-mainText">
            Your Name
          </h1>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-mainText rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-mainText dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="text-xl font-normal flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg bg-bg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-bg">
              <li
                className={
                  location.pathname === "/"
                    ? "font-bold text-mainText border-b-2 border-mainText rounded-0"
                    : "text-mainText"
                }
              >
                <NavLink
                  to="/"
                  end
                  className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 dark:text-mainText"
                  aria-current="page"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li
                className={
                  location.pathname === "/newsletter"
                    ? "font-bold text-mainText border-b-2 border-mainText rounded-0"
                    : "text-mainText"
                }
              >
                <NavLink
                  to="/newsletter"
                  className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 dark:text-mainText"
                  onClick={() => setIsMenuOpen(false)}
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
