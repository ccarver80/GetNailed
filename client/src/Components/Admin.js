export default function Admin() {
  return (
    <div className="flex bg-purple-400 h-screen">
      <div className="bg-white rounded-xl shadow-xl shadow-black p-5 mx-auto my-auto flex flex-col">
        <h1 className="mx-auto text-4xl">Add to store</h1>
        <form
          action="http://localhost:5000/nails"
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

          <button
            className="bg-blue-400 w-fit mx-auto p-5 mt-5 rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
