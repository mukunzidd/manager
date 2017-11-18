import React, { Component } from 'react';
import {
  Platform,
  UIManager,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';

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
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Text>
            Hellooo Dodooo!
        </Text>
        </View>
      </Provider>
    );
  }
}