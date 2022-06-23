import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function EditNail() {
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


  const updateNails = async () => {
    await fetch(`${api}/nails/${nailInfo[0].id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': "multipart/form-data"
      },
      body: JSON.stringify(nailInfo)
      
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  return (
    <div className="flex bg-space">
      {nailInfo ? (
        <div className="mx-auto flex flex-col my-10 rounded-xl p-10 bg-white">

        <form onSubmit={updateNails} className="flex flex-col text-2xl">

        <label className="font-bold" htmlFor="title">Edit Title</label>
          <input name='title' id="title" type='text' value={nailInfo[0].title} onChange={(e) => setNailInfo({...nailInfo[0], title: e.target.value})}
          
          className="mx-auto my-5 border-2 border-black font-bold text-xl" 
            
          />
          
          <img
            className="lg:h-96 md:h-56 rounded"
            src={`${api}/nails/${nailInfo[0].id}`}
          />
           <label className="font-bold mt-10" htmlFor="picUpload">
            Change Picture
          </label>
          <input id="picUpload" name="picture" type="file" />

        
          <label className="font-bold mt-10" htmlFor="description">Change Description</label>
          <textarea id="description" name="description" className="mx-auto my-5 border-2 border-black" defaultValue={nailInfo[0].description} />

            <button type="submit" className="bg-green-500 w-fit mx-auto p-5 rounded-xl">Submit Changes</button>

          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
