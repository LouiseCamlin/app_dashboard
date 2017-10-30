import React, { Component } from 'react';
import UserItem from './UserItem.jsx'


class UserList extends Component {


  render() {
      const users = Object.keys(this.props.users).map((user, index) => {
      return(
          <li key={index}>
            <h3>{this.props.users[user].name}</h3>
              <ul>
                <li>Account: {this.props.users[user].account}</li>
                <li>Apps:<UserItem account={this.props.users[user].account}/></li>




              </ul>
          </li>
        )
    })

    return(
      <div>
      <ul>{users}</ul>
      </div>
    )
  }

}
export default UserList;
