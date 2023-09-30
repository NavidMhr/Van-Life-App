import React, { useEffect, useState } from "react";
import { Link, Outlet , useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vanState, setVansState] = useState([]);
  const [searchParams, setUseParams] = useSearchParams();


  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansState(data.vans));
  }, [searchParams]);

  const typeFilter = searchParams.get("type");

  const showedVans = typeFilter
    ? vanState.filter((van) => van.type === typeFilter)
    : vanState;

  const VansResult = showedVans.map((van) => (
    <Link to={`/vans/${van.id}`} key={van.id} state={{ search : `?${searchParams.toString()}` }} >
      <div className="vans-page">
        <img src={van.imageUrl} alt="" />
        <h2>{van.name}</h2>
        <p>{van.price}/Day</p>
        <span className={`vans-type van-${van.type}`}>{van.type}</span>
      </div>
    </Link>
  ));

  return (
    <>
      <div>
        <Outlet context={{ searchParams , typeFilter ,  setUseParams }} />
      </div>
      <div className="vans-container">{VansResult}</div>
    </>
  );
}
