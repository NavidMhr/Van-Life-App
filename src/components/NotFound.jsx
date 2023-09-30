import React from "react";
import { Link } from "react-router-dom";



export default function NotFound(){

    return(
        <>
        <div className="not-found-container">
            <h1>The Page Not Found '-'</h1>
            <Link className="text-center btn btn-outline-primary mt-3 text-light" to="/vans"> BACK TO ALL VANS </Link>
        </div>
        </>
    )
}