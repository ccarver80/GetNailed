import React, { useEffect, useState } from "react"; 
import api from "../api";
import Header from "./Header";

import Mandi from "../Style/imgs/mandi.jpg";
import Sizing from "../Style/imgs/Sizing.jpg";


export default function About() {
  const [storeData, setStoreData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [cart, setCartItem] = useState([]);
  const [formData, setFormData] = useState({
    shape: "none selected",
    length: "none selected",
    rt: "N/A",
    ri: "N/A",
    rm: "N/A",
    rr: "N/A",
    rp: "N/A",
    lt: "N/A",
    li: "N/A",
    lm: "N/A",
    lr: "N/A",
    lp: "N/A",
    specialRequests: "none selected",
  });
  const [pictureModal, setPictureModal] = useState(false);
  const [pictureModalId, setPictureModalId] = useState()
  const [message, setMessage] = useState();
  const [imageMessage, setImageMessage] = useState(false);
  const [cartID, setCartID] = useState([])

  const form = new FormData();

  useEffect(() => {
    const fetchStore = async () => {
      await fetch(api + "/nails/")
        .then((res) => res.json())
        .then((data) => {
          setStoreData(data);
        });
    };
    fetchStore();
  }, []);

  const sendForm = async (e) => {
    e.preventDefault();
    setMessage("Please wait.....");

    //  This can be a loop function maybe?
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("style1", formData.style1);
    //  form.append("style2", picture)
    form.append("shape", formData.shape);
    form.append("length", formData.length);
    form.append("rt", formData.rt);
    form.append("ri", formData.ri);
    form.append("rm", formData.rm);
    form.append("rr", formData.rr);
    form.append("rp", formData.rp);
    form.append("lt", formData.lt);
    form.append("li", formData.li);
    form.append("lm", formData.lm);
    form.append("lr", formData.lr);
    form.append("lp", formData.lp);
    form.append("specialRequests", formData.specialRequests);

    await fetch(api + "/nail-custom", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data.err);
      });
  };

  return (
    <div className=" bg-space">
      <Header
        cart={cart}
        setCartItem={setCartItem}
        setStoreData={setStoreData}
        storeData={storeData}
        cartID={cartID}
        setCartID={setCartID}
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

      <div className=" rounded-xl shadow-purple-500 shadow-xl  text-center pt-5  bg-black/60 text-white border-2 border-black mt-10 mx-10">
        <div className="flex flex-col md:grid md:grid-cols-3">
          <a href="#customize" className="mx-auto md:ml-5">
            <button className="bg-red-500 text-white p-5 w-fit rounded-2xl">
              Click here to customize a set
            </button>
          </a>
          <div className="text-4xl text-center flex flex-col text-white mb-2">
            <h1>Ready To Ship</h1>
            <h2 className="text-xl">Each set is custom and unique</h2>
          </div>
          <h1>Filter by:</h1>
        </div>
        <div className="justify-between flex flex-wrap">
          {storeData
            ? storeData.map((nail) => (
                <div className="mx-auto flex flex-col m-5">
                <h1 className="text-2xl font-extrabold">
                      The "{nail.title}"
                    </h1>

                  
                  <div className="relative">
                  <img
                  onMouseEnter={() => {
                    document.getElementById(`enlarge-${nail.id}`).style.display="block"
                  }}
                  onMouseLeave={() => {
                    document.getElementById(`enlarge-${nail.id}`).style.display="none"
                  }}
                  onClick={()=> {
                    setPictureModal(true);
                    setPictureModalId(nail.id)}}
                    className="lg:h-56 mx-auto rounded shadow-lg hover:shadow-2xl hover:shadow-white hover:opacity-75 border-2 border-white shadow-black"
                    alt="press-on nail"
                    src={`${api}/nails/${nail.id}`}
                    
                  />
                
                  <p className="hidden absolute font-bold text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id={`enlarge-${nail.id}`}>Click image to enlarge</p>
              </div>

                  {/* PICTURE MODAL */}
                  {pictureModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-5xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                           
                            <button
                              className=""
                              onClick={() => setPictureModal(false)}
                            >
                              <span className="text-slate-500 text-4xl">×</span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <img
                              className=""
                              alt="nailset"
                              src={`${api}/nails/${pictureModalId}`}
                            />

                       
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => {setPictureModal(false); setPictureModalId()}}
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
                  <div className=" mx-auto border-4 border-white mb-2 mt-2 rounded-3xl p-2 content-around grid grid-cols-1 h-52 w-56">
                   
                    <h2>{nail.description}</h2>
                    <h2>Shape: {nail.shape}</h2>
                    <h2>Length: {nail.length}</h2>
                    <h2>Size: {nail.size}</h2>
                  </div>
                  <button
                    onClick={() => {
                      setCartItem((current) => [...cart, nail]);
                      setCartID((current => [...cartID, {id: nail.id, quantity: 1}]))
                      setStoreData([
                        ...storeData.filter((data) => data.id !== nail.id),
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
        <h1>* Denotes required field</h1>
          <form onSubmit={sendForm} className="flex flex-col mt-5 ">
            
            <label htmlFor="firstName">* First Name:</label>
            <input
              required
              placeholder="Jane"
              id="firstName"
              name="firstName"
              className="border border-black  mx-auto"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <label htmlFor="lastName">* Last Name:</label>
            <input
              required
              placeholder="Doe"
              id="lastName"
              name="lastName"
              className="border border-black  mx-auto"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <label className="mt-5" htmlFor="name">
              * Email:    
            </label>
            <input
              required
              type="email"
              placeholder="jdoe1987@gmail.com"
              id="email"
              name="email"
              className="border border-black  w-fit mx-auto"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <h2 className="text-lg">Please check to make sure email is correct</h2>
            <div className="border border-black flex flex-col mt-5 p-5">
              <label className="mt-5" htmlFor="design">
                * Pattern or style you like from above
              </label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Own Image") {
                    setImageMessage(true);
                  } else {
                    setImageMessage(false);
                  }
                  setFormData({ ...formData, style1: e.target.value });
                }}
                id="design"
                className="w-fit mx-auto border border-black mt-2"
                name="style1"
              >
                <option value="">
                  Please select a nail set
                </option>
                <option value="Own Image">
                  I have my own design I would like to use
                </option>
                {storeData
                  ? storeData.map((item) => {
                      return (
                        <option className=" text-center" value={item.id}>
                          The "{item.title}"
                        </option>
                      );
                    })
                  : ""}
              </select>
              {imageMessage ? (
                <h1 className="mx-auto font-bold mt-5">
                  **With this option I will be in contact to learn more about
                  your own design**
                </h1>
              ) : (
                ""
              )}
              {/* <h1 className="text-2xl font-extrabold mt-5">AND/OR</h1>
              <label className="mt-5" htmlFor="picUpload">
                Upload your own picture for reference
              </label>
              <input
                
                className="border border-black"
                id="picUpload"
                name="picture"
                type="file"
                onChange={(e) => setPicture(e.target.files[0])}
              /> */}
            </div>

            <label className="mt-5 font-extrabold text-2xl" htmlFor="shape">
              Shape
            </label>
            <select
              onChange={(e) =>
                setFormData({ ...formData, shape: e.target.value })
              }
              className="w-fit mx-auto border border-black"
              name="shape"
            >
              <option value="none" selected disabled hidden>
                Please pick a shape
              </option>
              <option id="coffin">Coffin</option>
              <option id="almond">Almond</option>
              <option id="square">Square</option>
            </select>

            <label className="mt-5 font-extrabold text-2xl" htmlFor="length">
              Length
            </label>
            <select
              onChange={(e) =>
                setFormData({ ...formData, length: e.target.value })
              }
              className="w-fit mx-auto border border-black"
              name="length"
            >
              <option value="none" selected disabled hidden>
                Please pick a length
              </option>
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
                    onChange={(e) =>
                      setFormData({ ...formData, rt: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Index</label>
                  <input
                    name="ri"
                    placeholder="5"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, ri: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Middle</label>
                  <input
                    name="rm"
                    placeholder="4"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, rm: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Ring</label>
                  <input
                    name="rr"
                    placeholder="5"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, rr: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Pinky</label>
                  <input
                    name="rp"
                    placeholder="8"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, rp: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, lt: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Index</label>
                  <input
                    name="li"
                    placeholder="6"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, li: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Middle</label>
                  <input
                    name="lm"
                    placeholder="4"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, lm: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Ring</label>
                  <input
                    name="lr"
                    placeholder="5"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, lr: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label>Pinky</label>
                  <input
                    name="lp"
                    placeholder="8"
                    className="border border-black w-10 mx-auto"
                    onChange={(e) =>
                      setFormData({ ...formData, lp: e.target.value })
                    }
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
              onChange={(e) =>
                setFormData({ ...formData, specialRequests: e.target.value })
              }
            ></textarea>
            {message ? <h1>{message}</h1> : ""}
            <button
              type="submit"
              className="bg-red-500 text-white p-5 rounded-2xl mx-auto"
            >
              Submit for quote!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
