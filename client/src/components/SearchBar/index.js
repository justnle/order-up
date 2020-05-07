import React from 'react';
import './style.css';

function SearchBar(props) {
  return (

    <div className="input-group d-flex justify-content-center">
      <input {...props} className="form-control" placeholder="Search..." id="ed-srch-term" type="text" />
      <div className="input-group-btn">
        <button type="submit" id="searchbtn">
          search</button>
      </div>
    </div>


  );
}


export default SearchBar;

