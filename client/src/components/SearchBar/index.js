import React from "react";
import "./style.css";
function SearchBar(props) {
  return (
    <div className="form-group" id="searchbar">
      <input className="form-control" {...props} />
      <i className="fas fa-search fa-2x" id="searchicon"></i>
    </div>
  );
}

export default SearchBar;
