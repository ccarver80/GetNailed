import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api'
import Header from "./Header";


import Mandi from "../Style/imgs/mandi.jpg";


export default function About() {
  const [storeData, setStoreData] = useState();

  useEffect(() => {
    const fetchStore = async () => {
      await fetch(api+"/nails")
        .then((res) => res.json())
        .then((data) => {
          setStoreData(data);
        });
    };
    fetchStore();
  }, []);

 const nav = useNavigate(); 


  return (
    <div className=" bg-space">
      <Header />
      {/* ============================== ABOUT ME ====================================== */}

      <div className="lg:flex md:flex block rounded-xl bg-transparent p-5 mx-10 mt-10 ">
        <img className="lg:h-96 md:h-56 mr-5 mb-3 shadow-2xl shadow-purple-400 rounded-xl" alt="profile" src={Mandi} />
        <div className="mx-auto my-auto bg-lime-200 p-5 lg:w-[35rem] rounded-xl border-2 border-black shadow-purple-500 shadow-lg  text-center">
          <h1 className="text-4xl mx-auto my-auto">Hello, I'm Mandi Watson</h1>
          <p className="mx-auto my-auto text-justify text-xl mt-2">
            I am a professional nail technician in Forsyth Montana. I wanted to
            do press on nails so I can share my talent with everyone far and
            wide, now everyone can experience what its like to "Get Nailed By Mandi"
          </p>
        </div>
      </div>

      {/* ================================== Store =============================================== */}

      <div className=" rounded-xl shadow-purple-500 shadow-xl  text-center pt-5 bg-white border-2 border-black mt-10 mx-10">
        <div className="text-4xl text-center text-black mb-2">
          <h1>Store</h1>
          <h2 className="text-2xl">
            All sizes and shapes available to purchase
          </h2>
          <h2 className="text-xl">
              All nails pictured are "coffin" shaped
          </h2>
        </div>

        <div className="justify-between flex flex-wrap">
          {storeData
            ? storeData.map((nail) => (
                <div className="mx-auto flex flex-col m-5">
                  <img
                    className="lg:h-96 md:h-56 rounded"
                    alt="press-on nail"
                    src={`${api}/nails/${nail.id}`}
                  />
                  <h1 className="text-2xl">{nail.title}</h1>
                  <button onClick={() => {nav(`/nail-set/${nail.id}`)}} className="bg-red-500 text-white p-5 rounded-2xl mx-auto">
                    Sizes and Options
                  </button>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
