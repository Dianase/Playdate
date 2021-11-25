import React, { createContext, useState } from "react";
import "./styles/App.css";
import FixedNav from "./components/FixedNav";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Places from "./components/Places";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import CreateEvent from "./components/CreateEvent";
import "./styles/App.css";
import Dashboard from "./components/Dashboard";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <UserContext.Provider
        value={{ user, setUser, isLoggedIn, setIsLoggedIn }}
      >
        <Router>
          <header className="App-header">
            <FixedNav />
          </header>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Places" element={<Places />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
