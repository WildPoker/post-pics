import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AddImage from "../components/AddImage";
import { AuthProvider } from "../contexts/Authcontext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <AddImage />
      </div>
    </AuthProvider>
  );
}

export default App;
