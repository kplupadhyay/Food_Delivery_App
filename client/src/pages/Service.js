import React from "react";
import Card from "../components/card";
import "./Service.css";

export default function Service() {
  return (
    <div className="okg">
      <div className="show">
        <div
          className="d-inline my-5"
          style={{
            backgroundColor: "yellow",
            height: 50,
            display: "inline",
            width: 30,
          }}
        ></div>
        <span className="my-5" style={{ fontWeight: 30, fontSize: 40 }}>
          Service Us{" "}
        </span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mt-2">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-2">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-2">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-2">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
