import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VansFilter() {
  const { typeFilter , setUseParams } = useOutletContext();

  function setTypeFilter( key , value ){
    setUseParams(prevParams=>{
      if( value === null){
        prevParams.delete(key)
      }else{
        prevParams.set(key , value)
      }
      return prevParams
    })
  }

  function isSelected(type) {
    return typeFilter === type;
  }

  return (
    <>
      <h3 className="mx-5 text-black-50">Explore Our Options</h3>

      <div>
        <button
          className={`btn btn-outline-warning text-light mx-4 ${
            isSelected("simple") ? "active" : ""
          }`}
          onClick={() => setTypeFilter( "type" , "simple")}>
          SIMPLE
        </button>
        <button
          className={`btn btn-outline-success mx-4 ${
            isSelected("rugged") ? "active" : ""
          }`}
          onClick={() => setTypeFilter( "type" , "rugged")}>
          RUGGED
        </button>
        <button
          className={`btn btn-outline-dark mx-4 ${
            isSelected("luxury") ? "active" : ""
          }`}
          onClick={() => setTypeFilter( "type" , "luxury")}>
          LUXURY
        </button>
        {
          typeFilter ?   <button className="btn btn-outline-light mx-4"
          onClick={() => setTypeFilter( "type" , null) }>
          CLEAR
        </button> : null
        }

      </div>
    </>
)}
