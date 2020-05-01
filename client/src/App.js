import React from "react";
import Sidebar from "./components/Sidebar";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      </Router>
    </div>
  );
}

export default App;
