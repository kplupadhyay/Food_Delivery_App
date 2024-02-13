import React from "react";
import i from "../assets/logo.jpg";

export default function card() {
  return (
    <>
      <div className="card my-3" style={{ width: 250, height: 200 }}>
        <img
          src={i}
          className="card-img-top mx-5"
          alt="..."
          style={{ height: 50, width: 80 }}
        />
        <div className="card-body">
          <h5 className="card-title mx-4">Bid Management</h5>
          <p className="card-text mx-2">
            Some quick example text to build on the card title and
          </p>
        </div>
      </div>
    </>
  );
}
