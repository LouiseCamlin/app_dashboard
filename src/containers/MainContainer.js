import React, { Component } from 'react';
import * as firebase from 'firebase';
import UserList from '../components/UserList.jsx'

class MainContainer extends Component {

  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  getUserList(){
    const itemsRef = firebase.database().ref('users');
    itemsRef.on('value', (snapshot) => {
      //console.log('users', snapshot.val());
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          account: items[item].account,
          name: items[item].name
        });
      }
      this.setState({
        users: newState
      });
      //console.log(this.state);
    });
  }


  componentDidMount() {
    this.getUserList()
    //this.getAccountList()
    //console.log(this.state);
  }


  render() {

    return (
      <div className="wrapper">
        <ul>
          <h2>Users</h2>
          <UserList users={this.state.users}/>
        </ul>
      </div>
    );
  }

}

export default MainContainer;
