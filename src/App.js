import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import Deals from "./components/Pages/Deals/Deals";
import Catergories from "./components/Pages/Catergories/Catergories";
import About from "./components/Pages/About/About";
import Userlist from "./components/Pages/Userlist/Userlist";
import NavBar from "./components/StyledComponents/NavBar/NavBar";
import AddProduct from "./components/Pages/Products/AddProduct";
import './App.css';
import ProductList from './components/Pages/Products/ProductList';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path="/catergories" component={Catergories}></Route>
            <Route path="/userlist" component={Userlist}></Route>
            <Route path="/productlist" component={ProductList}></Route>
            <Route path="/deals" component={Deals}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/addProduct" component={AddProduct}></Route>
          </Switch>

        </div>
      </Router>
    )
  }
}
export default App;
