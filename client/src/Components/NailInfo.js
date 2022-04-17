import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

import square from "../Style/imgs/Nail Shapes/Square.jpg";
import almond from "../Style/imgs/Nail Shapes/Almond.jpg";
import coffin from "../Style/imgs/Nail Shapes/Coffin.jpg";

export default function NailInfo(props) {
  const [nailInfo, setNailInfo] = useState();

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
    <div className="h-screen flex bg-space">
      {nailInfo ? (
        <div className="mx-auto flex flex-col my-auto p-10 bg-white">
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

           <label for="square"> <img src={square} /></label>
           <input className="mx-auto my-2" type="radio" name="nailShape" value="square"/>
           </div>

           <div className="flex flex-col">
           <label for="almond"> <img src={almond} /></label>
           <input className="mx-auto my-2" type="radio" name="nailShape" value="almond"/>
           </div>

           <div className="flex flex-col">
           <label for="coffin"> <img src={coffin} /></label>
           <input className="mx-auto my-2" type="radio" name="nailShape" value="coffin"/>
           </div>

          </div>
        <label className="flex flex-col mx-auto my-5 font-bold" for="size">Pick a size</label>
        <select name="size">
            <option>Extra small</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
        </select>

</form>

        </div>
      ) : (
        ""
      )}
    </div>
  );
}
