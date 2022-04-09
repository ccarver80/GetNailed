import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../api'
export default function NailInfo(props) {
 const params = useParams();
    useEffect(() => {
        const fetchNails = async() => {
            await fetch(api+'/nail-set/'+ params.id)
            .then(res => res.json())
            .then(data => console.log(data))
        }

        fetchNails()
    })




    return (
        <div className="h-screen flex bg-space">
            <div className="mx-auto my-auto bg-white">
                <h1>Nail info</h1>
            </div>
        </div>
    )
}   