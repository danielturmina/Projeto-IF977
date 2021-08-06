import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyCxXpuRv3hOcEH6bVqwBS3d9LixnBSEvGE",
  authDomain: "if977-plataformaweb.firebaseapp.com",
  projectId: "if977-plataformaweb",
  storageBucket: "if977-plataformaweb.appspot.com",
  messagingSenderId: "657063684926",
  appId: "1:657063684926:web:4f4db33407527d54695a6f"
};

  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;     