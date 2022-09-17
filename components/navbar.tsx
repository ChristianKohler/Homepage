import { useState } from "react";
import Logo from "./logo";

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="header"
      className="w-full mx-auto p-8 pt-16 md:max-w-6xl z-10 bg-neutral-50"
    >
      <div
        id="progress"
        className="h-1 z-20 top-0"
        style={{
          background:
            "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
        }}
      ></div>

      <div className="w-full md:max-w-6xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div>
          <a
            className="text-gray-900 text-base no-underline hover:no-underline flex items-center gap-2"
            href="/"
          >
            <Logo />
          </a>
        </div>

        {/* <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}

        {/* <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20 ${
            isOpen ? null : "hidden"
          }`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                href="#"
              >
                Active
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};
