import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
function App() {
  return (
      <BrowserRouter>
          <Navbar />
         <Route exact path="/">
            <Home/>
         </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
  );
}

export default App;
