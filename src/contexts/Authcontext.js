import React, { useContext, useState, useEffect, useRef } from "react";
import { auth } from "../Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState({
    login: false,
    signup: false,
  });
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
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
