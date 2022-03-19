import React from "react";

import Header from "./Header";

import Mandi from "../Style/imgs/mandi.jpg";

export default function About() {
  return (
    <>
      <Header />
      <div className="lg:flex md:flex block shadow-purple-500 shadow-lg bg-purple-200 p-5 mx-3 mt-7 ">
        <img className="lg:h-96 md:h-56 mr-5 mb-3" src={Mandi} />
        <div className="mx-auto my-auto bg-lime-50 p-5 shadow-purple-500 shadow-md  text-center">
          <h1 className="text-4xl mx-auto my-auto">Hello, I'm Mandi Watson</h1>
          <p className="mx-auto my-auto text-justify ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
      </div>
    </>
  );
}
