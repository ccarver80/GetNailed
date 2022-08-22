import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function EditNail() {
  const [nailInfo, setNailInfo] = useState();
  const [picture, setPicture] = useState();
  const [message, setMessage] = useState();
  const [formInfo, setFormInfo] = useState({});

  const params = useParams();
  useEffect(() => {
    const fetchNails = async () => {
      await fetch(api + "/nail-set/" + params.id)
        .then((res) => res.json())
        .then((data) => {
          setNailInfo(data);
        });
    };

    fetchNails();
  }, []);

  const form = new FormData();

  const updateNails = async (e) => {
    e.preventDefault();
    if (formInfo.title) {
      form.append("title", formInfo.title);
    } else {
      form.append("title", nailInfo[0].title);
    }

    form.append("picture", picture);

    
    if (formInfo.description) {
      form.append("description", formInfo.description);
    } else {
      form.append("description", nailInfo[0].description);
    }

    if (formInfo.shape) {
      form.append("shape", formInfo.shape);
    } else {
      form.append("shape", nailInfo[0].shape);
    }

    if (formInfo.length) {
      form.append("length", formInfo.length);
    } else {
      form.append("length", nailInfo[0].length);
    }

    if (formInfo.size) {
      form.append("size", formInfo.size);
    } else {
      form.append("size", nailInfo[0].size);
    }

    if (formInfo.price) {
      form.append("price", formInfo.price);
    } else {
      form.append("price", nailInfo[0].price);
    }

    

    await fetch(`${api}/nails/${nailInfo[0].id}`, {
      method: "PUT",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <div className="flex bg-space">
      {nailInfo ? (
        <div className="mx-auto flex flex-col my-10 rounded-xl p-10 bg-white">
          <form onSubmit={updateNails} className="flex flex-col text-2xl">
            <label className="font-bold" htmlFor="title">
              Edit Title
            </label>
            <input
              name="title"
              id="title"
              type="text"
              defaultValue={nailInfo[0].title}
              onChange={(e) =>
                setFormInfo({ ...nailInfo, title: e.target.value })
              }
              className="mx-auto my-5 border-2 border-black font-bold text-xl"
            />

            <img
              className="lg:h-96 md:h-56 rounded"
              src={`${api}/nails/${nailInfo[0].id}`}
            />
            <label className="mt-5" htmlFor="picUpload">
              Upload a new picture
            </label>
            <input
              required
              id="picUpload"
              onChange={(e) => setPicture(e.target.files[0])}
              name="picture"
              type="file"
            />

            <label className="font-bold mt-10" htmlFor="description">
              Change Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={nailInfo[0].description}
              className="mx-auto my-5 border-2 border-black"
              onChange={(e) =>
                setFormInfo({ ...nailInfo, description: e.target.value })
              }
            />

            <label htmlFor="shape">Shape</label>
            <select
              id="shape"
              defaultValue={nailInfo[0].shape}
              onChange={(e) =>
                setFormInfo({ ...nailInfo, shape: e.target.value })
              }
              className="text-xl px-2 border border-black"
              name="shape"
            >
              <option value="none" selected disabled hidden>
                Please pick a shape
              </option>
              <option id="Square">Square</option>
              <option id="Almond">Almond</option>
              <option id="Coffin">Coffin</option>
            </select>

            <label htmlFor="length">Length</label>
            <select
              id="length"
              defaultValue={nailInfo[0].length}
              onChange={(e) =>
                setFormInfo({ ...nailInfo, length: e.target.value })
              }
              className="text-xl px-2 border border-black"
              name="length"
            >
              <option value="none" selected disabled hidden>
                Please pick a length
              </option>
              <option id="short">Short</option>
              <option id="medium">Medium</option>
              <option id="long">Long</option>
            </select>

            <label htmlFor="size">Size</label>
            <select
              id="size"
              defaultValue={nailInfo[0].size}
              onChange={(e) =>
                setFormInfo({ ...nailInfo, size: e.target.value })
              }
              className="text-xl px-2 border border-black"
              name="size"
            >
              <option value="none" selected disabled hidden>
                Please pick a size
              </option>
              <option id="x-small">x-small</option>
              <option id="small">Small</option>
              <option id="medium">Medium</option>
              <option id="large">Large</option>
              <option id="x-large">X-large</option>
            </select>

            <label htmlFor="price">Price</label>
            <div className="flex flex-row">
              <h1>$</h1>
              <input
                type="number"
                defaultValue={nailInfo[0].price}
                onChange={(e) =>
                  setFormInfo({ ...nailInfo, price: e.target.value })
                }
                name="price"
                id="price"
                placeholder="35.00"
                className="border border-black"
              />
            </div>

            <button
              type="submit"
              onClick={() => setMessage("Please wait.....")}
              className="bg-green-500 w-fit mx-auto p-5 rounded-xl"
            >
              Submit Changes
            </button>
            {message ? <h1>{message}</h1> : ""}
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
