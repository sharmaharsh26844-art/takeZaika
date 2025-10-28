export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          className="h-[70vh] w-full object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/048/819/597/small_2x/enchanting-evening-at-a-cozy-waterfront-restaurant-under-glowing-lanterns-photo.jpeg"
          alt=""
        />

        <div className="absolute inset-0 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center px-4 md:px-12 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg">
            TakeZaika
          </h1>
          <h1 className="text-lg md:text-3xl lg:text-4xl text-white font-medium max-w-[800px]">
            -- “Zaika in Every Bite”. Authentic North Indian flavors delivered hot & fresh.
          </h1>
        </div>

        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-96 md:h-72 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT880Yi6WaevZlBLBkKOum1ocHFU4QZf7xUpg&s"
          alt=""
        />
      </div>

      {/* Tagline */}
      <div className="text-center text-xl md:text-3xl lg:text-4xl mt-10 md:mt-20 font-medium px-4">
        “From tandoori delights to creamy curries, your favorite dishes are just a click away.”
      </div>

      {/* Middle Image */}
      <div className="flex items-center justify-center mt-10 md:mt-20 px-4">
        <img
          className="w-full md:w-[95%] h-[40vh] md:h-[70vh] object-cover rounded-2xl"
          src="https://t4.ftcdn.net/jpg/11/06/78/97/360_F_1106789734_3AJR0PVpUccLkquYhiQkVj7V1kBYvH3w.jpg"
          alt=""
        />
      </div>

      {/* Why Choose Us */}
      <div className="text-center text-3xl md:text-4xl mt-10 font-semibold">
        <h1>Why Choose Us ?</h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 mb-10 px-4">
        {/* Card 1 */}
        <div className="h-auto w-[80%] sm:w-[45%] md:w-[30vh] bg-red-400 rounded-3xl overflow-hidden shadow-lg">
          <img
            className="h-[25vh] w-full object-cover"
            src="https://pancan.org/wp-content/uploads/2017/06/vegetable-basket-500x313.jpg"
            alt=""
          />
          <h2 className="text-center text-xl md:text-2xl font-bold mt-3">
            100% Fresh Ingredients
          </h2>
          <span className="block text-center text-base md:text-xl font-normal px-4 mb-3">
            “Fresh, high-quality ingredients in every dish.”
          </span>
        </div>

        {/* Card 2 */}
        <div className="h-auto w-[80%] sm:w-[45%] md:w-[30vh] bg-red-400 rounded-3xl overflow-hidden shadow-lg">
          <img
            className="h-[25vh] w-full object-cover"
            src="https://images.moneycontrol.com/static-mcnews/2021/08/Express-delivery-770x433.jpg?impolicy=website&width=770&height=431"
            alt=""
          />
          <h2 className="text-center text-xl md:text-2xl font-bold mt-3">
            Quick & Hot Delivery
          </h2>
          <span className="block text-center text-base md:text-xl font-normal px-4 mb-3">
            Your food arrives fresh and steaming, every time.
          </span>
        </div>

        {/* Card 3 */}
        <div className="h-auto w-[80%] sm:w-[45%] md:w-[30vh] bg-red-400 rounded-3xl overflow-hidden shadow-lg">
          <img
            className="h-[25vh] w-full object-cover"
            src="https://sukhis.com/app/uploads/2022/05/image2-3.jpg"
            alt=""
          />
          <h2 className="text-center text-xl md:text-2xl font-bold mt-3">
            Affordable & Delicious
          </h2>
          <span className="block text-center text-base md:text-xl font-normal px-4 mb-3">
            Delicious meals without breaking the bank.
          </span>
        </div>

        {/* Card 4 */}
        <div className="h-auto w-[80%] sm:w-[45%] md:w-[30vh] bg-red-400 rounded-3xl overflow-hidden shadow-lg">
          <img
            className="h-[25vh] w-full object-cover"
            src="https://learnq.co.uk/wp-content/uploads/2024/08/FREE-Top-10-Food-Hygiene-Safety-Guidelines-Poster.png"
            alt=""
          />
          <h2 className="text-center text-xl md:text-2xl font-bold mt-3">
            Hygienic & Safe
          </h2>
          <span className="block text-center text-base md:text-xl font-normal px-4 mb-3">
            Clean kitchens and safe packaging for your peace of mind.
          </span>
        </div>
      </div>
    </>
  );
}
