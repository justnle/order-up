import React from "react";
import Sidebar from "./components/Sidebar";
import Employees from "./pages/Employees/index";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Employees />
    </div>
  );
}

export default App;
