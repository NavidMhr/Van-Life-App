import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout(){

    const activeStyle={
       textDecoration: "underline",
       textDecorationThickness: "2px",
       color: "black",
       fontWeight: "700",
    }

    return(
        <>
        <div className="host-header">
          <NavLink style={({isActive})=> isActive ? activeStyle : null} to="." end >Dashboard</NavLink>
          <NavLink style={({isActive})=> isActive ? activeStyle : null} to="income" >Income</NavLink>
          <NavLink style={({isActive})=> isActive ? activeStyle : null} to="vans" >Vans</NavLink>
          <NavLink style={({isActive})=> isActive ? activeStyle : null} to="reviews" >Reviews</NavLink>
          <Outlet/>
        </div>
        </>
 )
}