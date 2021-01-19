import "firebase/auth";
import "firebase/storage";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDmstNJHuJh4O8PbUwS64YYsC5qqHvXPHY",
  authDomain: "post-pics-be167.firebaseapp.com",
  projectId: "post-pics-be167",
  storageBucket: "post-pics-be167.appspot.com",
  messagingSenderId: "775090383164",
  appId: "1:775090383164:web:72f52f8ee1aec659bf5639",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const storage = firebase.storage();
const db = fire.firestore();

export { auth, db, storage };
export default fire;
