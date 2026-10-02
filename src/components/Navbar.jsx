
import { useState } from "react";
import { Menu, X } from "lucide-react";
import avatarImg from "../assets/avatar.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#story", label: "Story" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed left-0 top-4 z-40 w-full px-4">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-gray-200/80 bg-white/80 shadow-lg backdrop-blur-xl">
        {/* NAVBAR */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5">
          {/* BRAND */}
          <a href="#" className="group flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={avatarImg}
                alt="Mahbuba Sultana"
                className="
                  h-9 w-9
                  rounded-full
                  border-2 border-emerald-400/40
                  object-cover
                  transition
                  group-hover:scale-105
                  sm:h-10 sm:w-10
                "
              />

              <span
                className="
                  absolute
                  -bottom-1
                  -right-1
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-white
                  bg-emerald-400
                "
              />
            </div>

            <h1
              className="
                text-sm
                font-black
                leading-none
                text-gray-900
                transition
                group-hover:text-emerald-600
                sm:text-base
              "
            >
              Mahbuba Sultana
            </h1>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="
              hidden
              items-center
              gap-1
              rounded-full
              bg-gray-50
              px-2
              py-1
              md:flex
            "
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  rounded-full
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-gray-600
                  transition-all
                  hover:bg-white
                  hover:text-emerald-600
                  hover:shadow-sm
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden md:block" />

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border-none
              bg-gray-100
              text-emerald-600
              transition
              hover:bg-emerald-50
              md:hidden
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="border-t border-gray-200 md:hidden">
            <nav className="flex flex-col gap-1 px-4 pb-4 pt-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-gray-700
                    transition
                    hover:bg-emerald-50
                    hover:text-emerald-600
                    active:bg-emerald-100
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
