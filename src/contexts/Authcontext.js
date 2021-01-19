import React, { useContext, useState, useEffect, useRef } from "react";
import { auth } from "../Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
    console.log(open);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const Logout = async () => {
    return auth.signOut();
  };
  const value = {
    currentUser,
    loading,
    open,
    Logout,
    openModal,
    closeModal,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
