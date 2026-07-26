const firebaseConfig = {
  apiKey: "AIzaSyDAGyuNLcAnwVDa0rLlPou9iNk4zaG6fg4",
  authDomain: "kwevoel-ptt.firebaseapp.com",
  databaseURL: "https://kwevoel-ptt-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kwevoel-ptt",
  storageBucket: "kwevoel-ptt.firebasestorage.app",
  messagingSenderId: "348417110235",
  appId: "1:348417110235:web:fdedbf3635a36dfab85cfe",
  measurementId: "G-XN0S3Y8SKG"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
