import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Sidebar() {
  const navItems = [
    {
      page: 'Menu',

      icon: <i className='fas fa-book-open fa-2x fa-fw'></i>,
    },
    {
      page: 'Inventory',
      icon: <i className='fas fa-cubes fa-2x fa-fw'></i>,
    },
    {
      page: 'Employees',
      icon: <i className='fas fa-user-friends fa-2x fa-fw'></i>,
    },
    {
      page: 'Payroll',
      icon: <i className='fas fa-dollar-sign fa-2x fa-fw'></i>,
    },
    {
      page: 'FOH',
      icon: <i className='fas fa-user-tie fa-2x fa-fw'></i>,
    },
    {
      page: 'BOH',
      icon: <i className='fas fa-utensils fa-2x fa-fw'></i>,
    },
  ];

  return (
    <Navbar as='ul'>
      <div className='sidebar sidebar-sticky bg-dark'>
        <h4 className='px-3'>
          <a href='/home' className='navbar-brand m-0'>
            Order Up
          </a>
        </h4>
        <hr className='sidebar-divider'></hr>
        {navItems.map((pages, index) => (
          <Nav.Item as='li' key={`list-${index}`}>
            <Nav.Link href={`/${pages.page.toLowerCase()}`}>
              {pages.icon} {pages.page}
            </Nav.Link>
          </Nav.Item>
        ))}
      </div>
    </Navbar>
  );
}

export default Sidebar;
