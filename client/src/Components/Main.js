import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Header from "./Header";

import Mandi from "../Style/imgs/mandi.jpg";

export default function About() {
  const [storeData, setStoreData] = useState();

  useEffect(() => {
    const fetchStore = async () => {
      await fetch(api + "/nails")
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
        <img
          className="lg:h-96 md:h-56 mr-5 mb-3 shadow-2xl shadow-purple-400 rounded-xl"
          alt="profile"
          src={Mandi}
        />
        <div className="mx-auto my-auto bg-lime-200 p-5 lg:w-[35rem] rounded-xl border-2 border-black shadow-purple-500 shadow-lg  text-center">
          <h1 className="text-4xl mx-auto my-auto">Hello, I'm Mandi Watson</h1>
          <p className="mx-auto my-auto text-justify text-xl mt-2">
            I am a professional nail technician in Forsyth Montana. I wanted to
            do press on nails so I can share my talent with everyone far and
            wide, now everyone can experience what its like to "Get Nailed By
            Mandi"
          </p>
        </div>
      </div>

      {/* ================================== Store =============================================== */}

      <div className=" rounded-xl shadow-purple-500 shadow-xl  text-center pt-5 bg-white border-2 border-black mt-10 mx-10">
        <div className="text-4xl text-center text-black mb-2">
          <h1>Ready To Ship</h1>
          <h2 className="text-xl">Each set is custom and unique</h2>
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
                  <div className="border border-black mb-2 mt-2 rounded ">
                  <h1 className="text-2xl">{nail.title}</h1>
                  <h2>{nail.description}</h2>
                  <h2>Size: {nail.size}</h2>
                  <h2>Shape: {nail.shape}</h2></div>
                  <button
                    onClick={() => {
                      nav(`/nail-set/${nail.id}`);
                    }}
                    className="bg-red-500 text-white p-5 rounded-2xl mx-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            : ""}
        </div>


        

  
      </div>      
      
      {/* CUSTOM A SET  */}


        <div className=" bg-white mt-5 border text-center  shadow-purple-500 shadow-xl border-black rounded-xl w-1/2 mx-auto text-2xl mb-5 p-5">
          <h1 className="text-4xl">Customize A Set</h1>
          <div className=" border-t-2 border-black">
            <form className="flex flex-col mt-5 ">
              <label htmlFor="name">Name:</label>
              <input
                placeholder="Jane Doe"
                id="name"
                className="border border-black  w-fit mx-auto"
              />
              <label className="mt-5" htmlFor="name">Email:</label>
              <input
                placeholder="jdoe1987@gmail.com"
                id="email"
                className="border border-black  w-fit mx-auto"
              />

              <label className="mt-5" htmlFor="design">
                Pattern or style you like from above
              </label>
              <select className="w-fit mx-auto border border-black mt-2">
                <option>Molly</option>
                <option>Mandi</option>
                <option>Jessica</option>
              </select>

              <label className="mt-5" htmlFor="picUpload">
            Or upload your own picture for reference
          </label>
          <input className="border border-black" id="picUpload" name="picture" type="file" />


              <label className="mt-5" htmlFor="shape">
                Shape
              </label>
              <select className="w-fit mx-auto border border-black" id="shape">
                <option>Coffin</option>
                <option>Almond</option>
                <option>Square</option>
              </select>

              <label className="mt-5" htmlFor="length">
                Length
              </label>
              <select className="w-fit mx-auto border border-black">
                <option>X-Small</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
              </select>

              <h1 className="mt-5">Size</h1>
              <div className="flex flex-row mx-auto">
                <label className="text-xl">I don't know my size</label>
                <input
                  className="ml-2 border border-black h-5 w-5"
                  type="checkbox"
                />
              </div>

              <div className="flex flex-row justify-between mt-5">
                <h1 className="my-auto">Right hand</h1>

                <div className="flex flex-col">
                  <label>Thumb</label>
                  <input placeholder="0" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Index</label>
                  <input placeholder="5" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Middle</label>
                  <input placeholder="4" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Ring</label>
                  <input placeholder="5" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Pinky</label>
                  <input placeholder="8" className="border border-black w-10 mx-auto" />
                </div>
              </div>

              <div className="flex flex-row border-t-2 border-black justify-between mt-2">
                <h1 className="my-auto">Left Hand</h1>
                <div className="flex flex-col">
                  <label>Thumb</label>
                  <input placeholder="1" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Index</label>
                  <input placeholder="6" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Middle</label>
                  <input placeholder="4" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Ring</label>
                  <input placeholder="5" className="border border-black w-10 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <label>Pinky</label>
                  <input placeholder="8" className="border border-black w-10 mx-auto" />
                </div>
              </div>

              <label className="mt-5">
                Special Order Requests
              </label>
              <textarea
                placeholder="Freestyle with neon tyedye and flowers maybe white accent? I like watercolors or traditional tyedye "
                className="border border-black w-full mx-auto h-52 text-2xl"
              ></textarea>
            </form>
          </div>
        </div>
    </div>
  );
}
