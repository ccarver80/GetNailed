import React, { useEffect, useState } from "react";

import Header from "./Header";
import ImageGallery from 'react-image-gallery'

import Mandi from "../Style/imgs/mandi.jpg";
import images from './Imgs'

export default function About() {

  const [storeData, setStoreData] = useState()

  useEffect(() => {
    const fetchStore = async() =>{
      await fetch('http://localhost:5000/nails')
      .then((res) => res.json())
      .then((data) => {setStoreData(data)})
    }
    fetchStore()
  }, [])

    
  return (
    <div className=" bg-white">
      <Header />
      {/* ============================== ABOUT ME ====================================== */}

      <div className="lg:flex md:flex block shadow-purple-500 shadow-lg bg-purple-200 p-5 mx-3 mt-10 ">
        <img className="lg:h-96 md:h-56 mr-5 mb-3" alt="profile" src={Mandi} />
        <div className="mx-auto my-auto bg-lime-50 p-5 lg:w-[35rem] rounded-xl shadow-purple-500 shadow-md  text-center">
          <h1 className="text-4xl mx-auto my-auto">Hello, I'm Mandi Watson</h1>
          <p className="mx-auto my-auto text-justify text-xl mt-2">
            I have been doing nails in Forsyth Montana for 11 years. I have recently started the venture of Press On Nails so the 
            rest of the world can "Get Nailed By Mandi"
          </p>
        </div>
      </div>

      {/* ================================ Photo Gallery ======================================== */}
        <div className="flex shadow-purple-500 shadow-lg bg-purple-200 p-10 mt-10 mx-5 ">
        <div className="mx-auto sm:w-auto w-[200px]">
        <h1 className="text-4xl text-center text-black mb-2">Gallery</h1>
        <ImageGallery items={images}  />
        </div>
        </div>


      {/* ================================== Store =============================================== */}

      
        <div className="   text-center pt-5 bg-purple-200 mt-10 mx-5">
            <div className="text-4xl text-center text-black mb-2">
            <h1>Store</h1>
            <h2 className="text-2xl">All sizes and shapes avalible to purchase</h2>
            </div>

              <div className="justify-between flex flex-wrap">

              { storeData ? 
                storeData.map((nail) => (
         <div className="mx-auto flex flex-col m-5">
           <img className="lg:h-96 md:h-56 rounded" alt="press-on nail" src={`http://localhost:5000/nails/${nail.id}`} />  
            <h1 className="text-2xl">{nail.title}</h1>
            <button className="bg-red-500 text-white p-5 rounded-2xl mx-auto">Sizes and Options</button>
          </div> 
              
                ))
                : ''
              }
       
        
        </div>

        </div>
    </div>
  );
}
