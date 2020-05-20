import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import './style.css';

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div><DrawerToggleButton /></div>
        <div className="toolbar-logo">Logo</div>
        <div className="spacer" />
        <div className="toolbar-nav-items">
          <ul>
            <li><a href="/">item 1</a></li>
            <li><a href="/">item 2</a></li>
            <li><a href="/">item 3</a></li>
            <li><a href="/">item 4</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar;