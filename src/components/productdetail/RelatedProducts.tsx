import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import polo from "../../assets/polo.png";
import gradiant from "../../assets/gradiant.png";
import polowithtipping from "../../assets/polowithtipping.png";
import blackstrip from "../../assets/blackstrip.png";

const relatedProducts = [
  {
    id: 1,
    name: "Polo with Contrast Trims",
    image: polo,
    price: 212,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.0,
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    image: gradiant,
    price: 145,
    oldPrice: null,
    discount: null,
    rating: 3.5,
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    image: polowithtipping,
    price: 180,
    oldPrice: null,
    discount: null,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    image: blackstrip,
    price: 120,
    oldPrice: 150,
    discount: "-30%",
    rating: 5.0,
  },
];


const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i - rating === 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return stars;
};

const RelatedProducts = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
   <h2 className="text-2xl lg:text-3xl font-extrabold text-center mb-10 tracking-wide">
        YOU MIGHT ALSO LIKE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-4 mb-4 w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

    
            <h3 className="font-medium text-gray-800">{product.name}</h3>
            <div className="flex items-center justify-center gap-1 mt-2">
              {renderStars(product.rating)}
              <span className="ml-1 text-sm text-gray-500">{product.rating}/5</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="text-gray-400 line-through">${product.oldPrice}</span>
                  {product.discount && (
                    <span className="text-red-500 bg-red-100 text-xs px-2 py-0.5 rounded">
                      {product.discount}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
