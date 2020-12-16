import React from "react";

// reactstrap components
import Button from "reactstrap/lib/Button";
import Blockchain from "../../assets/img/blocchain.png";
import "./Indexheader.css";

// core components

function IndexHeader() {
  return (
    <>
      <div className="d-flex mt-5">
        <div className="landing-wrapper" id="home">
          <div className="container-fluid">
            <div className="row">
              <div className="landing-image col-lg-6 col-md-5 ">
                <img src={Blockchain} alt="blockchain" className="animate__animated animate__fadeInLeft"/>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="landing-text">
                  <div className="section-header animate__animated animate__fadeInRight ">
                    <h2 className="">Introducing</h2>
                    <h1 className="font-weight-bold">Blockchain Technology</h1>
                    <h2>For the first time in Nepal</h2>
                  </div>
                  <div className="mt-4 animate__animated animate__fadeIn animate__delay-1s">
                    <h5>
                      The fact that blockchain is a decentralised way of storing
                      and accessing data makes the whole system incredibly
                      secure
                    </h5>
                    <h6>Blockchain is a technology. Bitcoin is a currency</h6>
                    <Button
                      className="btn-round mt-4 shadow"
                      color="info"
                      type="button"
                    >
                      <i className="fa fa-arrow-right mr-1" />
                      Learn More
                    </Button>
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

export default IndexHeader;
