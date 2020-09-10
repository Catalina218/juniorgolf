import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDZ-TIXdRJW5gNCJ5FzdkJdTOBaryVDBKQ",
  authDomain: "junior-golf-72925.firebaseapp.com",
  databaseURL: "https://junior-golf-72925.firebaseio.com",
  projectId: "junior-golf-72925",
  storageBucket: "junior-golf-72925.appspot.com",
  messagingSenderId: "264210264003",
  appId: "1:264210264003:web:1d07f6ddcd59e22faa1776",
  measurementId: "G-HV086RWLHB"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
