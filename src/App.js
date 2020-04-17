import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    axios.get(`https://localhost:44303/api/users/`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }
  render() {
    return (
      <div>
        <ul className="userList">
          {this.state.users.map(
            user => <li>
              {user.firstName + " " + user.lastName}
              </li>)
          }
        </ul>
      </div>
    )
  }
}
export default App;
