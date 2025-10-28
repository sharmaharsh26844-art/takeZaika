"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
// import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
    if (session){
        router.push("/menu")
    }
    

    }, [session,router])
    
    // const router = useRouter()
    //  const pathname = usePathname(); 
    

    // useEffect(() => {
    //     if (session && pathname === "/login") {
    //         router.push("/dashboard")
    //     }
    // }, [session,pathname, router])

    return (
        <nav className="bg-[#B32B3C] text-white px-6 py-3 flex items-center justify-between shadow-md">
            {/* Logo */}
            <Link href={"/"}>
                <div className="flex items-center gap-2">

                    <img src="/food.gif" alt="logo" className="h-10 w-10 rounded-full" />
                    <h1 className="text-2xl font-bold">TakeZaika</h1>
                </div>
            </Link>

            {/* Links */}
            <ul className="flex gap-6 items-center">
                <li className="hover:font-bold transition text-black font-medium text-lg">
                    <Link href="/">Home</Link>
                </li>
                {session && (
                    <li className="hover:font-bold transition text-black font-medium text-lg">
                        <Link href="/menu">Menu</Link>
                    </li>
                )}
                <li className="hover:font-bold transition text-black font-medium text-lg">
                    <Link href="/about">About Us</Link>
                </li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-3 items-center">
                {session ? (
                    <>
                        <button
                            onClick={() => signOut({ callbackUrl: "/login" })}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition"
                        >
                            Logout
                        </button>
                        <Link href={"/cart"}>
                        <button
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-lg px-3 py-1 flex items-center gap-2 transition"
                        >
                            <img src="/cart.gif" alt="cart" className="h-6 w-6" />
                            Cart
                        </button>
                        </Link>
                    </>
                ) : (
                    <Link href="/login">
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-lg px-3 py-2 flex items-center gap-2 transition">
                            <img src="/cart.gif" alt="cart" className="h-6 w-6" />
                            Order Now
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
