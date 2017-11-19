import React, { Component } from 'react';
import {
  Platform,
  UIManager
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDqJumHTmjgs3YKsqc13wSuvRaty2TPRc4",
      authDomain: "manager-9ef8c.firebaseapp.com",
      databaseURL: "https://manager-9ef8c.firebaseio.com",
      projectId: "manager-9ef8c",
      storageBucket: "manager-9ef8c.appspot.com",
      messagingSenderId: "199278808963"
    };
    firebase.initializeApp(config);
  }

  // Render App
  render() {
    // {} is for any initial state that we might want to pass in
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}