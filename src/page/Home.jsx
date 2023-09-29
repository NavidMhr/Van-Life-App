import React from "react";
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="home-page">
          <Link className="btn btn-outline-light btn-lg" to="/vans" >Explore Our Vans</Link>
      </div>
    </>
  );
}
