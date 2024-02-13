import React from "react";
import Image from "react-bootstrap/Image";
import map from "../assets/map.jpg";
import iz from "../assets/iz.jpg";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="ok">
      <div className="show">
        <div
          className="d-inline my-5"
          style={{
            backgroundColor: "yellow",
            height: 50,
            display: "inliine",
            width: 30,
          }}
        ></div>
        <span className="my-5" style={{ fontWeight: 30, fontSize: 40 }}>
          Contact Us{" "}
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 my-5">
            <p>👁️ 25 green street </p>
            <p>📞 565656565</p>
            <p>📧 company@gmail.com</p>
          </div>
          <div className="col-lg-6">
            <Image src={map} fluid style={{ height: "70%", width: "90%" }} />
          </div>
        </div>
      </div>

      {/* <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 '>
            <Image src={iz} fluid  style={{height:'auto',width:'80%'}}/>
            </div>
            <div className='col-lg-6 col-md-6 col-12 '>
            <form>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
          </div>
        </div> */}
      <div className="container">
        <div className="l-section">
          <div className="sect-img">
            <img
              src={iz}
              className="m-5  img"
              style={{ height: 400, width: 600 }}
            />
          </div>

          <div className="form-container">
            <form className="form ">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control my-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control my-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control my-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control my-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
