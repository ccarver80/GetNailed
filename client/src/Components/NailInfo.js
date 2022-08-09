import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

import square from "../Style/imgs/Nail Shapes/Square.jpg";
import almond from "../Style/imgs/Nail Shapes/Almond.jpg";
import coffin from "../Style/imgs/Nail Shapes/Coffin.jpg";

export default function NailInfo(props) {

  const nav = useNavigate()
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
          <button onClick={() => localStorage.setItem(`nailSet${nailInfo[0].id}`, JSON.stringify(nailInfo))}>Add to Cart</button>
          <button onClick={() => nav(`/nail-set-custom/${params.id}`)}>Customize</button>

        </div>
      ) : (
        ""
      )}
    </div>
  );
}
