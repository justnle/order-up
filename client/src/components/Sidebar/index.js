import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <nav className='sidebar bg-dark'>
        <Link to='/home'>
          <h3 className='home'>Order Up</h3>
        </Link>
        
        <Link to='/menu' className='menu'>
          <i className='fas fa-book-open fa-2x fa-fw'></i>
          <span>Menu</span>
        </Link>
        <Link to='/manager' className='manager'>
          <i className='fas fa-chalkboard-teacher fa-2x fa-fw'></i>
          <span>Manager</span>
        </Link>
        <Link to='/inventory' className='inventory'>
          <i className='fas fa-cubes fa-2x fa-fw'></i>
          <span>Inventory</span>
        </Link>
        <Link to='/employees' className='employees'>
          <i className='fas fa-user-friends fa-2x fa-fw'></i>
          <span>Employees</span>
        </Link>
        <Link to='/shifts' className='shifts'>
          <i className='fas fa-clock fa-2x fa-fw'></i>
          <span>Shifts</span>
        </Link>
        <Link to='/FOH' className='FOH'>
          <i className='fas fa-user-tie fa-2x fa-fw'></i>
          <span>FOH</span>
        </Link>
        <Link to='/BOH' className='BOH'>
          <i className='fas fa-utensils fa-2x fa-fw'></i>
          <span>BOH</span>
        </Link>
        <Link to='/floorplans' className='floorplans'>
          <i className='fas fa-chair fa-2x fa-fw'></i>
          <span>Floor Plans</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;