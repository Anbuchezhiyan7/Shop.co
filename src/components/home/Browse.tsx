import casual from "../../assets/Casual.png";
import formal from "../../assets/Formal.png";
import party from "../../assets/Party.png";
import gym from "../../assets/Gym.png";

const Browse = () => {
  return (
    <div className="bg-[#F2F0F1] rounded-3xl mx-4 sm:mx-8 md:mx-16 lg:mx-60 my-10 py-10">
      <div className="text-center px-4 sm:px-6 lg:px-20">
        <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer transition-transform duration-300 hover:text-gray-700 hover:-translate-y-1">
          BROWSE BY DRESS STYLE
        </h1>

      
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pt-10 pb-10 flex-wrap">
          <img
            className="w-100 max-w-[450px] sm:max-w-[200px] rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            src={casual}
            alt="casual page"
          />
          <img
            className="w-100 max-w-[450px] sm:max-w-[200px]rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            src={formal}
            alt="formal page"
          />
        </div>


        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pb-4 flex-wrap">
          <img
            className="w-100 max-w-[450px] sm:max-w-[400px] rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            src={party}
            alt="party page"
          />
          <img
            className="w-100 max-w-[450px] sm:max-w-[200px] rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            src={gym}
            alt="gym page"
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
