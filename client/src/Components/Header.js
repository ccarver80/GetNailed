import React from "react";

export default function Header() {
  return (
    <div className="w-screen h-[150px] bg-cyan-400 fixed drop-shadow-lg">
      <h1 className="text-6xl mt-3 text-shadow text-center font-Shadows">
        Get Nailed
      </h1>
      <h2 className="text-3xl mt-5 text-center">By Mandi Watson</h2>
      <div className="absolute right-5 top-3">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <p className="bg-red-500 text-center absolute right-8 text-white w-7 border-black border rounded-full">2</p>
      </div>
    </div>
  );
}
