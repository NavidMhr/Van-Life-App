import React from "react";
import {Link} from "react-router-dom"

export default function Header(){

    return(
        <>
            <header className="header-vans">
                <Link className="header-home" to="/" >#VANLIFE</Link>
                <div className="header-links">

                <Link to="host">Host</Link> 
                <Link to="about">About</Link>
                <Link to="vans">Vans</Link>
                
                </div>
            </header>
        </>
    )
}