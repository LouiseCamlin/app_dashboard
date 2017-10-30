import React, { Component } from 'react';
import * as firebase from 'firebase';
import ReactStars from 'react-stars'
import './UserItem.css'

class UserItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      apps: {},
    }
    this.getApps()
  }


  getApps(){
    const appsRef = firebase.database().ref(`accounts/${this.props.account}`);
    appsRef.on('value', (snapshot) => {
    this.setState({apps: snapshot.val().apps})
    })
  }


 setAppRating(app, rating){
   const appsRef = firebase.database().ref(`accounts/${this.props.account}/apps/${app}`);
   appsRef.update({rating: rating})
 }

 handleRatingChange(app, rating){
   this.setAppRating(app, rating)
 }



  mapApps(){
    const apps = Object.keys(this.state.apps).map((app, index) => {
      return(
        <li id="rating-item" key={index}>{this.state.apps[app].title}
          <p>Rating:<ReactStars id="rating"
          name={app}
          count={5}
          onChange={(rating) => {
            this.handleRatingChange(app, rating)
          }}
          value={this.state.apps[app].rating}
          size={24}
         />
         </p>
        </li>

        )
      })
    return apps
  }


  render(){
    const apps = this.mapApps()

    return(
      <div id='app-item'>
        <ul>{apps}</ul>
      </div>
    )
  }

}

export default UserItem
