import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyD4lodO-_ZTkrdrXAiSOUYvpgJjrK1Hwe8",
    authDomain: "wily-36a51.firebaseapp.com",
    projectId: "wily-36a51",
    storageBucket: "wily-36a51.appspot.com",
    messagingSenderId: "902213605088",
    appId: "1:902213605088:web:3b291266243166ea56e285"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()