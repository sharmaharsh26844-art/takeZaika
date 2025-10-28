import React from 'react'
import Link from 'next/link'

const dashboard = () => {
  return (
    <>
    <div className='relative w-full h-[83vh]'>
        <img className='w-full h-full object-cover ' src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg" alt="" />
    <div className= 'absolute inset-0 flex items-center justify-center flex-col gap-10'>
        <h1 className='font-bold text-4xl text-center mt-5'>Welcome to the Dashboard</h1>
        <form className='bg-red-400 w-[45%] mx-auto p-5 mt-8'>
            <div>
                <label htmlFor="name" className='block mb-2 text-lg font-medium '>Name</label>
                <input type="text" name="name" id="name" className='w-full p-2 rounded-lg bg-slate-300 ' />
            </div>
            <div>
                <label htmlFor="Ph_number" className='block mb-2 text-lg font-medium'>Phone Number</label>
                <input type="text" name="Ph_number" id="Ph_number" className='w-full p-2 rounded-lg bg-slate-300 ' />
            </div>
            <div>
                <label htmlFor="name" className='block mb-2 text-lg font-medium'>Address</label>
                <input type="text" name="name" id="name" className='w-full p-2 rounded-lg  bg-slate-300 ' />
            </div>
            <div>
                <label htmlFor="email" className='block mb-2 text-lg font-medium'>Email</label>
                <input type="email" name="email" id="email" className='w-full p-2 rounded-lg  bg-slate-300' />
            </div>

        <div className="button flex items-center justify-center mt-10">
            <Link href={"/menu"}>
            <button className="text-white bg-yellow-600 gap-2 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-4 inline-flex items-center">Save</button>
            </Link>
        </div>
        </form>
    </div>
    </div>
    
    </>
  )
}

export default dashboard