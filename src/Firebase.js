import "firebase/auth";
import "firebase/storage";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyApqLLYzTgvyYlhP_nd2cK6HSLVGl55hJ0",
  authDomain: "post-images-d6bd5.firebaseapp.com",
  projectId: "post-images-d6bd5",
  storageBucket: "post-images-d6bd5.appspot.com",
  messagingSenderId: "403740193533",
  appId: "1:403740193533:web:626ef4ba21b5e9c46c8494",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = fire.auth();
const db = fire.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, storage, timestamp };
export default fire;
