import React from "react";
import { useNavigate } from "react-router-dom";


export default function Success() {
  const nav = useNavigate();

  return(
    <div className="bg-space h-screen flex">
    <div className="flex flex-col text-2xl bg-white p-5 rounded mx-auto my-auto">
     <h1>You have successfully completed your payment! </h1>
     <button className="bg-blue-500 mt-5 p-3 rounded border border-black mx-auto" onClick={() => nav('/')}>Click here to go back to the home page</button>
    
    </div>
     
    </div>
  )
}