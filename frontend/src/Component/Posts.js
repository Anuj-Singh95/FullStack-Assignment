import React from "react";
import "./CSS/Home.css";
import "./CSS/Posts.css";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Posts() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allPost", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.myposts);
        setData(result.myposts);
      });
  }, []);

  // const chk = () => {
  //   console.log(data);
  // };

  const fetchData = () => {
    fetch("http://localhost:5000/particularPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: searchTerm }), // Send the search term in the body
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result.posts);
      });
  };

  const handleSearch = () => {
    fetchData(); // Trigger a new fetch with the current search term
  };

  return (
    <div className="outer-body">
      <div className="search-body">
        <div>
          <h1 style={{ margin: "auto" }}>How We Can Help ?</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => {
              handleSearch();
            }}
            type="submit"
          >
            {/* <i className="fas fa-search"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            {/* <i className="fa-solid fa-arrow-right"></i> */}
          </button>
        </div>
      </div>

      <div className="main-body">
        <div className="posts-main">
          {console.log(data)}
          {data.length !== 0 ? (
            data.map((post) => (
              <div className="post-card" key={post.id}>
                <h1>{post.title}</h1>
                <div className="title-underline"></div>
                <p>{post.desc}</p>
              </div>
            ))
          ) : (
            <p>no data to show</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
