import React from "react";
import { useNavigate } from "react-router-dom";


export default function Failure() {
  const nav = useNavigate();

  return(
    <div className="bg-space h-screen flex">
    <div className="flex flex-col text-2xl bg-white p-5 rounded mx-auto my-auto">
     <h1>I'm Sorry there was an issue with your payment, Please try again </h1>
     <button className="bg-blue-500 mt-5 p-3 rounded border border-black mx-auto" onClick={() => nav('/')}>Click here to go back to the home page</button>
    
    </div>
     
    </div>
  )
}