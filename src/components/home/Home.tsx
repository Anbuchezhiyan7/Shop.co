import React, { useState, useEffect } from "react";
import Fashion from "../../assets/fashion.jpg";
import smallstar from "../../assets/smalstar.png";
import bigstar from "../../assets/bigstar.png";


interface CounterProps {
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const current = Math.min(Math.floor((progress / duration) * end), end);
      setCount(current);
      if (current < end) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <h2 className="text-4xl md:text-5xl font-extrabold text-black">
      {count.toLocaleString()}+
    </h2>
  );
};
const Home: React.FC = () => {
  return (
  <>
      <main className="bg-[#F2F0F1] min-h-screen">
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-black">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-gray-600 mt-6 text-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <button className="mt-8 px-8 py-3 rounded-full bg-black text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105">
              Shop Now
            </button>
        

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <Counter end={200} />
                <p className="text-gray-600 text-sm">International Brands</p>
              </div>
              <div>
                <Counter end={2000} />
                <p className="text-gray-600 text-sm">High-Quality Products</p>
              </div>
              <div>
                <Counter end={30000} />
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0 transform transition-transform duration-300 hover:scale-105">
            <img
              src={Fashion}
              alt="Fashion"
              className="w-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src={bigstar}
              alt="star"
              className="absolute bottom-5 right-6 w-10 h-10"
            />
            <img
              src={smallstar}
              alt="star"
              className="absolute top-10 left-9 w-8 h-8"
            />
          </div>
        </section>

        <div className="bg-black flex flex-wrap justify-center gap-12 py-6">
          {["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"].map((brand, i) => (
            <span
              key={i}
              className="text-white text-2xl font-serif font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:text-green-200 "
            >
              {brand}
            </span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
