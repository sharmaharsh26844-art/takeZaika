"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react"; // for hamburger icon

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (session) {
      router.push("/menu");
    }
  }, [session, router]);

  return (
    <nav className="bg-[#B32B3C] text-white px-6 py-3 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <img src="/food.gif" alt="logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-2xl font-bold">TakeZaika</h1>
        </div>
      </Link>

      {/* Hamburger Icon (mobile) */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 items-center">
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

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3 items-center">
        {session ? (
          <>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition"
            >
              Logout
            </button>
            <Link href={"/cart"}>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-lg px-3 py-1 flex items-center gap-2 transition">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#B32B3C] flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <ul className="flex flex-col items-center gap-4">
            <li className="hover:font-bold transition text-black font-medium text-lg">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            {session && (
              <li className="hover:font-bold transition text-black font-medium text-lg">
                <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
              </li>
            )}
            <li className="hover:font-bold transition text-black font-medium text-lg">
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 items-center mt-3">
            {session ? (
              <>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/login" });
                    setIsOpen(false);
                  }}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition"
                >
                  Logout
                </button>
                <Link href={"/cart"} onClick={() => setIsOpen(false)}>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-lg px-3 py-1 flex items-center gap-2 transition">
                    <img src="/cart.gif" alt="cart" className="h-6 w-6" />
                    Cart
                  </button>
                </Link>
              </>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg text-lg px-3 py-2 flex items-center gap-2 transition">
                  <img src="/cart.gif" alt="cart" className="h-6 w-6" />
                  Order Now
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
