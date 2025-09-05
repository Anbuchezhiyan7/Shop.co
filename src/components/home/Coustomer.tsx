import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah M.',
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: 'Alex K.',
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    name: 'James L.',
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  },
  {
    name: 'Mona S.',
    text: "Shop.co has become my go-to place for shopping. The quality, variety, and customer service are top-notch. Highly recommended!"
  },
  {
    name: 'Ethan T.',
    text: "I appreciate how easy it is to find great styles on Shop.co. Their curated collections are perfect for anyone who wants to stay fashionable without the hassle."
  }
];

const Customer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-white text-black">
      {/* Header with Arrows */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 ml-35">
        <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-left mr-28">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex justify-center sm:justify-end gap-2 mr-33">
          <button
            onClick={handlePrev}
            className="text-xl p-2 hover:bg-gray-200 rounded-full transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="text-xl p-2 hover:bg-gray-200 rounded-full transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Visible Reviews */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-7xl mx-auto">
        {visibleReviews.map((review, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full sm:max-w-sm p-6 rounded-xl border transition-all duration-500 ${
              index === 0
                ? 'opacity-100 text-black font-semibold shadow-lg'
                : 'opacity-50 text-gray-600'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <div className="flex items-center font-bold text-sm sm:text-base">
                {review.name}
                <FaCheckCircle className="text-green-500 ml-1" />
              </div>
            </div>
            <p className="text-sm leading-relaxed">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
