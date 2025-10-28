"use client"
import React from 'react';
import Link from 'next/link';
import { useCart } from "@/context/CartContext";
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Script from "next/script"; // ✅ Added Razorpay script loader

const Cart = () => {
    const router = useRouter()
    const { cartItems, updateQuantity, removeFromCart , clearCart } = useCart();

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
    );
    const delivery = 40;
    const taxes = 30;
    const total = subtotal + delivery + taxes;

    // ✅ Razorpay handler
    const handlePayment = async () => {
        try {
            // Call backend to create Razorpay order
            const amountInPaise = Math.round(total * 100);
            const res = await fetch("/api/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: amountInPaise }),
            });

            const order = await res.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // from env
                amount: order.amount,
                currency: order.currency,
                name: "TakeZaika",
                description: "Food Order Payment",
                order_id: order.id,
                handler: function (response) {
                    alert("Payment Successful ✅");
                    console.log("Payment Details:", response);

                    //  Clear the cart
                    clearCart();


                    router.push(`/redirect?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`);
                },


                prefill: {
                    name: "Harsh Sharma",
                    email: "test@example.com",
                    contact: "9999999999",
                },
                theme: { color: "#B32B3C" },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            console.error("Payment Error:", err);
        }
    };

    return (
        <>
            {/* ✅ Load Razorpay SDK */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

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

            {/* ✅ Your existing code untouched */}
            <div className="navbar flex justify-around items-center bg-slate-300 h-16">
                <Link href={"/"}>
                    <div className="flex items-center gap-2">
                        <img src="/food.gif" alt="logo" className="h-10 w-10 rounded-full" />
                        <h1 className="text-2xl font-bold">TakeZaika</h1>
                    </div>
                </Link>
                <button
                    onClick={() => router.push("/menu")}
                    className='font-medium rounded-lg text-sm flex items-center justify-center px-2 py-1 bg-slate-100 gap-1'>
                    <img src="/arrow.gif" alt="" height={33} width={33} />
                    Back to Menu
                </button>
            </div>

            {/* Cart Container */}
            <div className='container w-[60%] m-auto bg-slate-100 px-5 mt-10 rounded-2xl shadow-2xl'>
                <h1 className='font-medium text-center text-3xl mt-10'>Your Cart</h1>
                <hr className='mt-4border-t-2 border-slate-400 mt-4 mb-4' />

                <div className='h-[60vh] overflow-y-scroll '>
                    <h1 className='mt-5 text-2xl font-semibold'>Items</h1>

                    {cartItems.length === 0 ? (
                        <p className="text-center text-xl mt-10">Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className='mt-5 flex justify-between items-center bg-slate-300 p-4 rounded-lg' >
                                <div className='flex items-center gap-4'>
                                    <img src={item.image} alt={item.name} height={77} width={77} className=' rounded-lg' />
                                    <div>
                                        <h2 className='text-xl font-medium'>{item.name} </h2>
                                        <p className='text-sm text-gray-700'>{item.description}</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                                        className="px-3 py-1 bg-gray-200 rounded"
                                    >
                                        -
                                    </button>
                                    <span className='text-lg font-medium'>{item.cartQuantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.cartQuantity + 1)} className='px-3 py-1 bg-gray-200 rounded'>+</button>
                                    <span className='text-lg font-semibold'>₹{item.price * item.cartQuantity}</span>
                                    <button onClick={() => removeFromCart(item.id)} className=''><img src="/bin.gif" alt="" height={33} width={33} /></button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div >

            {/* Payment Section */}
            {cartItems.length > 0 && (
                <div className='mt-10 p-5 bg-slate-100 rounded-2xl w-[60%] m-auto shadow-2xl'>
                    <h2 className='text-2xl font-medium mb-4'>Order Summary</h2>
                    <hr className='mt-4border-t-2 border-slate-400 mt-4 mb-4' />

                    <div className='flex justify-between text-lg mb-2'>
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className='flex justify-between text-lg mb-2'>
                        <span>Delivery Charges</span>
                        <span>₹{delivery}</span>
                    </div>
                    <div className='flex justify-between text-lg mb-2'>
                        <span>Taxes</span>
                        <span>₹{taxes}</span>
                    </div>

                    <hr className='my-3 border-gray-300' />

                    <div className='flex justify-between text-xl font-semibold'>
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                    {/* ✅ Razorpay Checkout Button */}


                    <button
                        onClick={handlePayment}
                        className='mt-5 w-full text-white bg-gradient-to-r from-purple-300 to-slate-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                        Proceed to Checkout
                    </button>

                </div>
            )}
        </>
    );
};

export default Cart;
