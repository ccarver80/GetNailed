import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import api from "../api";



export default function Admin() {

  const [storeData, setStoreData] = useState();
  const [message, setMessage] = useState()
  const [formData, setFormData] = useState({})
  const [picture, setPicture] = useState()

  useEffect(() => {
    const fetchStore = async () => {
      await fetch(api+"/nails")
        .then((res) => res.json())
        .then((data) => {
          setStoreData(data);
        });
    };
    fetchStore();
  }, [message]);

  const deleteNails = async (nailInfo) => {
    console.log("Deleting")
    await fetch(`${api}/nails/${nailInfo}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => window.location.reload())

  }


  const form = new FormData();

  const sendForm = async (e) => {
    e.preventDefault();
    setMessage("Please wait.....");

    //  This can be a loop function maybe?
    form.append("title", formData.title);
    form.append("picture", picture);
    form.append("description", formData.description);
    form.append("shape", formData.shape);
    form.append("length", formData.length);
    form.append("size", formData.size)
    form.append("price", formData.price);

    await fetch(api + "/nails", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data);
      });
      console.log( formData)
  };

const nav = useNavigate();

  return (
    <div className="flex flex-col bg-purple-400">
      <div className="bg-white rounded-xl shadow-xl shadow-black p-5 mx-auto my-auto flex flex-col">
        <h1 className="mx-auto text-4xl">Add to store</h1>
        <form
          onSubmit={sendForm}
          // action={`${api}/nails`}
          // method="post"
          // id="uploadForm"
          // encType="multipart/form-data"
          className="flex flex-col text-4xl"
        >
          <label htmlFor="title">Title</label>
          <input required   onChange={(e) => setFormData({ ...formData, title: e.target.value }) } className="border-2  border-black" name="title" id="title" />

          <label className="mt-5" htmlFor="picUpload">
            Upload picture
          </label>
          <input required id="picUpload" onChange={(e) => setPicture(e.target.files[0])} name="picture" type="file" />

          <label className="mt-5" htmlFor="description">
            Description
          </label>
          <textarea
            className="border-2 border-black"
            id="description"
            name="description"
            onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
          />

          <label htmlFor="shape">Shape</label>
          <select id="shape"   onChange={(e) =>
                setFormData({ ...formData, shape: e.target.value })
              } className="text-xl px-2 border border-black" name="shape">
               <option value="none" selected disabled hidden>
                Please pick a shape
              </option>
                <option id='Square'>Square</option>
                <option id="Almond">Almond</option>
                <option id="Coffin">Coffin</option>
            </select> 

            <label htmlFor="length">Length</label>
          <select id="length"   onChange={(e) =>
                setFormData({ ...formData, length: e.target.value })
              } className="text-xl px-2 border border-black" name="length">
               <option value="none" selected disabled hidden>
                Please pick a length
              </option>
                <option id='short'>Short</option>
                <option id="medium">Medium</option>
                <option id="long">Long</option>
            </select> 


          <label htmlFor="size">Size</label>
          <select  id="size"   onChange={(e) =>
                setFormData({ ...formData, size: e.target.value })
              } className="text-xl px-2 border border-black" name="size">
               <option value="none" selected disabled hidden>
                Please pick a size
              </option>
                <option id='x-small'>x-small</option>
                <option id="small">Small</option>
                <option id="medium">Medium</option>
                <option id="large">Large</option>
                <option id="x-large">X-large</option>
            </select> 

          <label htmlFor="price">Price</label>
          <div className="flex flex-row"><h1>$</h1>
          <input type="number"   onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              } name="price" id="price" placeholder="35.00" className="border border-black"/></div>

          <button
            className="bg-blue-400 w-fit mx-auto p-5 mt-5 rounded-xl"
            type="submit"
          >
            Submit
          </button>
          {message ? (<h1>{message}</h1>):""}
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
                  <div className=" mx-auto border border-black mb-2 mt-2 rounded p-2 content-around grid grid-cols-1 h-52 w-56">
                    <h1 className="text-2xl font-extrabold">
                      The "{nail.title}"
                    </h1>
                    <h2>{nail.description}</h2>
                    <h2>Shape: {nail.shape}</h2>
                    <h2>Length: {nail.length}</h2>
                    <h2>Size: {nail.size}</h2>
                    <h2>Price: ${nail.price}</h2>
                  </div>
                  <div className="flex flex-row justify-center"> 
                 <button onClick={() => {nav(`/edit-set/${nail.id}`)}} className="bg-green-400 w-fit p-5 rounded-xl">Edit</button>
                 <button onClick={() => {
                   deleteNails(nail.id)}} className="bg-red-500 w-fit p-5 rounded-xl">Delete</button></div>
                </div>
              ))
            : ""}
        </div>
      </div>



    </div>
  );
}
