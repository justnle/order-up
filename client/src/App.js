import React from 'react';
import Sidebar from './components/Sidebar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Employees from './pages/Employees';
function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Employees />
      </Router>
    </div>
  );
}
export default App;
