import React from "react";

import Header from "./Header";

import Mandi from '../Style/imgs/mandi.jpg'

export default function About() {
    return(
        <>
        <Header />
        <div className="lg:flex sm:block shadow-purple-500 shadow-lg bg-purple-200 p-5 mx-3 mt-7 ">
           <img className="lg:h-96 md:h-56 inline" src={Mandi} />
           <h1 className="text-4xl mx-auto my-auto">Hello, I'm Mandi Watson</h1>
           <p className="mx-auto my-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        </>
    )
}