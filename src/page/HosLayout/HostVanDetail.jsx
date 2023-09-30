import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import VanDetailNav from "./VanDetailNav"


export default function HostVanDetail() {
  const [hostVanDetail, setHostVanDetail] = useState({});
  const params = useParams();


  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetail(data.vans));
  }, [params.id]);
  const hostDetail = hostVanDetail.description
  return (
    <>
      <div className="host-van-detail-container">
        <img src={hostVanDetail.imageUrl} alt="" />
        <span className={`vans-type van-${hostVanDetail.type}`}>{hostVanDetail.type}</span>
        <h3>{hostVanDetail.name}</h3>
        <h5>${hostVanDetail.price}/Day</h5>
      </div>

        <VanDetailNav/>
        <Outlet context={{ hostDetail }} />
    </>
  );
}
