import React from "react";
import Card from "../components/card";
import im from "../assets/iz.jpg";

export default function Test() {
  return (
    <>
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
          Testinomial{" "}
        </span>
      </div>

      <div className="container">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box front">
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
