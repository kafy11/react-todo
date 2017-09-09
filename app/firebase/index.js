import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDtHVcfkpANbIisuLWrQwAvt20RYExG-i8",
    authDomain: "kafy-todo-app.firebaseapp.com",
    databaseURL: "https://kafy-todo-app.firebaseio.com",
    projectId: "kafy-todo-app",
    storageBucket: "kafy-todo-app.appspot.com",
    messagingSenderId: "502228114374"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
