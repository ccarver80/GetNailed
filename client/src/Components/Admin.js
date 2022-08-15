import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import api from "../api";



export default function Admin() {

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

  const deleteNails = async (nailInfo) => {
    await fetch(`${api}/nails/${nailInfo}`, {
      method: "DELETE",
    })

  }

const nav = useNavigate();

  return (
    <div className="flex flex-col bg-purple-400">
      <div className="bg-white rounded-xl shadow-xl shadow-black p-5 mx-auto my-auto flex flex-col">
        <h1 className="mx-auto text-4xl">Add to store</h1>
        <form
          action={`${api}/nails`}
          method="post"
          id="uploadForm"
          encType="multipart/form-data"
          className="flex flex-col text-4xl"
        >
          <label htmlFor="title">Title</label>
          <input className="border-2 border-black" name="title" id="title" />

          <label className="mt-5" htmlFor="picUpload">
            Upload picture
          </label>
          <input id="picUpload" name="picture" type="file" />

          <label className="mt-5" htmlFor="description">
            Description
          </label>
          <textarea
            className="border-2 border-black"
            id="description"
            name="description"
          />

          <label htmlFor="shape">Shape</label>
          <select id="shape" className="text-xl px-2 border border-black" name="shape">
                <option id='Square'>Square</option>
                <option id="Almond">Almond</option>
                <option id="Coffin">Coffin</option>
            </select> 

            <label htmlFor="length">Length</label>
          <select id="length" className="text-xl px-2 border border-black" name="length">
                <option id='short'>Short</option>
                <option id="medium">Medium</option>
                <option id="long">Long</option>
            </select> 


          <label htmlFor="size">Size</label>
          <select id="size" className="text-xl px-2 border border-black" name="size">
                <option id='x-small'>x-small</option>
                <option id="small">Small</option>
                <option id="medium">Medium</option>
                <option id="large">Large</option>
                <option id="x-large">X-large</option>
            </select> 

          <label htmlFor="price">Price</label>
          <div className="flex flex-row"><h1>$</h1>
          <input type="number" name="price" id="price" placeholder="35.00" className="border border-black"/></div>

          <button
            className="bg-blue-400 w-fit mx-auto p-5 mt-5 rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>



      <div className=" rounded-xl shadow-purple-500 shadow-xl mb-10 text-center pt-5 bg-white border-2 border-black mt-10 mx-10">
        <div className="text-4xl text-center text-black mb-2">
          <h1>Store</h1>
          
          
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
                  <div className="flex flex-row justify-between"> 
                 <button onClick={() => {nav(`/edit-set/${nail.id}`)}} className="bg-green-400 w-fit p-5 rounded-xl">Edit</button>
                 <button onClick={async() => {
                   deleteNails(nail.id)}} className="bg-red-500 w-fit p-5 rounded-xl">Delete</button></div>
                </div>
              ))
            : ""}
        </div>
      </div>



    </div>
  );
}
