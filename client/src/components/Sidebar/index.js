import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Sidebar() {
  const navItems = [
    'Menu',
    'Inventory',
    'Employees',
    'Payroll',
    'FOH',
    'BOH',
  ];

  return (
    <Navbar as='ul'>
      <div className='sidebar sidebar-sticky bg-dark'>
        <h4 className='px-3'><a href='/home'className='navbar-brand m-0'>Order Up</a></h4>
        <hr className='sidebar-divider'></hr>
        {navItems.map((page, index) => (
          <Nav.Item as='li' key={`list-${index}`}>
            <Nav.Link href={`/${page.toLowerCase()}`}>{page}</Nav.Link>
          </Nav.Item>
        ))}
      </div>
    </Navbar>
  );
}

export default Sidebar;

// TODO
/* 
- better 'brand'
- icons next to page links
- toggle collapse to show just icons
*/
