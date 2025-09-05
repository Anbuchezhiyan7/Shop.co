import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import applepay from "../../assets/applepay.png";
import googlepay from "../../assets/gpay.png";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-black">
      <div className="bg-black text-white rounded-xl max-w-6xl mx-auto p-6 md:p-10 mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center md:text-left leading-tight">
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <FaEnvelope className="text-black mr-2" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 outline-none bg-transparent text-black placeholder-gray-600"
            />
          </div>
          <button className="bg-white text-black font-semibold rounded-full px-6 py-2 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold mb-4 cursor-pointer rounded-2xl transition-all duration-400 hover:bg-blue-300 hover:scale-105">
              SHOP.CO
            </h3>

            <p className="text-sm text-gray-700 max-w-xs mb-6">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <FaTwitter className="text-black hover:text-gray-600" />
              </a>
              <a href="#">
                <FaFacebookF className="text-black hover:text-gray-600" />
              </a>
              <a href="#">
                <FaInstagram className="text-black hover:text-gray-600" />
              </a>
              <a href="#">
                <FaGithub className="text-black hover:text-gray-600" />
              </a>
            </div>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">COMPANY</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">About</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Features</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Works</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">HELP</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Customer Support</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Delivery Details</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">FAQ</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Account</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Manage Deliveries</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Orders</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Payments</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">RESOURCES</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Free eBooks</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Development Tutorial</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">How to - Blog</a>
                </li>
                <li className="cursor-pointer rounded-2xl transition-all duration-100 hover:bg-yellow-300 hover:scale-105">
                  <a href="#">Youtube Playlist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-3">
            <img
              className="cursor-pointer transition-transform duration-300 hover:text-gray-700 hover:-translate-y-1"
              src={visa}
              alt="Visa"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:text-gray-700 hover:-translate-y-1"
              src={mastercard}
              alt="Mastercard"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:text-gray-700 hover:-translate-y-1"
              src={paypal}
              alt="PayPal"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:text-gray-700 hover:-translate-y-1"
              src={applepay}
              alt="Apple Pay"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:text-gray-700 hover:-translate-y-1"
              src={googlepay}
              alt="Google Pay"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
