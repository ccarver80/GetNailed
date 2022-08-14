import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";


import square from "../Style/imgs/Nail Shapes/Square.jpg";
import almond from "../Style/imgs/Nail Shapes/Almond.jpg";
import coffin from "../Style/imgs/Nail Shapes/Coffin.jpg";

export default function Customize(){

    const [nailInfo, setNailInfo] = useState();
  const [coffinTrue, setCoffinTrue] = useState(false)
  const [squareTrue, setSquareTrue] = useState(false)

  const params = useParams();
  useEffect(() => {
    const fetchNails = async () => {
      await fetch(api + "/nail-set/" + params.id)
        .then((res) => res.json())
        .then((data) => setNailInfo(data));
    };

    fetchNails();
  }, []);
    return (
        <div className="flex bg-space">
          {nailInfo ? (
            <div className="mx-auto flex flex-col my-10 rounded-xl p-10 bg-white">
              <h1 className="mx-auto my-5 font-bold text-xl">
                {nailInfo[0].title}
              </h1>
              <img
                className="lg:h-96 md:h-56 rounded"
                src={`${api}/nails/${nailInfo[0].id}`}
              />
              <p className="mx-auto my-5">{nailInfo[0].description}</p>
              <h2 className="mx-auto my-5 font-bold text-xl">Pick a shape</h2>
    
              <form>
              <div className=" flex justify-between">
              <div className="flex flex-col">
    
               <label htmlFor="square"> <img src={square} /></label>
               <input className="mx-auto my-2" type="radio" name="nailShape" onChange={() => {setSquareTrue(true); setCoffinTrue(false)}} value="square"/>
               </div>
    
               <div className="flex flex-col">
               <label htmlFor="almond"> <img src={almond} /></label>
               <input className="mx-auto my-2" type="radio" name="nailShape" onChange={() => {setSquareTrue(false); setCoffinTrue(false)}} value="almond"/>
               </div>
    
               <div className="flex flex-col">
               <label htmlFor="coffin"> <img src={coffin} /></label>
               <input className="mx-auto my-2" type="radio" name="nailShape" onChange={() => {setSquareTrue(false); setCoffinTrue(true)}} value="coffin"/> 
              
               </div>
    
                  
    
                    
    
              
    
              </div>
              
                {coffinTrue ? ( <> <label className="flex flex-col mx-auto my-5 font-bold" htmlFor="shapesize">Shape Length</label>
            <select id="shapeLength" className="text-xl px-2" name="shapesize">
                <option id="medium">Medium</option>
                <option id="long">Long</option>
            </select> </> ) : ""
           
                }
    
                {squareTrue ? ( <> <label className="flex flex-col mx-auto my-5 font-bold" htmlFor="shapesize">Shape Length</label>
            <select id="shapeLength" className="text-xl px-2" name="shapesize">
                <option id="short">Short</option>
                <option id="medium">Medium</option>
            </select> </> ) : ""
           
                }
          
                
            
            
             
                
    
    
            <label className="flex flex-col mx-auto my-5 font-bold" htmlFor="size">Pick a size, <em>Dont know your size? <a>click here</a></em></label>
            <select className="text-xl px-2" name="size">
                <option>Extra small</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
                
            <textarea type='text' />
    
    </form>
    
            </div>
          ) : (
            ""
          )}
        </div>
      );
}