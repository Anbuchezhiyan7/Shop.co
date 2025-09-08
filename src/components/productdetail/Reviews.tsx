import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [sortOption] = useState("Latest");

  const reviews: Review[] = [
    {
      id: 1,
      name: "Samantha D.",
      date: "August 14, 2023",
      rating: 4.5,
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      id: 2,
      name: "Alex M.",
      date: "August 15, 2023",
      rating: 5,
      comment:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
      id: 3,
      name: "Ethan R.",
      date: "August 16, 2023",
      rating: 4.5,
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      id: 4,
      name: "Olivia P.",
      date: "August 17, 2023",
      rating: 5,
      comment:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      id: 5,
      name: "Liam K.",
      date: "August 18, 2023",
      rating: 5,
      comment:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      id: 6,
      name: "Ava H.",
      date: "August 19, 2023",
      rating: 4.5,
      comment:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half-star" className="text-yellow-400" />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Tabs Section */}
      <div className="flex justify-center space-x-10 border-b pb-4">
        <button
          className={`pb-2 ${
            activeTab === "details"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("details")}
        >
          Product Details
        </button>
        <button
          className={`pb-2 ${
            activeTab === "reviews"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Rating & Reviews
        </button>
        <button
          className={`pb-2 ${
            activeTab === "faqs"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("faqs")}
        >
          FAQs
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {/* Product Details Tab */}
        {activeTab === "details" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Product Details</h2>
            <p className="text-gray-600 leading-relaxed">
              This premium t-shirt is crafted with high-quality cotton for ultimate comfort and durability. 
              The minimalist design is perfect for casual wear and features eco-friendly fabric dyes.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>100% Cotton</li>
              <li>Machine Washable</li>
              <li>Available in multiple sizes</li>
              <li>Designed with eco-friendly materials</li>
            </ul>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mb-4">
                All Reviews{" "}
                <span className="text-gray-500 font-normal">(451)</span>
              </h2>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 border rounded-full px-3 py-1 hover:bg-gray-50 transition">
                  <FiFilter className="w-4 h-4" />
                  <span className="text-sm">{sortOption}</span>
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  Write a Review
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <h3 className="font-bold">{review.name}</h3>
                    <span className="bg-green-500 text-white rounded-full text-[10px] px-1.5 py-0.5">
                      ✓
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    "{review.comment}"
                  </p>

                  <p className="mt-4 text-xs text-gray-400">
                    Posted on {review.date}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="border rounded-full px-5 py-2 text-sm hover:bg-gray-50">
                Load More Reviews
              </button>
            </div>
          </div>
        )}

        {/* FAQs Tab */}
        {activeTab === "faqs" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Q: What is the return policy?</h3>
                <p className="text-gray-600">
                  A: You can return the product within 30 days of purchase for a full refund.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Q: Does the t-shirt shrink after washing?</h3>
                <p className="text-gray-600">
                  A: No, it is pre-shrunk and designed to retain its size and shape.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Q: Are there different color options?</h3>
                <p className="text-gray-600">
                  A: Yes, we offer multiple color variations to choose from.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
