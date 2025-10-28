
export default function Home() {
  return (
    <>
      <div className="coverPicture">

        <img className="h-[70vh] w-screen relative object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/048/819/597/small_2x/enchanting-evening-at-a-cozy-waterfront-restaurant-under-glowing-lanterns-photo.jpeg" alt="" />

       
        <div className='absolute  flex gap-5 justify-center items-center top-[20%]  mx-55 m-auto'>
          <h1 className="text-7xl font-bold text-white">TakeZaika</h1>
          <h1 className="mt-2 text-4xl text-white font-medium "> -- “Zaika in Every Bite”. Authentic North Indian flavors delivered hot & fresh.</h1>
        </div>


        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120 h-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT880Yi6WaevZlBLBkKOum1ocHFU4QZf7xUpg&s" alt="" />
      </div>
      <div className="text-4xl flex items-center justify-center mt-20 font-medium">“From tandoori delights to creamy curries, your favorite dishes are just a click away.”</div>
      <div className="flex items-center justify-center mt-20 ">
        <img className="w-[95%] h-[70vh]" src="https://t4.ftcdn.net/jpg/11/06/78/97/360_F_1106789734_3AJR0PVpUccLkquYhiQkVj7V1kBYvH3w.jpg" alt="" />
      </div>
      <div className="text-4xl flex items-center justify-center mt-10 font-medium">
        <h1>Why Choose Us ?</h1>
      </div>

      <div className="flex flex-row justify-center gap-10 mt-10 mb-10">
        <div className="box1 h-[45vh] w-[30vh] rounded-4xl bg-red-400">
          <img className="rounded-4xl h-[25vh]" src="https://pancan.org/wp-content/uploads/2017/06/vegetable-basket-500x313.jpg" alt="" />
          <h2 className="text-center text-2xl font-bold mt-3">100% Fresh Ingredients</h2>
          <span className="mt-2 text-xl flex items-center justify-center font-normal m-auto mx-10">“Fresh, high-quality ingredients in every dish.”</span>
       
        </div>
        <div className="box1  h-[45vh] w-[30vh] rounded-4xl  bg-red-400">
          <img className="rounded-4xl h-[25vh]" src="https://images.moneycontrol.com/static-mcnews/2021/08/Express-delivery-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
          <h2 className="text-center text-2xl font-bold mt-3">Quick & Hot Delivery</h2>
          <span className="mt-2 text-xl flex items-center justify-center font-normal m-auto mx-4">Your food arrives fresh and steaming, every time.</span>
        
        </div>
        <div className="box1  h-[45vh] w-[30vh] rounded-4xl  bg-red-400">
          <img className="rounded-4xl h-[25vh]" src="https://sukhis.com/app/uploads/2022/05/image2-3.jpg" alt="" />
          <h2 className="text-center text-2xl font-bold mt-3">Affordable & Delicious</h2>
          <span className="mt-2 text-xl flex items-center justify-center font-normal m-auto mx-4">Delicious meals without breaking the bank.</span>

        </div>
        <div className="box1  h-[45vh] w-[30vh] rounded-4xl  bg-red-400">
          <img className="rounded-4xl h-[25vh] w-full" src="https://learnq.co.uk/wp-content/uploads/2024/08/FREE-Top-10-Food-Hygiene-Safety-Guidelines-Poster.png" alt="" />
          <h2 className="text-center text-2xl font-bold mt-3">Hygienic & Safe</h2>
          <span className="mt-2 text-xl flex items-center justify-center font-normal m-auto mx-4">Clean kitchens and safe packaging for your peace of mind.</span>
        </div>
      </div>

    </>
  );
}
