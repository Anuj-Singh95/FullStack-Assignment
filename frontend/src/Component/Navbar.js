import React from "react";
import "../Component/CSS/Navbar.css";
import logo from "../images/logo.png";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const gotoAddProjects = () => {
    navigate("/addposts");
  };
  const gotoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="nav-body">
        <div className="logo-help">
          <div
            onClick={() => {
              gotoHome();
            }}
            className="Nav-logo"
          >
            {/* LOGO */}
            <img src={logo} />
          </div>
          <p> Abstract | Help Center</p>
        </div>

        <div className="Nav-buttons">
          <button
            onClick={() => {
              gotoAddProjects();
            }}
          >
            Create New Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
