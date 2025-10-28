import React from 'react'

const about = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 w-[80%] mx-auto">

  <h2 className="text-5xl font-bold text-center mb-10 text-takezaika-red">
    About TakeZaika
  </h2>

  {/* Paragraphs */}
  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-2xl">
    TakeZaika brings the rich and authentic flavors of North India straight to your doorstep. 
    Every dish is crafted with fresh, high-quality ingredients and traditional recipes, 
    ensuring a delicious experience every time.
  </p>

  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-20 text-xl">
    From spicy tandoori delights to creamy curries and fragrant biryanis, we make sure every bite 
    delights your taste buds. Our mission is to serve food that warms the heart and satisfies the soul.
  </p>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
    <div className="flex flex-col items-center">
      <img src="/apple.gif" alt="" height={70} width={70} />
      <h3 className="font-semibold mb-1">Fresh Ingredients</h3>
      <p className="text-gray-600">Only the finest ingredients go into every dish.</p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-takezaika-yellow text-5xl mb-2">🔥</span>
      <h3 className="font-semibold mb-1">Authentic Recipes</h3>
      <p className="text-gray-600">Traditional North Indian flavors prepared to perfection.</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="/truck.gif" alt="" height={70} width={70}/>
      <h3 className="font-semibold mb-1">Quick Delivery</h3>
      <p className="text-gray-600">Hot, fresh meals delivered fast to your doorstep.</p>
    </div>
  </div>

  {/* Optional Image */}
  <div className="mt-12 flex justify-center">
    <img
      className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
      src="https://static.vecteezy.com/system/resources/thumbnails/049/544/526/small_2x/traditional-indian-thali-platter-presenting-various-curries-and-naan-bread-photo.jpg"
      alt="Delicious North Indian Food"
    />
  </div>
</section>
  )
}

export default about