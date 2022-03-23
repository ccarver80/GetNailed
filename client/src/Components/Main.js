import React from "react";

import Header from "./Header";
import ImageGallery from 'react-image-gallery'

import Mandi from "../Style/imgs/mandi.jpg";
import images from './Imgs'

export default function About() {
  return (
    <>
      <Header />
      {/* ============================== ABOUT ME ====================================== */}

      <div className="lg:flex md:flex block shadow-purple-500 shadow-lg bg-slate-400 p-5 mx-3 mt-7 ">
        <img className="lg:h-96 md:h-56 mr-5 mb-3" src={Mandi} />
        <div className="mx-auto my-auto bg-lime-50 p-5 lg:w-[35rem]  shadow-purple-500 shadow-md  text-center">
          <h1 className="text-4xl mx-auto my-auto">Hello, I'm Mandi Watson</h1>
          <p className="mx-auto my-auto text-justify text-xl mt-2">
            I have been doing nails in Forsyth Montana for 11 years. I have recently started the venture of Press On Nails so the 
            rest of the world can "Get Nailed By Mandi"
          </p>
        </div>
      </div>

      {/* ================================ Photo Gallery ======================================== */}
        <div className="flex shadow-purple-500 shadow-lg bg-slate-700 p-10 mt-5 mx-5 ">
        <div className="mx-auto sm:w-auto w-[200px]">
        <h1 className="text-4xl text-center text-white mb-2">Gallery</h1>
        <ImageGallery items={images}  />
        </div>
        </div>

        <div className="text-center h-screen bg-slate-700 mt-5 mx-5">
          <h1 className= "text-4xl text-white">Store</h1>
        </div>
    </>
  );
}
