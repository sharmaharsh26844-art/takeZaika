"use client"
import React, { Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

function RedirectContent() {

    const router = useRouter()
    const searchParams = useSearchParams();

    const paymentId = searchParams.get("payment_id");
    const orderId = searchParams.get("order_id");

    return (
        <>
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

            <div className='text-center flex justify-center items-center h-screen flex-col '>
                <div className='flex justify-center items-center '>
                    <img src="/success.gif" alt="" height={80} width={80} />
                    <h1 className='text-4xl font-medium'>Thank you for your order!!</h1>
                </div>
                <p className='text-center text-xl '> Your payment was successful.</p>
                {paymentId && (
                    <p className="text-lg text-center text-gray-600">
                        Payment ID: <span className="font-mono">{paymentId}</span>
                    </p>
                )}
                {orderId && (
                    <p className="text-lg text-center text-gray-600">
                        Order ID: <span className="font-mono">{orderId}</span>
                    </p>
                )}
                <button
                    onClick={() => router.push("/")}
                    className="mt-5  text-white bg-gradient-to-r from-purple-300 to-slate-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Back to Home
                </button>
            </div>

        </>
    )
}

const redirect = () => {
    return (
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
            <RedirectContent />
        </Suspense>
    )
}

export default redirect
