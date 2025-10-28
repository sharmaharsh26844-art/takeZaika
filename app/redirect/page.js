"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function RedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");

  return (
    <>
      {/* ✅ Navbar */}
      <div className="navbar flex flex-wrap justify-between sm:justify-around items-center bg-slate-300 h-auto sm:h-16 px-4 py-3">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <img
              src="/food.gif"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-xl sm:text-2xl font-bold">TakeZaika</h1>
          </div>
        </Link>
        <button
          onClick={() => router.push("/menu")}
          className="font-medium rounded-lg text-sm flex items-center justify-center px-3 py-2 bg-slate-100 gap-1 mt-2 sm:mt-0"
        >
          <img src="/arrow.gif" alt="" height={28} width={28} />
          Back to Menu
        </button>
      </div>

      {/* ✅ Thank You Section */}
      <div className="text-center flex flex-col justify-center items-center min-h-[80vh] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <img
            src="/success.gif"
            alt="Success"
            className="w-20 h-20 sm:w-[80px] sm:h-[80px]"
          />
          <h1 className="text-2xl sm:text-4xl font-medium text-gray-800">
            Thank you for your order!!
          </h1>
        </div>

        <p className="text-center text-lg sm:text-xl text-gray-700 mt-3">
          Your payment was successful.
        </p>

        {paymentId && (
          <p className="text-base sm:text-lg text-center text-gray-600 mt-2 break-words">
            Payment ID: <span className="font-mono">{paymentId}</span>
          </p>
        )}
        {orderId && (
          <p className="text-base sm:text-lg text-center text-gray-600 break-words">
            Order ID: <span className="font-mono">{orderId}</span>
          </p>
        )}

        <button
          onClick={() => router.push("/")}
          className="mt-6 text-white bg-gradient-to-r from-purple-300 to-slate-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm sm:text-base px-6 py-2.5 text-center"
        >
          Back to Home
        </button>
      </div>
    </>
  );
}

const Redirect = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <RedirectContent />
    </Suspense>
  );
};

export default Redirect;
