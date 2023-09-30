import React, { useEffect, useState } from "react";
import {Link, useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

export default function VanDetail() {
  const [vanDetail , setVanDetail] = useState({})
  const params = useParams();
 const location= useLocation()
console.log(location.state.search);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans) );
  }, []);

  const typeToColor = {
    simple: "warning",
    rugged: "success",
    luxury: "dark",
  };
  const backToVans = location.state.search.substring(6)

   return (
    <>
    <Link to=".." relative="path" className="text-dark p-5" > <FaArrowLeft/> Back to {backToVans ? backToVans : "All"} Vans</Link>
       <div className="van-detail">
          <img src={vanDetail.imageUrl} alt="" />
            <span className={`vans-type van-${vanDetail.type}`}>{vanDetail.type}</span>
            <h2>{vanDetail.name}</h2>
            <h3>${vanDetail.price}/Day</h3>
            <p>DESCRIPTION:</p>
            <hr />
            <h6>{vanDetail.description}</h6>
            <button className={`btn btn-outline-${typeToColor[vanDetail.type]} btn-lg text-light px-5 m-3`}>Rent This Van</button>
        </div> 
    </>
)}