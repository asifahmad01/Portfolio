import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

let Navbar = () => {
  let [active, setActive] = useState("");
  let [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary opacity-95" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#915eff] to-[#5b21b6] flex items-center justify-center shadow-lg shadow-[#915eff]/40">
                <span className="text-white font-extrabold text-sm tracking-tight">MA</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] text-[#aaa6c3] font-medium tracking-[0.15em] uppercase">Portfolio</span>
                <span className="text-white font-extrabold text-[17px] tracking-wide bg-gradient-to-r from-white via-[#c4b5fd] to-[#915eff] bg-clip-text text-transparent">
                  Md Asif Anjum
                </span>
              </div>
            </div>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((args) => (
              <li
                key={args.id}
                className={`${
                  active === args.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(args.title)}
              >
                <a href={`#${args.id}`}>{args.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((args) => (
                  <li
                    key={args.id}
                    className={`${
                      active === args.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(args.title);
                    }}
                  >
                    <a href={`#${args.id}`}>{args.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
