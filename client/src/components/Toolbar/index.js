import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import './style.css';

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div><DrawerToggleButton click={props.clickDrawerButton} /></div>
        <div className="toolbar-logo">Logo</div>
        {/* <div className="spacer" /> */}
        {/* <div className="toolbar-nav-items"></div> */}
      </nav>
    </header>
  )
}

export default Toolbar;