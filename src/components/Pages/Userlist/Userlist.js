import React, { Component } from 'react';
import axios from 'axios';
import './Userlist.css';


class Userlist extends Component {
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
                <div>
                    <h1 className="pageTitle">User List page</h1>
                </div>
                <ul className="userList">
                    {this.state.users.map(
                        user =>
                            <li key={user.id}>
                                {user.firstName + " " + user.lastName}
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Userlist;