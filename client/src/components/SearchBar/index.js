import React from 'react';
import './style.css';
function SearchBar(props) {
  return (
    <div
      className='form-group d-flex flex-row align-items-center'
      id='searchbar'
    >
      <input className='form-control' {...props} />
      <i className='fas fa-search fa-1x mx-3' id='searchicon'></i>
    </div>
  );
}

export default SearchBar;
