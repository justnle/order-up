import React from "react";

function SearchBar(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
      <i class="fas fa-search"></i>
    </div>
  );
}

export default SearchBar;
