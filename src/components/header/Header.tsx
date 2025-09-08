import "../../index.css";
import { useState } from "react";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import tshirt from "../../assets/Tshirt.png";
import jeans from "../../assets/Jeans.png";
import checkedShirt from "../../assets/Checkedshirt.png";
import stripedTshirt from "../../assets/Linetshirt.png";
import verticalshirt from "../../assets/Verticalshirt.png";
import graphictshirt from "../../assets/Graphictshirt.png";
import shorts from "../../assets/Shorts.png";
import skinnypant from "../../assets/Skinnypant.png";

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [shopOpen, setShopOpen] = useState(false); // Desktop dropdown
  const [menSubOpen, setMenSubOpen] = useState(false); // Men submenu
  const [mobileShopOpen, setMobileShopOpen] = useState(false); // Mobile Shop dropdown

  const products = [
    { name: "T-shirt with Tape Details", image: tshirt },
    { name: "Skinny Fit Jeans", image: jeans },
    { name: "Checkered Shirt", image: checkedShirt },
    { name: "Sleeve Striped T-shirt", image: stripedTshirt },
    { name: "Vertical Striped Shirt", image: verticalshirt },
    { name: "Courage Graphic T-shirt", image: graphictshirt },
    { name: "Loose Fit Bermuda Shorts", image: shorts },
    { name: "Faded Skinny Jeans", image: skinnypant },
  ];

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      setShowPopup(false);
      return;
    }
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
    setShowPopup(true);
  };

  return (
    <div className="headerWrapper w-full bg-white">
      {/* Top Banner */}
      <div className="bg-black h-9 text-white text-sm font-semibold flex items-center justify-center">
        <p className="mb-0 mt-0 text-center p-2">
          Sign up and get 20% off on your first order.{" "}
          <a href="#" className="underline hover:text-green-400">
            Sign up
          </a>
        </p>
      </div>

      {/* Navbar */}
      <nav className="h-20 flex items-center justify-between px-6 md:px-20 relative bg-white z-30">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold font-integral cursor-pointer transition-all duration-300 hover:text-blue-500 hover:scale-105">
            SHOP.CO
          </h1>
        </Link>

        {/* Center Menu (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <ul className="flex space-x-8 text-sm font-medium text-black">
            {/* Shop Dropdown */}
            <li
              className="relative flex items-center space-x-1 cursor-pointer"
              onClick={() => setShopOpen((prev) => !prev)}
            >
              <span className="rounded-2xl px-2 py-1 transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                Shop
              </span>
              <IoIosArrowDown className="w-3 h-3 mt-[2px]" />

              {/* Dropdown */}
              {shopOpen && (
                <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 text-sm space-y-2 w-40 z-20">
                  {/* Men with Submenu */}
                  <li
                    className="relative px-3 py-2 hover:bg-blue-300 rounded-md transition-all cursor-pointer"
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
                        <li className="hover:bg-yellow-200 rounded-md transition-all cursor-pointer">
                          Jeans
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="px-3 py-2 hover:bg-blue-300 rounded-md cursor-pointer">
                    Women
                  </li>
                  <li className="px-3 py-2 hover:bg-blue-300 rounded-md cursor-pointer">
                    Accessories
                  </li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer rounded-2xl px-2 py-1 hover:bg-yellow-300 transition-all">
              On Sale
            </li>
            <Link to="/products">
              <li className="cursor-pointer rounded-2xl px-2 py-1 hover:bg-yellow-300 transition-all">
                New Arrivals
              </li>
            </Link>
            <li className="cursor-pointer rounded-2xl px-2 py-1 hover:bg-yellow-300 transition-all">
              Brands
            </li>
          </ul>
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm w-64 focus:outline-none"
            />
          {showPopup && results.length > 0 && (
            <div className="absolute top-full">
              {results.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer hover:bg-gray-100 p-2"
                    onClick={() => {
                      setQuery(item.name);
                      setShowPopup(false);
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="ml-2 text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
          )}
          {showPopup && results.length === 0 && (
            <div className="absolute top-full left-0">No Product Found</div>
          )}
        </div>
         </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-xl">
          <button className="cursor-pointer md:hidden">
            <FiSearch className="w-5 h-5" />
          </button>
          <button className="cursor-pointer rounded-2xl hover:bg-blue-500 transition-all">
            <FiShoppingCart />
          </button>
          <button className="cursor-pointer rounded-2xl hover:bg-blue-500 transition-all">
            <CgProfile />
          </button>

          {/* Hamburger Icon */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-md z-20">
          <ul className="flex flex-col space-y-4 p-4 text-sm font-medium text-black">
            {/* Mobile Shop Dropdown */}
            <li>
              <button
                className="flex justify-between items-center w-full px-2 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setMobileShopOpen(!mobileShopOpen)}
              >
                Shop
                <IoIosArrowDown
                  className={`transition-transform ${
                    mobileShopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileShopOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-2 rounded-md hover:bg-gray-100"
                      onClick={() => setMenSubOpen(!menSubOpen)}
                    >
                      Men
                      <IoIosArrowDown
                        className={`transition-transform ${
                          menSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {menSubOpen && (
                      <ul className="pl-4 space-y-1">
                        <li>
                          <Link
                            to="/product/t-shirt"
                            className="block px-2 py-2 rounded-md hover:bg-yellow-200"
                          >
                            T-shirt
                          </Link>
                        </li>
                        <li className="px-2 py-2 rounded-md hover:bg-yellow-200">
                          Jeans
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="px-2 py-2 rounded-md hover:bg-gray-100">
                    Women
                  </li>
                  <li className="px-2 py-2 rounded-md hover:bg-gray-100">
                    Accessories
                  </li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer px-2 py-2 hover:bg-gray-100">
              On Sale
            </li>
            <li className="cursor-pointer px-2 py-2 hover:bg-gray-100">
              New Arrivals
            </li>
            <li className="cursor-pointer px-2 py-2 hover:bg-gray-100">
              Brands
            </li>

            {/* Mobile Search Bar */}
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
