import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "المتجر", path: "/shop" },
    { name: "الوصفات", path: "/recipes" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5EF] border-b border-[#E5DDD1]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#5E3023]"
          >
            بهارات الشرق
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-[#B85C38] font-semibold"
                      : "text-gray-700 hover:text-[#B85C38]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">

            <button className="text-xl cursor-pointer hover:text-[#B85C38] transition">
              <FiSearch />
            </button>

            {/* Cart (UI only - no page) */}
            <button className="text-xl cursor-pointer hover:text-[#B85C38] transition">
              <HiOutlineShoppingCart />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-[#F8F5EF]">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#B85C38] font-semibold"
                    : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;