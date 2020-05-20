import React from 'react';
import './style.css';

const SideDrawer = props => {
  return (
    <nav className="side-drawer">
      <ul>
        <li><a href="/">Product</a></li>
        <li><a href="/">Users</a></li>
        <li><a href="/">Stuff</a></li>
      </ul>
    </nav>
  )
}

export default SideDrawer;