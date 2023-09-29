import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="about-vans">
        <img
          src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/img_60ee70c239e68.jpg"
          alt=""
        />
        <h3>Don’t squeeze in a sedan when you could relax in a van</h3>
        <p className="m-3">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <hr />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
          <hr />
        </p>
        <div className="bg-warning text-center p-2 mb-3">
          <Link className="btn btn-outline-light btn-lg" to="/vans">Explore Our Vans</Link>
        </div>
      </div>
    </>
  );
}
