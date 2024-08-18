import React from "react";
import "./CSS/Footer.css";

import pic from "./../images/logo.png";

function Footer() {
  return (
    <div>
      <div className="footermain-box">
        <div className="box">
          <p className="bda-text">Abstract</p>
          <p className="chota-text">Branches</p>
        </div>
        <div className="box">
          <p className="bda-text">Resources</p>
          <p className="chota-text">Blog</p>
          <p className="chota-text">Help Center</p>
          <p className="chota-text">Release Notes</p>
          <p className="chota-text">Status</p>
        </div>
        <div className="box">
          <p className="bda-text">Community</p>
          <p className="chota-text">Twitter</p>
          <p className="chota-text">LinkedIn</p>
          <p className="chota-text">Facebook</p>
          <p className="chota-text">Dribble</p>
          <p className="chota-text">Podcast</p>
        </div>
        <div className="box">
          <p className="bda-text">Company</p>
          <p className="chota-text">About Us</p>
          <p className="chota-text">Careers</p>
          <p className="chota-text">Legal</p>
          <p
            className="medium-text"
            style={{
              marginBottom: "0px",
              marginTop: "26px",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </p>
          <p className="chota-text">info@abstract.com</p>
        </div>
        <div className="box1">
          <img src={pic} alt="" />
          <p
            className="chota-text"
            style={{ marginTop: "15px", fontWeight: "bold" }}
          >
            © Copyright 2022
          </p>
          <p className="chota-text" style={{ fontWeight: "bold" }}>
            Abstract Studio Design, Inc.
          </p>
          <p className="chota-text" style={{ fontWeight: "bold" }}>
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
