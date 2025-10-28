"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
        src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 sm:gap-10 px-4 text-center bg-black/40">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to our login page
        </h1>

        {/* Buttons container */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center w-full max-w-sm">
          {/* Google */}
          <button className="flex items-center justify-center w-full bg-slate-50 border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
            >
              <g fill="none">
                <path
                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                  fill="#FBBC05"
                />
                <path
                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                  fill="#EB4335"
                />
                <path
                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                  fill="#34A853"
                />
                <path
                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                  fill="#4285F4"
                />
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* LinkedIn */}
          <button className="flex items-center justify-center w-full bg-slate-50 border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -2 44 44"
            >
              <path
                d="M746,305 L736.2754,305 L736.2754,290.9384..."
                fill="#007EBB"
              />
            </svg>
            <span>Continue with LinkedIn</span>
          </button>

          {/* Twitter */}
          <button className="flex items-center justify-center w-full bg-slate-50 border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -4 48 48"
            >
              <path d="M348,168.735283..." fill="#00AAEC" />
            </svg>
            <span>Continue with Twitter</span>
          </button>

          {/* Facebook */}
          <button className="flex items-center justify-center w-full bg-slate-50 border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="M225.638355,208 L202.649232..." fill="#4460A0" />
            </svg>
            <span>Continue with Facebook</span>
          </button>

          {/* GitHub */}
          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center w-full bg-slate-50 border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 73 73"
            >
              <rect
                stroke="#000000"
                strokeWidth="2"
                fill="#000000"
                width="71"
                height="71"
                rx="14"
              />
            </svg>
            <span>Continue with GitHub</span>
          </button>

          {/* Apple */}
          <button className="flex items-center justify-center w-full bg-slate-50 border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1.5 0 20 20"
            >
              <path d="M57.5708873,7282.19296..." fill="#000000" />
            </svg>
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
