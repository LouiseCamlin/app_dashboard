import React, { Component } from 'react';
import UserItem from './UserItem.jsx'
import './UserList.css'


class UserList extends Component {


  render() {
      const users = Object.keys(this.props.users).map((user, index) => {
      return(
          <li key={index} id="users">
            <h3 id="user-name">{this.props.users[user].name}</h3>
              <ul id="user-details">
                <li id="account">Account: {this.props.users[user].account}</li>
                <li id="apps">Apps:<UserItem account={this.props.users[user].account}/></li>




              </ul>
          </li>
        )
    })

    return(
      <div id="user-div">
      <ul id="users-list">{users}</ul>
      </div>
    )
  }

}
export default UserList;
