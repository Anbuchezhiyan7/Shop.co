import React, { useState } from "react";
import { FaMinus, FaPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";

// Imported Local Images
import frontTshirt from "../../assets/firstTshirt.png";
import backTshirt from "../../assets/backside.png";
import modelTshirt from "../../assets/exampleshowcase.png";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [mainImage, setMainImage] = useState(frontTshirt);

  const colors = [
    { id: "olive", color: "#4B4A2B" },
    { id: "green", color: "#34544C" },
    { id: "navy", color: "#2F2E45" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const thumbnails = [
    { id: "front", src: frontTshirt, alt: "Front view" },
    { id: "back", src: backTshirt, alt: "Back view" },
    { id: "model", src: modelTshirt, alt: "Model wearing shirt" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex gap-6">
        <div className="flex flex-col gap-4">
          {thumbnails.map((thumb) => (
            <div
              key={thumb.id}
              className={`border rounded-lg overflow-hidden cursor-pointer transition 
                ${
                  mainImage === thumb.src
                    ? "border-black"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              onClick={() => setMainImage(thumb.src)}
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="w-20 h-20 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex-1 border rounded-2xl overflow-hidden bg-gray-50">
          <img
            src={mainImage}
            alt="Product main view"
            className="w-full h-full object-fit-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start">
    
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
          ONE LIFE GRAPHIC T-SHIRT
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <p className="text-gray-500 text-sm ml-2">4.5/5</p>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold">$260</span>
          <span className="text-gray-400 line-through text-lg">$300</span>
          <span className="text-red-500 text-sm bg-red-100 px-2 py-0.5 rounded">
            -40%
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Color Selection */}
        <div className="mt-6">
          <h3 className="text-gray-700 font-medium">Select Colors</h3>
          <div className="flex gap-4 mt-2">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`w-7 h-7 rounded-full border-2 transition 
                  ${
                    selectedColor === color.id
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                style={{ backgroundColor: color.color }}
                onClick={() => setSelectedColor(color.id)}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mt-6">
          <h3 className="text-gray-700 font-medium">Choose Size</h3>
          <div className="flex gap-4 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded-full border text-sm transition 
                  ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-600 hover:border-black"
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="mt-8 flex items-center gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center border rounded-full px-4 py-2">
            <button
              className="p-2"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              <FaMinus className="w-4 h-4 text-gray-700" />
            </button>
            <span className="px-4 font-medium">{quantity}</span>
            <button className="p-2" onClick={() => setQuantity(quantity + 1)}>
              <FaPlus className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="flex-1 bg-black text-white rounded-full py-3 text-lg font-medium hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
