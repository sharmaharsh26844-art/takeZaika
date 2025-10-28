import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#B32B3C] ">
  <div className="">
    <div className='flex gap-2 justify-center items-center '>
      <h1 className="text-2xl font-bold">TakeZaika</h1>
      <h2 className="mt-2 text-xl "> -- “Zaika in Every Bite”. Authentic North Indian flavors delivered hot & fresh.</h2>
    </div>

    {/* Contact */}
    <div className="text-sm flex items-center justify-center gap-3">
      <span>📞 +91 8437142580</span>
      <span>✉ harshh.2901@gmail.com</span>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-0.5 text-center text-lg">
    Copyright &copy; {currentYear}  TakeZaika. All rights reserved. Privacy Policy | Terms of Service
  </div>
</footer>
  )
}

export default Footer