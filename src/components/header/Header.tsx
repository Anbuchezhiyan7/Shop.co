import "../../index.css";
import { useState } from "react";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [menSubOpen, setMenSubOpen] = useState(false);

  return (
    <div className="headerWrapper w-full bg-white">

      <div className="bg-black h-9 text-white text-sm font-semibold flex items-center justify-center">
        <p className="mb-0 mt-0 text-center p-2">
          Sign up and get 20% off on your first order.{" "}
          <a href="#" className="underline hover:text-green-400">
            Sign up
          </a>
        </p>
      </div>

     <nav className="h-20 flex items-center justify-between px-6 md:px-20 relative bg-white z-30">
  <h1 className="text-3xl font-extrabold font-integral cursor-pointer transition-all duration-300 hover:text-blue-500 hover:scale-105">
    SHOP.CO
  </h1>


        {/* Center (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <ul className="flex space-x-8 text-sm font-medium text-black">
            {/* Shop with dropdown */}
            <li
              className="relative flex items-center space-x-1 cursor-pointer"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => {
                setShopOpen(false);
                setMenSubOpen(false);
              }}
            >
              <span className="rounded-2xl px-2 py-1 transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                Shop
              </span>
              <IoIosArrowDown className="w-3 h-3 mt-[2px] transition-all duration-300 hover:bg-yellow-300 hover:scale-105 rounded-2xl" />

              {shopOpen && (
                <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 text-sm space-y-2 w-40 z-20">
                  {/* Men with Submenu */}
                  <li
                    className="relative px-3 py-2 hover:bg-blue-300 hover:scale-105 transition-all rounded-md cursor-pointer"
                    onMouseEnter={() => setMenSubOpen(true)}
                    onMouseLeave={() => setMenSubOpen(false)}
                  >
                    <span className="flex justify-between items-center">
                      Men
                      <IoIosArrowDown className="ml-2 text-xs" />
                    </span>

                    {/* Submenu */}
                    {menSubOpen && (
                      <ul className="absolute left-full top-0 bg-white shadow-md rounded-md p-2 w-32 z-30 space-y-1">
                        <li className="hover:bg-yellow-200 rounded-md transition-all cursor-pointer">
                          <Link
                            to="/product/t-shirt"
                            className="block px-3 py-2 w-full h-full"
                          >
                            T-shirt
                          </Link>
                        </li>

                        <li className="px-3 py-2 hover:bg-yellow-200 rounded-md transition-all cursor-pointer">
                          Jeans
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="px-3 py-2 hover:bg-blue-300 hover:scale-105 transition-all rounded-md cursor-pointer">
                    Women
                  </li>
                  <li className="px-3 py-2 hover:bg-blue-300 hover:scale-105 transition-all rounded-md cursor-pointer">
                    Accessories
                  </li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer rounded-2xl px-2 py-1 transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
              On Sale
            </li>
            <li className="cursor-pointer rounded-2xl px-2 py-1 transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
              New Arrivals
            </li>
            <li className="cursor-pointer rounded-2xl px-2 py-1 transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
              Brands
            </li>
          </ul>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm w-120 focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4 text-xl">
          <button className="cursor-pointer">
            <FiSearch className="md:hidden block w-5 h-5  " />
          </button>
          <button className="cursor-pointer rounded-2xl transition-all duration-300 hover:bg-blue-500 hover:scale-105">
            <FiShoppingCart />
          </button>
          <button className="cursor-pointer rounded-2xl transition-all duration-300 hover:bg-blue-500 hover:scale-105">
            <CgProfile />
          </button>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-md z-20">
          <ul className="flex flex-col space-y-4 p-4 text-sm font-medium text-black">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li className="cursor-pointer">Brands</li>
            <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm w-full focus:outline-none"
                />
                <FiSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
