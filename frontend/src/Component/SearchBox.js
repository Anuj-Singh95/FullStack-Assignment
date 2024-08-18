import React from "react";
import "./CSS/SearchBox.css";

function SearchBox() {
  return (
    <div>
      <div className="search-body">
        <div>
          <h1 style={{ marginLeft: "58px" }}>How We Can Help ?</h1>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
