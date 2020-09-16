import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCIpppyXOi3Mn72WNfVh2hYxiHVPuXeV3Q",
  authDomain: "socialape-58897.firebaseapp.com",
  databaseURL: "https://socialape-58897.firebaseio.com",
  projectId: "socialape-58897",
  storageBucket: "socialape-58897.appspot.com",
  messagingSenderId: "150954191262",
  appId: "1:150954191262:web:938ea5385bff829e7bce8f",
  measurementId: "G-0KQV8H9RJV",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fireDb.database().ref();
