import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { AuthProvider } from "../contexts/Authcontext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </AuthProvider>
  );
}

export default App;
