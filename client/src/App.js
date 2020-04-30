import React from "react";
import Sidebar from "./components/Sidebar";
import TimeManagement from "./pages/TimeManagement/index";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <TimeManagement />
    </div>
  );
}

export default App;
