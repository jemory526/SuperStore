import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Userlist from "./components/Home/Userlist";
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <div>
            <NavBar/>
          </div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path="/userlist" component={Userlist}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
