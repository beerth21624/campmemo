import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import PostEditor from './pages/PostEditor'
import SinglePost from './pages/SinglePost'
import Profile from "./pages/Profile";

function App() {
  const user = true

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
        <Route path="/editor">
        {user ?<PostEditor />:<Register />}
        </Route>
        <Route path="/post/:postId">
          <SinglePost />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </BrowserRouter>
  );
}

export default App;
