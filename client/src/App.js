import React, { useState } from 'react';
import './App.css';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Employees from './pages/Employees';
import FOH from './pages/FOH';
import BOH from './pages/BOH';
import Inventory from './pages/Inventory/index';
import TimeManagement from './pages/TimeManagement/index';
import FloorPlans from './pages/FloorPlans';

import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

function App() {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);

  const clickDrawerButton = () => {
    setOpenSideDrawer(!openSideDrawer);
  }

  const clickBackdrop = () => {
    setOpenSideDrawer(false);
  }

  let backdrop;

  if (openSideDrawer) {
    backdrop = <Backdrop clickBackdrop={clickBackdrop} />;
  }

  return (
    <div id='App'>
      <Router>
        <Toolbar clickDrawerButton={clickDrawerButton} />
        <SideDrawer show={openSideDrawer} clickBackdrop={clickBackdrop} />
        {backdrop}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/employees' component={Employees} />
          <Route exact path='/inventory' component={Inventory} />
          <Route exact path='/shifts' component={TimeManagement} />
          <Route exact path='/foh' component={FOH} />
          <Route exact path='/boh' component={BOH} />
          <Route exact path='/floorplans' component={FloorPlans} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
