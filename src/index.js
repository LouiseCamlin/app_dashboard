import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './containers/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'



  var config = {
    apiKey: "AIzaSyBMjyTaPfDo_tFKTkB3BgSv25L0bCDhvgY",
    authDomain: "beezer-test-b1077.firebaseapp.com",
    databaseURL: "https://beezer-test-b1077.firebaseio.com",
    projectId: "beezer-test-b1077",
    storageBucket: "beezer-test-b1077.appspot.com",
    messagingSenderId: "192338249769"
  };
  firebase.initializeApp(config);


ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
