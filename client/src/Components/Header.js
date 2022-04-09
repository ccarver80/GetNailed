import React from "react";

export default function Header() {
  return (
    <div className="mx-5 flex h-[120px] bg-space  rounded-xl ">
      <h1 className="lg:text-8xl md:text-6xl text-5xl text-white mx-auto my-auto font-Shadows">
        Get Nailed
      </h1> <div className="absolute left-8 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        </div>
      <div className="absolute right-5 top-3">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mr-5 text-white "
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
       
        <p className="bg-red-500 text-center absolute right-12 text-white w-7 border-black border rounded-full">
          2
        </p>
      </div>
    </div>
  );
}
