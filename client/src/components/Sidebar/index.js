import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
        <nav className='sidebar bg-dark'>         
            <a className='active'>
                <Link to='/home'><h3>Order Up</h3></Link>
            </a>
            <hr className='sidebar-divider'></hr>
            <a >
            <Link to='/menu'><i className='fas fa-book-open fa-2x fa-fw'></i><span>Menu</span></Link>
            </a>
            <a>
            <Link to='/manager'><i className='fas fa-chalkboard-teacher fa-2x fa-fw'></i><span>Manager</span></Link>
            </a>
            <a>
            <Link to='/inventory'><i className='fas fa-cubes fa-2x fa-fw'></i><span>Inventory</span></Link>
            </a>
            <a>
            <Link to='/employees'><i className='fas fa-user-friends fa-2x fa-fw'></i><span>Employees</span></Link>
            </a>
            {/* <a>
            <Link to='/payroll'><i className='fas fa-dollar-sign fa-2x fa-fw'></i><span>Payroll</span></Link>
            </a> */}
            <a>
            <Link to='/FOH'><i className='fas fa-user-tie fa-2x fa-fw'></i><span>FOH</span></Link>
            </a>
            <a>
            <Link to='/BOH'><i className='fas fa-utensils fa-2x fa-fw'></i><span>BOH</span></Link>
            </a>
        </nav>
        </div>
    )
}

export default Sidebar;
