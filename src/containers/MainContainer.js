import React, { Component } from 'react';
import * as firebase from 'firebase';
import UserList from '../components/UserList.jsx'
import './MainContainer.css'

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

    });
  }


  componentDidMount() {
    this.getUserList()

  }


  render() {

    return (
      <div>
      <header>
        <img src="https://www.weareninetwenty.com/userfiles/NineTwentyMain/WebContent/beezer_logo_FIN2-01.png" width="115" height="50" alt="beezer logo" />
      </header>
      <div className="wrapper">
        <ul>
          <h2 id="user-title">Users</h2>
          <UserList users={this.state.users}/>
        </ul>
      </div>

    </div>
    );
  }

}

export default MainContainer;
