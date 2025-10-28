export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <img
          className="h-[70vh] w-full object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/048/819/597/small_2x/enchanting-evening-at-a-cozy-waterfront-restaurant-under-glowing-lanterns-photo.jpeg"
          alt="Restaurant background"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4 text-center bg-black/40">
          <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg">
            TakeZaika
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-white font-medium max-w-[800px]">
            “Zaika in Every Bite” — Authentic North Indian flavors delivered hot & fresh.
          </h2>

          {/* Floating Center Image */}
          <img
            className="w-40 h-40 md:w-64 md:h-56 object-contain mt-4 md:mt-8 z-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT880Yi6WaevZlBLBkKOum1ocHFU4QZf7xUpg&s"
            alt="TakeZaika logo"
          />
        </div>
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
          alt="Food variety"
        />
      </div>

      {/* Why Choose Us */}
      <div className="text-center text-3xl md:text-4xl mt-10 font-semibold">
        <h1>Why Choose Us?</h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 mb-10 px-4">
        {[
          {
            title: "100% Fresh Ingredients",
            text: "Fresh, high-quality ingredients in every dish.",
            img: "https://pancan.org/wp-content/uploads/2017/06/vegetable-basket-500x313.jpg",
          },
          {
            title: "Quick & Hot Delivery",
            text: "Your food arrives fresh and steaming, every time.",
            img: "https://images.moneycontrol.com/static-mcnews/2021/08/Express-delivery-770x433.jpg?impolicy=website&width=770&height=431",
          },
          {
            title: "Affordable & Delicious",
            text: "Delicious meals without breaking the bank.",
            img: "https://sukhis.com/app/uploads/2022/05/image2-3.jpg",
          },
          {
            title: "Hygienic & Safe",
            text: "Clean kitchens and safe packaging for your peace of mind.",
            img: "https://learnq.co.uk/wp-content/uploads/2024/08/FREE-Top-10-Food-Hygiene-Safety-Guidelines-Poster.png",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="h-auto w-[90%] sm:w-[45%] md:w-[22%] bg-red-400 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              className="h-[25vh] w-full object-cover"
              src={card.img}
              alt={card.title}
            />
            <h2 className="text-center text-xl md:text-2xl font-bold mt-3 px-2">
              {card.title}
            </h2>
            <p className="text-center text-base md:text-lg font-normal px-4 mb-3">
              “{card.text}”
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
