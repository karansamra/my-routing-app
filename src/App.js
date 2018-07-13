import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import User from './components/User'

// const User = () => {
//   return ("<h1>Wecome User<h1>");
// }

class App extends Component {

  state = {
    loggedIn: false
  }

  handleLogin = () => {
    this.setState({
      loggedIn: true
    })
  }

  render() {
    return (
      <Router>
        <div className = "App"> 
          <ul>
            <li>
              <NavLink to = "/" exact activeStyle= {
                {color: 'green'}
              }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to = "/about" exact activeStyle= {
                {color: 'green'}
              }>
                About
              </NavLink>
            </li>  
            <li>
              <NavLink to = "/user/:Jaskaran" exact activeStyle= {
                {color: 'green'}
              }>
                User Jaskaran
              </NavLink>
            </li>  
          </ul>

          <input type = "button" value = "Login" onClick={this.handleLogin.bind(this)}/>
          <Route path="/" strict exact render = {
            ()=>{
              return (<h1> Welcome Home</h1>)
            }
          }>
          </Route>
          <Route path="/about" strict exact render = {
            ()=>{
              return (<h1> Welcome About</h1>)
            }
          }>
          </Route>
          <Route path="/user/:username" strict exact render = {
            (props) => { return this.state.loggedIn ? <User {...props}/> : <Redirect to = "/"/> }
          }>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
