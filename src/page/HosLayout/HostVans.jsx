import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function HostVans(){
const [hostVans , setHostVans ] = useState([])
    useEffect(()=>{
        fetch("/api/host/vans")
            .then(res=> res.json())
            .then(data=> setHostVans(data.vans))
    },[])

  const hostVansResult = hostVans.map(van=>(
    <Link style={{textDecoration: "none"}} to={`/host/vans/${van.id}`} key={van.id} >
        <div className="host-vans-container">
            <img src={van.imageUrl} alt="" />
            <h3>{van.name}</h3>
            <h5>${van.price}/Day</h5>
        </div>
    </Link>
        ))

    return (
        <>
        <div className="">

          {
              hostVansResult
            }
        </div>
        </>
    )
}