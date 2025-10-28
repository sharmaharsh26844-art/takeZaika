import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-10 md:px-20 w-[90%] md:w-[80%] mx-auto">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10 text-red-600">
        About TakeZaika
      </h2>

      {/* Description Paragraphs */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg sm:text-xl md:text-2xl leading-relaxed">
        TakeZaika brings the rich and authentic flavors of North India straight
        to your doorstep. Every dish is crafted with fresh, high-quality
        ingredients and traditional recipes, ensuring a delicious experience
        every time.
      </p>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 md:mb-20 text-base sm:text-lg md:text-xl leading-relaxed">
        From spicy tandoori delights to creamy curries and fragrant biryanis, we
        make sure every bite delights your taste buds. Our mission is to serve
        food that warms the heart and satisfies the soul.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center bg-red-50 rounded-2xl p-6 hover:shadow-lg transition">
          <img
            src="/apple.gif"
            alt="Fresh Ingredients"
            className="h-[60px] w-[60px] mb-3"
          />
          <h3 className="font-semibold text-lg md:text-xl mb-1">
            Fresh Ingredients
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Only the finest ingredients go into every dish.
          </p>
        </div>

        <div className="flex flex-col items-center bg-red-50 rounded-2xl p-6 hover:shadow-lg transition">
          <span className="text-yellow-500 text-4xl md:text-5xl mb-3">🔥</span>
          <h3 className="font-semibold text-lg md:text-xl mb-1">
            Authentic Recipes
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Traditional North Indian flavors prepared to perfection.
          </p>
        </div>

        <div className="flex flex-col items-center bg-red-50 rounded-2xl p-6 hover:shadow-lg transition">
          <img
            src="/truck.gif"
            alt="Quick Delivery"
            className="h-[60px] w-[60px] mb-3"
          />
          <h3 className="font-semibold text-lg md:text-xl mb-1">
            Quick Delivery
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Hot, fresh meals delivered fast to your doorstep.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <img
          className="w-full max-w-3xl rounded-xl shadow-lg object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/544/526/small_2x/traditional-indian-thali-platter-presenting-various-curries-and-naan-bread-photo.jpg"
          alt="Delicious North Indian Food"
        />
      </div>
    </section>
  );
};

export default About;
