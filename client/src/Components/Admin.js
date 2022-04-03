import react, { useEffect, useState } from "react";

export default function Admin() {


    const [nailInfo, setNailInfo] = useState();

  
    const submitToStore = async(e) =>{
        e.preventDefault()
        await fetch('http://localhost:5000/nails', {
            method: 'POST',
            headers: {
                "enctype": "multipart/form-data"
              },
              body: JSON.stringify(nailInfo),
        })

    }

 

  return (
    <div className="flex bg-purple-400 h-screen">
      <div className="bg-white rounded-xl shadow-xl shadow-black p-5 mx-auto my-auto flex flex-col">
        <h1 className="mx-auto text-4xl">Add to store</h1>
        <form onSubmit={submitToStore} className="flex flex-col text-4xl">
          <label htmlFor="title">Title</label>
          <input onChange={(e) => setNailInfo({...nailInfo, title: e.target.value})} className="border-2 border-black" id="title" />

          <label className="mt-5" htmlFor="desc">Description:</label>
          <textarea onChange={(e) => setNailInfo({...nailInfo, description: e.target.value})} className="border-2 border-black" id="desc" />
          <label className="mt-5" htmlFor="picUpload">Upload picture</label>
          <input onChange={(e) => setNailInfo({...nailInfo, picture: e.target.value})} name='pic' type="file" /> 
          
          {/* ====Checkboxes===== */}
          <h2 className="mt-5">Sizes</h2>
         
          <div className="flex flex-row text-2xl mx-auto">
          <label htmlFor="small">Small</label>
          <input onChange={(e) => setNailInfo({...nailInfo, small: e.target.value})} className="my-auto mr-5 ml-2 w-5 h-5 " id="small" type='checkbox'/>
          <label htmlFor="med">Medium</label>
          <input onChange={(e) => setNailInfo({...nailInfo, med: e.target.value})} className="my-auto mr-5 ml-2 w-5 h-5 " id="med" type='checkbox'/>
          <label htmlFor="large">Large</label>
          <input onChange={(e) => setNailInfo({...nailInfo, lg: e.target.value})} className="my-auto mr-5 ml-2 w-5 h-5 " id="large" type='checkbox'/>
          <label  htmlFor="xl">Xtra Large</label>
          <input onChange={(e) => setNailInfo({...nailInfo, xl: e.target.value})} className="my-auto mr-5 ml-2 w-5 h-5 " id="xl" type='checkbox'/></div>
          <button type='submit' className="bg-purple-200 w-fit mx-auto mt-5 p-5 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}
