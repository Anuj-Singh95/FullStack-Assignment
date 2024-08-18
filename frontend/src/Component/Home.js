import React from "react";
import SearchBox from "./SearchBox";
import "./CSS/Home.css";
import Posts from "./Posts";
import Footer from "./Footer";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  return (
    <div>
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
