import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Post from './components/Post';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="app">
    
      <BrowserRouter>
      <NavBar />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/posts' component={Post} />
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/post/new' component={PostForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
