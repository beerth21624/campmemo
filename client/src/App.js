import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login/>
    </div>
  );
}

export default App;
