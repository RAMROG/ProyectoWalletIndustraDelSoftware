import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDOsU9d4zC6NCGGN-xkzn2AmmSebDf0UNs",
  authDomain: "industriasoftware-79ce3.firebaseapp.com",
  projectId: "industriasoftware-79ce3",
  storageBucket: "industriasoftware-79ce3.appspot.com",
  messagingSenderId: "123697813046",
  appId: "1:123697813046:web:25a349c1cf5e48c6512a97"
};

  // Initialize Firebase
const fire=  firebase.initializeApp(firebaseConfig);
const auth= fire.auth();
const db=fire.firestore();
const database=fire.database();
export {auth,db,database}