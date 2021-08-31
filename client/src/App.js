import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PostEditor from './pages/PostEditor';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import ScrollToTop from './components/ScrollToTop';
import CategoryShow from './pages/CategoryShow';
import { AuthContext } from './context/authContext/AuthContext';
function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/editor">{user ? <PostEditor /> : <Login />}</Route>
        <Route path="/post/:postId">
          <SinglePost />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/category/:catId">
          <CategoryShow />
        </Route>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
