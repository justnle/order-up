import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Sidebar() {
  // these icons are place holders and
  // do not reflect the actual page
  const navItems = [
    {
      page: 'Menu',

      icon: <i class="fas fa-utensils fa-2x"></i>
    },
    {
      page: 'Inventory',
      icon: <i class="fas fa-cubes fa-2x"></i>
    },
    {
      page: 'Employees',
      icon: <i class="fas fa-user-friends fa-2x"></i>
    },
    {
      page: 'Payroll',
      icon: <i class="fas fa-dollar-sign fa-2x"></i>
    },
    {
      page: 'FOH',
      icon: <i class="fas fa-user-tie fa-2x"></i>
    },
    {
      page: 'BOH',
      icon: <i class="fas fa-ad fa-2x"></i>
    }
  ];

  return (
    <Navbar as='ul'>
      <div className='sidebar sidebar-sticky bg-dark'>
        <h4 className='px-3'><a href='/home'className='navbar-brand m-0'>Order Up</a></h4>
        <hr className='sidebar-divider'></hr>
        {navItems.map((pages, index) => (
          <Nav.Item as='li' key={`list-${index}`}>
            <Nav.Link href={`/${pages.page.toLowerCase()}`}>{pages.icon} {pages.page}</Nav.Link>
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
