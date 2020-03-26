import React from 'react';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Post from './components/Post';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
    
      <BrowserRouter>
      <NavBar />
        <div>
          {/* <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'> Login</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/registration'>Registration</Link>
            </li>
            <li>
              <Link to='/posts'>Post</Link>
            </li>
          </ul> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/posts' component={Post} />
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
