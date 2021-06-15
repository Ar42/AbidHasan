import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/webDev.jpg";
import { Common } from "./Common";

const Home = () => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1>
        Hi, I am Abid Hasan <br />
        and I am a <span className="wdSpan">Web Developer</span>
      </h1>
          <div>
          <NavLink to="/about" className="btn-get-started">About Me
        {/* <button className="btn btn-successs">About Me</button> */}
      </NavLink>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
          <img src={web} className="img-fluid animated" alt="header image" />
        </div>       
        </div>
        </div>
      </div>
    </div>
    </section>
   
   
    </>
  );
};

export { Home };
