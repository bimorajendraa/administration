import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMmlL8eD3-_ZjeF6HiOIOIdAS73w2GWxw",
    authDomain: "vue-project-3c6e6.firebaseapp.com",
    databaseURL: "https://vue-project-3c6e6-default-rtdb.firebaseio.com",
    projectId: "vue-project-3c6e6",
    storageBucket: "vue-project-3c6e6.appspot.com",
    messagingSenderId: "993516861191",
    appId: "1:993516861191:web:e5d6e68d76d841fafab7a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const fbdb = firebase.database();

export { fbdb };