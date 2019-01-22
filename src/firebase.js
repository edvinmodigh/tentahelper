/*
This file handles the firebase real-time database, note that the firebase auth is handled from the Login component
 */
import firebase from 'firebase'

// Firebase configuration data
const config = {
    apiKey: "AIzaSyAkp4h6EaMYaMbpWGx5FOYxK8Eomdzc55o",
    authDomain: "tentahelper.firebaseapp.com",
    databaseURL: "https://tentahelper.firebaseio.com",
    projectId: "tentahelper",
    storageBucket: "tentahelper.appspot.com",
    messagingSenderId: "740983647300"
};

// Init firebase connection
firebase.initializeApp(config);

const auth = firebase.auth

export default auth
