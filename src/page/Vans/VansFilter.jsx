import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function VansFilter() {
  const { typeFilter, setUseParams } = useOutletContext();

  function setTypeFilter(type) {
    setUseParams({ type });
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
          onClick={() => setTypeFilter("simple")}>
          SIMPLE
        </button>
        <button
          className={`btn btn-outline-success mx-4 ${
            isSelected("rugged") ? "active" : ""
          }`}
          onClick={() => setTypeFilter("rugged")}>
          RUGGED
        </button>
        <button
          className={`btn btn-outline-dark mx-4 ${
            isSelected("luxury") ? "active" : ""
          }`}
          onClick={() => setTypeFilter("luxury")}>
          LUXURY
        </button>
        <button
          className="btn btn-outline-light mx-4"
          onClick={() => setUseParams({})}>
          CLEAR
        </button>
      </div>
    </>
  );
}
