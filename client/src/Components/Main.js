import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Header from "./Header";

import Mandi from "../Style/imgs/mandi.jpg";
import Sizing from "../Style/imgs/Sizing.jpg";

export default function About() {
  const [storeData, setStoreData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [cart, setCartItem] = useState([]);
  const [formData, setFormData] = useState()

  
  const form = new FormData();
 


  useEffect(() => {
    const fetchStore = async () => {
      await fetch(api + "/nails")
        .then((res) => res.json())
        .then((data) => {
          setStoreData(data);
        });
    };
    fetchStore();
    console.log(form);
  }, []);

  // const sendForm = async() => {
  //   await fetch(`${api}/nail-custom`, {
  //     method: 'POST',
  //     body: formData,
  //   })
  // }

  return (
    <div className=" bg-space">
      <Header
        cart={cart}
        setCartItem={setCartItem}
        setStoreData={setStoreData}
        storeData={storeData}
      />
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
        <div className="flex flex-col md:grid md:grid-cols-3">
          <a href="#customize" className="mx-auto md:ml-5">
            <button className="bg-red-500 text-white p-5 w-fit rounded-2xl">
              Click here to customize a set
            </button>
          </a>
          <div className="text-4xl text-center flex flex-col text-black mb-2">
            <h1>Ready To Ship</h1>
            <h2 className="text-xl">Each set is custom and unique</h2>
          </div>
          <h1>Filter by:</h1>
        </div>
        <div className="justify-between flex flex-wrap">
          {storeData
            ? storeData.map((nail) => (
                <div className="mx-auto flex flex-col m-5">
                  <img
                    className="lg:h-96 lg:w-56 md:h-56 mx-auto rounded shadow-lg shadow-black mb-5"
                    alt="press-on nail"
                    src={`${api}/nails/${nail.id}`}
                  />
                  <div className="border border-black mb-2 mt-2 rounded p-2 content-around grid grid-cols-1 h-52 w-56">
                    <h1 className="text-2xl font-extrabold">
                      The "{nail.title}"
                    </h1>
                    <h2>{nail.description}</h2>
                    <h2>Size: {nail.size}</h2>
                    <h2>Shape: {nail.shape}</h2>
                  </div>
                  <button
                    onClick={() => {
                      setCartItem((current) => [...cart, nail]);
                      setStoreData([
                        ...storeData.filter((data) => data.id != nail.id),
                      ]);
                    }}
                    className="bg-red-500 text-white p-5 rounded-2xl mx-auto"
                  >
                    Add to Cart
                    <h1>${nail.price}</h1>
                  </button>
                </div>
              ))
            : ""}
        </div>
      </div>

      {/* CUSTOM A SET  */}

      <div
        id="customize"
        className=" bg-white mt-10 border text-center  shadow-purple-500 shadow-xl border-black rounded-xl md:w-1/2 mx-auto text-2xl mb-5 p-5"
      >
        <h1 className="text-4xl">Customize A Set</h1>
        <div className=" border-t-2 border-black">
          <form 
          action={`${api}/nail-custom`}
          method="post"
          id="uploadForm"
          encType="multipart/form-data"
          className="flex flex-col mt-5 ">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="Jane"
              id="firstName"
              name="firstName"
              className="border border-black  mx-auto"
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Doe"
              id="lastName"
              name="lastName"
              className="border border-black  mx-auto"
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            
            />
            <label className="mt-5" htmlFor="name">
              Email:
            </label>
            <input
              placeholder="jdoe1987@gmail.com"
              id="email"
              name="email"
              className="border border-black  w-fit mx-auto"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <div className="border border-black flex flex-col mt-5 p-5">
              <label className="mt-5" htmlFor="design">
                Pattern or style you like from above
              </label>
              <select id="design" className="w-fit mx-auto border border-black mt-2" name="style1">
                {storeData ? (
                  storeData.map(item => {
                    return(
                      <option id={item.id}>{item.title}</option>
                    )
                  })
                ) : ""}
              </select>
              <h1 className="text-2xl font-extrabold mt-5">AND/OR</h1>
              <label className="mt-5" htmlFor="picUpload">
                Upload your own picture for reference
              </label>
              <input
                className="border border-black"
                id="picUpload"
                name="picture"
                type="file"
                onChange={(e) => {
                  form.append('image', e.target.files[0]);
                  console.log(form)
                  
                  }}
              />
            </div>

            <label className="mt-5 font-extrabold text-2xl" htmlFor="shape">
              Shape
            </label>
            <select className="w-fit mx-auto border border-black" name="shape">
              <option id="coffin">Coffin</option>
              <option id="almond">Almond</option>
              <option id="square">Square</option>
            </select>

            <label className="mt-5 font-extrabold text-2xl" htmlFor="length">
              Length
            </label>
            <select className="w-fit mx-auto border border-black" name="length">
              <option>X-Small</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>X-Large</option>
            </select>

            <h1 className="mt-5 font-extrabold text-2xl">Size</h1>
            <div className="flex border border-black p-2  flex-col mt-5">
              {/* Size input */}

              <div className="flex flex-row justify-between mt-2">
                <h1 className="my-auto">Right hand</h1>

                <div className="flex flex-col">
                  <label>Thumb</label>
                  <input
                    name="rt"
                    placeholder="0"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Index</label>
                  <input
                    name="ri"
                    placeholder="5"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Middle</label>
                  <input
                    name="rm"
                    placeholder="4"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Ring</label>
                  <input
                    name="rr"
                    placeholder="5"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Pinky</label>
                  <input
                    name="rp"
                    placeholder="8"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-row border-t-2 border-black justify-between mt-2">
                <h1 className="my-auto">Left Hand</h1>
                <div className="flex flex-col">
                  <label>Thumb</label>
                  <input
                    name="lt"
                    placeholder="1"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Index</label>
                  <input
                    name="li"
                    placeholder="6"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Middle</label>
                  <input
                    name="lm"
                    placeholder="4"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Ring</label>
                  <input
                    name="lr"
                    placeholder="5"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Pinky</label>
                  <input
                    name="lp"
                    placeholder="8"
                    className="border border-black w-10 mx-auto"
                  />
                </div>
              </div>

              <>
                <button
                  className="bg-red-500 text-white active:bg-pink-600 w-fit mx-auto p-3 mt-5 font-bold uppercase text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none  transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Show sizing chart
                </button>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">Sizing</h3>
                            <button
                              className=""
                              onClick={() => setShowModal(false)}
                            >
                              <span className="text-slate-500 text-4xl">×</span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <img
                              className=" mr-5 mb-3 shadow-2xl shadow-purple-400 rounded-xl"
                              alt="profile"
                              src={Sizing}
                            />

                            <table className="mx-auto text-4xl">
                              <tr>
                                <td className="border border-black p-2">
                                  Size
                                </td>
                                <td className="border border-black p-2">0</td>
                                <td className="border border-black p-2">1</td>
                                <td className="border border-black p-2">2</td>
                                <td className="border border-black p-2">3</td>
                                <td className="border border-black p-2">4</td>
                                <td className="border border-black p-2">5</td>
                                <td className="border border-black p-2">6</td>
                                <td className="border border-black p-2">7</td>
                                <td className="border border-black p-2">8</td>
                                <td className="border border-black p-2">9</td>
                              </tr>

                              <tr>
                                <td className="border border-black">mm</td>
                                <td className="border border-black p-2">18</td>
                                <td className="border border-black p-2">16</td>
                                <td className="border border-black p-2">15</td>
                                <td className="border border-black p-2">14</td>
                                <td className="border border-black p-2">13</td>
                                <td className="border border-black p-2">12</td>
                                <td className="border border-black p-2">11</td>
                                <td className="border border-black p-2">10</td>
                                <td className="border border-black p-2">9</td>
                                <td className="border border-black p-2">8</td>
                              </tr>
                            </table>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>
            </div>
            <label className="mt-5">Special Order Requests:</label>
            <textarea
              name="specialRequests"
              placeholder="Freestyle with neon tyedye and flowers maybe white accent? I like watercolors or traditional tyedye "
              className="border border-black w-full mx-auto h-52 text-2xl"
            ></textarea>
            <button type="submit"
                    onClick={() => {
                      setCartItem((current) => [...cart, {title: "Custom Order", price: 50} ]);
                      
                    }}
                    className="bg-red-500 text-white p-5 rounded-2xl mx-auto"
                  >
                    Add to Cart
                    <h1>$50</h1>
                  </button>
          </form>
        </div>
      </div>
    </div>
  );
}
