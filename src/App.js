import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Movies from './component/Movies'
import { Switch, Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main-container">
       
       <ul className="navbar">
          <NavLink to="/"><li className="linksito">Home</li></NavLink>
          <NavLink to="/movies"><li className="linksito">Movies</li></NavLink>
       </ul>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/movies" component={Movies}/>
      </Switch>
      
      </div>
    );
  }
}

export default App;
