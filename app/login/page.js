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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 text-center bg-black/40">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to TakeZaika
        </h1>

        {/* Buttons container */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center w-full max-w-sm">
          {/* Google */}
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full bg-white border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200 transition"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.94 0 6.58 1.7 8.1 3.13l5.47-5.47C34.24 3.31 29.6 1 24 1 14.64 1 6.68 6.72 3.4 14.65l6.94 5.39C12.14 14.57 17.61 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.5 24.5c0-1.57-.14-3.08-.41-4.5H24v8.51h12.67c-.55 2.82-2.21 5.2-4.7 6.83l7.2 5.59C43.41 37.2 46.5 31.33 46.5 24.5z"
              />
              <path
                fill="#FBBC05"
                d="M10.34 28.39A14.47 14.47 0 019.5 24c0-1.52.27-2.98.77-4.34l-6.94-5.39C1.47 16.73.5 20.25.5 24c0 3.75.97 7.27 2.83 10.06l6.94-5.67z"
              />
              <path
                fill="#4285F4"
                d="M24 47.5c6.11 0 11.23-2.02 14.97-5.58l-7.2-5.59c-2.02 1.36-4.6 2.17-7.77 2.17-6.39 0-11.86-5.07-13.67-11.81l-6.94 5.67C6.68 41.28 14.64 47.5 24 47.5z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => signIn("linkedin")}
            className="flex items-center justify-center w-full bg-white border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200 transition"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0A66C2"
            >
              <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.356V9h3.414v1.561h.048c.476-.9 1.635-1.852 3.364-1.852 3.6 0 4.267 2.37 4.267 5.457v6.286zM5.337 7.433a2.063 2.063 0 112.063-2.063 2.063 2.063 0 01-2.063 2.063zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.21 24 24 23.23 24 22.278V1.723C24 .771 23.21 0 22.225 0z" />
            </svg>
            <span>Continue with LinkedIn</span>
          </button>


          {/* GitHub */}
          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center w-full bg-white border border-gray-400 rounded-lg shadow-md px-4 py-2 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-200 transition"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302...z" />
            </svg>
            <span>Continue with GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
