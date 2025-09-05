import tshirt from "../../assets/Tshirt.png"; // replace with your images
import jeans from "../../assets/Jeans.png";
import checkedShirt from "../../assets/Checkedshirt.png";
import stripedTshirt from "../../assets/Linetshirt.png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number; // e.g., 4.5
}

const products: Product[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: tshirt,
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: jeans,
    price: 240,
    oldPrice: 260,
    rating: 3.5,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    image: checkedShirt,
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: stripedTshirt,
    price: 130,
    oldPrice: 160,
    rating: 4.5,
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400 inline" />);
  }
  return stars;
};

const NewArrivals: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <h2 className="text-gray-900 text-4xl font-bold cursor-pointer transition-transform duration-300 hover:text-gray-700 hover:-translate-y-1 text-center">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 p-5 rounded-lg text-center relative top-10  transform transition-transform hover:scale-105 ">
            <img src={product.image} alt={product.name} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <div className="flex justify-center items-center mb-1 space-x-1">
              {renderStars(product.rating)}
              <span className="text-gray-500 text-sm">{product.rating}/5</span>
            </div>
            <div className="flex justify-center items-center space-x-2 text-lg font-bold">
              <span>${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="line-through text-gray-400 font-normal">${product.oldPrice}</span>
                  <span className="text-pink-500 font-semibold">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-2 mt-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
          View All
        </button>
      </div>
      <hr className="mt-7"></hr>
    </section>
  
  );
};

export default NewArrivals;
