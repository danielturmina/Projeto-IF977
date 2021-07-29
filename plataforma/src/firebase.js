import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyB0LDe1GGan2l6TygJO7klV0o2Os1ZN8-k",
    authDomain: "if977-plataforma.firebaseapp.com",
    projectId: "if977-plataforma",
    storageBucket: "if977-plataforma.appspot.com",
    messagingSenderId: "534467930271",
    appId: "1:534467930271:web:1e7bd0ac91cca4d1591aaa"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;    