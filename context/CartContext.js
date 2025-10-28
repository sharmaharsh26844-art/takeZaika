"use client";
import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = (item) => {
        // Check if item already exists
        const existingItem = cartItems.find((i) => i.id === item.id);
        if (existingItem) {
            // Increase quantity
            setCartItems(
                cartItems.map((i) =>
                    i.id === item.id ? { ...i, cartQuantity: i.cartQuantity + 1 } : i
                )

            );
        } else {
            setCartItems([...cartItems, { ...item, cartQuantity: 1 }]);
            toast((`${item.name} is add to your Cart`), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }
    };

    // Remove item
    const removeFromCart = (id) => {
        const removedItem = cartItems.find((i) => i.id === id);
        setCartItems(cartItems.filter((i) => i.id !== id));
        if (removedItem) {

            toast((`${removedItem.name} is removed`), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }
    };

    // Update quantity
    const updateQuantity = (id, qty) => {
        setCartItems(
            cartItems.map((i) =>
                i.id === id ? { ...i, cartQuantity: Math.max(1, qty) } : i
            )
        );
    };

    //clear cart

    const clearCart = () => {
        setCartItems([]); // clear all items
        localStorage.removeItem("cartItems"); // if you’re storing in localStorage
    };


    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity,clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
