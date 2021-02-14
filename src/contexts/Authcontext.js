import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase";
import { auth, db, storage, timestamp } from "../Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentDisplayName, setCurrentDisplayName] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [collection, setCollection] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState({
    login: false,
    signup: false,
  });
  const [docs, setDocs] = useState([]);

  const openLoginModal = () => {
    setOpen({
      login: true,
    });
  };

  const closeLoginModal = () => {
    setOpen({
      login: false,
    });
  };
  const openSignupModal = () => {
    setOpen({
      signup: true,
    });
  };

  const closeSignupModal = () => {
    setOpen({
      signup: false,
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      settingDisplayName(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsub = db
      .collection("images")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, []);

  function settingDisplayName(user) {
    const displayNameRef = db
      .collection("users")
      .doc(user.email)
      .collection("user-data")
      .doc("user-info");

    displayNameRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          setCurrentDisplayName(data.FullName);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  const saveImage = (e) => {
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const displayName = currentDisplayName;
        const email = currentUser.email;
        const createdAt = timestamp;
        const title = collection.title;
        const content = collection.content;
        collectionRef.add({
          url,
          displayName,
          email,
          createdAt,
          title,
          content,
        });
        setUrl(url);
      }
    );
  };

  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function signup(email, password, firstname, lastname, gender) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection("users")
          .doc(email)
          .collection("user-data")
          .doc("user-info")
          .set({
            FullName: firstname + " " + lastname,
            email: email,
            gender: gender,
            joined: firebase.firestore.FieldValue.serverTimestamp(),
          });
        closeSignupModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const Logout = async () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    loading,
    open,
    progress,
    error,
    url,
    collection,
    docs,
    saveImage,
    setCollection,
    setUrl,
    setProgress,
    setError,
    setFile,
    Logout,
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
    login,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
