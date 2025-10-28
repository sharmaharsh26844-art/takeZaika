"use client"
import React from 'react'
import { useCart } from '@/context/CartContext';
import { ToastContainer, toast } from 'react-toastify';



const menu = () => {
    const { addToCart, cartItems } = useCart();
    const menuItems = [
        { id: 1, name: "Butter Chicken", description: "Creamy, rich tomato gravy with tender chicken pieces.", price: 280, image: "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682.jpg", type: "Non-Veg", quantity: "500g" },
        { id: 2, name: "Paneer Butter Masala", description: "Soft paneer cubes simmered in a creamy tomato curry.", price: 240, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JfZHtD_jlggLqhDlthd7Jg2o4gt7OrWH7w&s", type: "Veg", quantity: "500gm" },
        { id: 3, name: "Dal Makhani", description: "Slow-cooked black lentils with butter and cream.", price: 180, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/dal-makhani-recipe.jpg", type: "Veg", quantity: "500gm" },
        { id: 4, name: "Shahi Paneer", description: "Paneer cubes in a rich, royal cashew-tomato gravy.", price: 220, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGPkrpLD5FF5R4G_Y8ShI2mcqqwDjXwS_FA&s", type: "Veg", quantity: "500gm" },
        { id: 5, name: "Chicken Biryani", description: "Aromatic rice layered with spiced chicken.", price: 300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcdlgGqTXb-qtbAK_WgscTy2TimgPjzn9fw&s", type: "Non-Veg", quantity: "500g" },
        { id: 6, name: "Veg Biryani", description: "Fragrant basmati rice cooked with seasonal vegetables.", price: 220, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9Tw6cZWpDVACgNwAaqls8uxiPMPrUimMTA&s", type: "Veg", quantity: "500gm" },
        { id: 7, name: "Chole Bhature", description: "Spicy chickpea curry served with fluffy fried bread.", price: 160, image: "https://b.zmtcdn.com/data/dish_photos/4a4/bfd7d923ef594c1484a64be883cf94a4.jpeg", type: "Veg", quantity: "500gm" },
        { id: 8, name: "Rajma Chawal", description: "Red kidney beans curry served with steamed rice.", price: 150, image: "https://i0.wp.com/www.hmbsweets.com/wp-content/uploads/2025/04/img_8270.jpeg?fit=1290%2C1166&ssl=1", type: "Veg", quantity: "500gm" },
        { id: 9, name: "Aloo Paratha", description: "Whole wheat bread stuffed with spiced mashed potatoes.", price: 120, image: "https://www.tipsnrecipesblog.com/wp-content/uploads/2023/02/Paneer-aloo-paratha-main.jpg", type: "Veg", quantity: "500gm" },
        { id: 10, name: "Gulab Jamun", description: "Sweet dumplings soaked in sugar syrup.", price: 100, image: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800", type: "Dessert", quantity: "250gm" },
        { id: 11, name: "Rasmalai", description: "Soft paneer patties soaked in saffron-flavored milk.", price: 120, image: "https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg", type: "Dessert", quantity: "250gm" },
        { id: 12, name: "Lassi", description: "Refreshing sweet or salty yogurt-based drink.", price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJl5giiE26PIj2AiDVRiVzwuqVuXVJX7MHg&s", type: "Beverage", quantity: "250ml" },
        { id: 13, name: "Masala Chai", description: "Spiced Indian tea brewed with milk and aromatic spices.", price: 40, image: "https://budleaf.com/wp-content/uploads/2023/04/How-to-make-masala-chai-1568x1039.jpeg", type: "Beverage", quantity: "250ml" },
        { id: 14, name: "Kadai Paneer", description: "Paneer cooked with capsicum, onions, and spicy tomato gravy.", price: 230, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUVewcvBys0v86FEQzS2XCn3m6wmDNonskg&s", type: "Veg", quantity: "500gm" },
        { id: 15, name: "Palak Paneer", description: "Paneer cubes cooked in a creamy spinach gravy.", price: 220, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_I8R5TXGoabQURaYGUMiLe7d1GIcdpLdTLQ&s", type: "Veg", quantity: "500gm" },
        { id: 16, name: "Baingan Bharta", description: "Smoky roasted eggplant mash cooked with spices.", price: 180, image: "https://spicecravings.com/wp-content/uploads/2023/03/Baingan-Bharta-Featured-2.jpg", type: "Veg", quantity: "500gm" },
        { id: 17, name: "Malai Kofta", description: "Fried paneer-potato balls in a creamy gravy.", price: 240, image: "https://dailyreveries.com/wp-content/uploads/2023/06/IMG_20230521_135352.jpg", type: "Veg", quantity: "500gm" },
        { id: 18, name: "Bhindi Masala", description: "Okra stir-fried with onions, tomatoes, and spices.", price: 160, image: "https://www.nehascookbook.com/wp-content/uploads/2022/10/Dahi-bhindi-WS-500x500.jpg", type: "Veg", quantity: "500gm" },
        { id: 19, name: "Chicken Tikka Masala", description: "Marinated chicken cooked in rich tomato-based gravy.", price: 320, image: "https://www.shemins.com/wp-content/uploads/2017/03/shemins-chicken-tikka-masala-LR-1280x1280.jpg", type: "Non-Veg", quantity: "500g" },
        { id: 20, name: "Fish Curry", description: "Tangy tomato-based fish curry with North Indian spices.", price: 350, image: "https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-4.jpg", type: "Non-Veg", quantity: "500g" },
        { id: 21, name: "Kebabs", description: "Juicy grilled meat skewers with smoky flavor.", price: 250, image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg", type: "Non-Veg", quantity: "100gm" },
        { id: 22, name: "Tandoori Roti", description: "Clay oven (Tandoor) baked whole wheat bread.", price: 30, image: "https://www.yummyfoodrecipes.com/resources/picture/org/Tandoori-Roti.jpg", type: "Veg", quantity: "500gm" },
        { id: 23, name: "Naan", description: "Soft, fluffy tandoor-baked Indian bread.", price: 40, image: "https://allwaysdelicious.com/wp-content/uploads/2022/04/garlic-butter-naan-4.jpg", type: "Veg", quantity: "500gm" },
        { id: 24, name: "Garlic Naan", description: "Naan topped with fresh garlic and butter.", price: 50, image: "https://thewhiskaddict.com/wp-content/uploads/2021/02/IMG_6493-1-scaled.jpg", type: "Veg", quantity: "500gm" },
        { id: 25, name: "Stuffed Kulcha", description: "Leavened bread stuffed with spiced potatoes or paneer.", price: 70, image: "https://aplateofhappiness.net/wp-content/uploads/2017/03/img_7457-2.jpg?w=840", type: "Veg", quantity: "500gm" },
        { id: 26, name: "Jeera Rice", description: "Steamed rice flavored with cumin seeds.", price: 120, image: "https://www.honeywhatscooking.com/wp-content/uploads/2023/04/Instant-Pot-Jeera-Rice-Cumin-Rice-FeaturedImage.jpg", type: "Veg", quantity: "500gm" },
        { id: 27, name: "Tandoori Chicken", description: "Chicken marinated in yogurt & spices, roasted in tandoor.", price: 320, image: "https://spicecravings.com/wp-content/uploads/2024/09/Air-Fryer-Tandoori-Legs-Featured-2.jpg", type: "Non-Veg", quantity: "500g" },
        { id: 28, name: "Veg Pakora", description: "Crispy fritters made from gram flour and vegetables.", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tzs50B-Vz_bymuySlEUPje3a3F6cQpHg_A&s", type: "Snack", quantity: "2 piece" },
        { id: 29, name: "Kachori", description: "Flaky fried bread stuffed with spiced lentils.", price: 70, image: "https://luniamarketing.com/wp-content/uploads/2021/01/Moong-Dal-Ki-Kachori.jpg", type: "Snack", quantity: "2 piece" },
        { id: 30, name: "Papdi Chaat", description: "Crispy wafers topped with yogurt, chutneys, and spices.", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZ1XhNz6a79ld3qePQTf9sBacE274vLJ_Wg&s", type: "Snack", quantity: "2 piece" },
        { id: 31, name: "Pav Bhaji", description: "Spicy mashed vegetable curry served with buttered buns.", price: 150, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg", type: "Snack", quantity: "2 piece" },
        { id: 32, name: "Rabri", description: "Thickened sweetened milk flavored with saffron & nuts.", price: 140, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QEG8zp8CHUyc5cntjcJa-CIv3-0MoLXp5w&s", type: "Dessert", quantity: "250gm" },
        { id: 33, name: "Kulfi", description: "Traditional Indian ice cream made with thickened milk.", price: 100, image: "https://recipes.timesofindia.com/thumb/84786580.cms?width=1200&height=900", type: "Dessert", quantity: "250gm" },
        { id: 34, name: "Jalebi", description: "Crispy, syrup-soaked spiral-shaped sweet.", price: 90, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmHUV0lr_9efDJbvspxQ82K6aRbllIHqSMg&s", type: "Dessert", quantity: "250gm" },
        { id: 35, name: "Phirni", description: "Rice flour pudding flavored with cardamom & saffron.", price: 110, image: "https://madscookhouse.com/wp-content/uploads/2022/09/Kong-Phirin-Kashmiri-Saffron-Semolina-Phirni-Nut-Free-500x500.jpg", type: "Dessert", quantity: "250gm" },
        { id: 36, name: "Kheer", description: "Classic rice pudding with milk, sugar, and dry fruits.", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbKhP7LNj5PhpGtJlu8g3UCeyxJPTANe7cg&s", type: "Dessert", quantity: "250gm" },
        { id: 37, name: "Mango Lassi", description: "Sweet yogurt drink blended with ripe mango.", price: 100, image: "https://www.anediblemosaic.com/wp-content/uploads//2021/09/mango-lassi-featured-image.jpg", type: "Beverage", quantity: "250ml" },
        { id: 38, name: "Thandai", description: "Milk-based festive drink flavored with nuts & spices.", price: 120, image: "https://pipingpotcurry.com/wp-content/uploads/2022/03/Thandai-Recipe-for-Holi-Piping-Pot-Curry.jpg", type: "Beverage", quantity: "250ml" },
        { id: 39, name: "Chaas", description: "Refreshing spiced buttermilk drink with mint flavour.", price: 60, image: "https://pipingpotcurry.com/wp-content/uploads/2022/02/How-to-Make-Indian-buttermilk-masala-chaas.jpg", type: "Beverage", quantity: "250ml" },
        { id: 40, name: "Chana Masala", description: "Spicy chickpea curry cooked with onion and tomato masala.", price: 170, image: "https://silkroadrecipes.com/wp-content/uploads/2021/12/Kala-Chana-Black-Curry-square.jpg", type: "Veg", quantity: "500gm" }
    ];

    const getCartQuantity = (id) => {
        const item = cartItems.find((i) => i.id === id);
        return item ? item.cartQuantity : 0;
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='text-5xl font-bold text-center mt-5'>Our Dishes</div>
            <span className='text-2xl flex items-center justify-center mt-3'>"Discover the authentic flavors of North India, crafted with love and delivered hot to your doorstep."
            </span>
            <div className="items grid grid-cols-4  justify-center items-center m-auto w-[95%] mt-10 gap-5  px-3 mb-10">
                {menuItems.map((items, index) => (
                    <div key={index} className="container bg-red-900 h-[50vh] w-[40vh] rounded-4xl text-white ">
                        <div className='h-[55%] overflow-hidden'>
                            <img className='rounded-4xl  w-full h-full object-center shadow-2xl' src={items.image} alt={items.name} />

                        </div>
                        <h2 className='text-center text-2xl font-medium mt-2'>{items.name}</h2>

                        <div className="container w-[80%] mx-auto mt-2">

                            <span className=''>{items.description}</span>
                            <div className='font-medium text-lg flex justify-between '>
                                <span>Price:- ₹{items.price} </span>
                                <span>Qty:- {items.quantity} </span>
                            </div>
                        </div>


                        <div className="button flex items-center justify-center mt-3 gap-2  ">

                            <button
                                type="button"
                                className="text-white bg-yellow-600 gap-2 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 py-2 inline-flex items-center"
                                onClick={() => addToCart(items)}>
                                <img src="/cart.gif" alt="" height={33} width={33} />
                                Add to Cart
                            </button>
                            <span className='text-lg font-bold'>{getCartQuantity(items.id)}</span>
                            <button onClick={() => addToCart(items)} className='px-3 py-1  rounded bg-yellow-600 hover:bg-yellow-700 focus:ring-red-300'>+</button>

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default menu