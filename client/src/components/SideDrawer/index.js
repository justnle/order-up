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
        <li><Link to='/'><i className='fas fa-users fa-1x fa-fw' />Home</Link></li>
        <li><Link to='/menu'><i className='fas fa-book-open fa-1x fa-fw' /><span>Menu</span></Link></li>
        <li><Link to="/employees"><i className='fas fa-user-friends fa-1x fa-fw' />Employees</Link></li>
        <li><Link to="/inventory"><i className='fas fa-cubes fa-1x fa-fw' />Inventory</Link></li>
        <li><Link to="/shifts"><i className='fas fa-clock fa-1x fa-fw' /><span>Shifts</span></Link></li>
        <li><Link to="/foh"><i className='fas fa-user-tie fa-1x fa-fw' /><span>Front</span></Link></li>
        <li><Link to="/boh"><i className='fas fa-utensils fa-1x fa-fw' /><span>Back</span></Link></li>
        <li><Link to="floorplans"><i className='fas fa-chair fa-1x fa-fw' /><span>Floor</span></Link></li>
      </ul>
    </nav>
  )
}

export default SideDrawer;