import React from "react";
import { NavLink } from "react-router-dom";


export default function VanDetailNav(){

    const activeStyle={
        textDecoration: "underline",
        textDecorationThickness: "2px",
        color: "black",
        fontWeight: "500",
     }


    return (
        <>
        <div className="host-van-detail-nav">
            <NavLink style={({isActive})=> isActive ? activeStyle : null} to="." end >Details</NavLink>
            <NavLink style={({isActive})=> isActive ? activeStyle : null} to="pricing" >Pricing</NavLink>
            <NavLink style={({isActive})=> isActive ? activeStyle : null} to="photos" >Photos</NavLink>
        </div>
        </>
    )
}