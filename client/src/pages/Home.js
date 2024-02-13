import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* <Image src={img} fluid  style={{height:'auto',width:'100%'}}/>
      
      */}

      <div className="bg">
        <div className="cot">
          <h1 className="sett"> hello hello hello hello hello hello </h1>
          <h1 className="sett"> hello hello hello hello hello hello </h1>
          <p className="sett">
            The most common use of the element will be for images used in
            responsive designs. Instead of having one image that is scaled up or
            down based on the viewport width, multiple images can be designed to
            more nicely fill the browser .
          </p>
          <button type="button" className=" button btn btn-warning">
            Know ➡️
          </button>
        </div>
      </div>
      {/* <div className="color-overlay justify-content-center align-items-center  cont ">
        <h1 className="content1">hello heloo hello hello heloo </h1>
        <h1 className="content2">hello hello hello hello</h1>
        <p className="p mx-5" style={{ width: 700 }}>
          hello everyonr this is the prohect made my me for my internship hello
          everyonr this is the prohect made my me for my internshipeveryonr this
          is the prohect made my me for my internship hello everyonr this is the
          prohect made my me for my internship hello
        </p>
        <button type="button" className=" button btn btn-warning">
          Dark
        </button>
      </div> */}
    </>
  );
}
