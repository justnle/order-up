import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const SideDrawer = props => {
  let drawerClass = `side-drawer`;
  if (props.show) {
    drawerClass = `side-drawer open`;
  }

  return (
    <nav className={drawerClass}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/shifts">Shifts</Link></li>
        <li><Link to="/foh">Front</Link></li>
        <li><Link to="/boh">Back</Link></li>
        <li><Link to="floorplans">Floor</Link></li>
      </ul>
    </nav>
  )
}

export default SideDrawer;