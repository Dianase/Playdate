import React, { createContext, useState } from "react";
import "./styles/App.css";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Places from "./components/Places";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import CreateEvent from "./components/CreateEvent";
import Dashboard from "./components/Dashboard";
import MyActivities from "./components/MyActivities";
import MyPlaces from "./components/MyPlaces";
import MyProfile from "./components/MyProfile";
import CreateActivity from "./components/CreateActivities";

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
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Profile" element={<MyProfile />} />
            <Route path="/CreateActivity" element={<CreateActivity />} />
            <Route path="/My-Activities" element={<MyActivities />} />
            <Route path="/My-Places" element={<MyPlaces />} />
            <Route path="/Places" element={<Places />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
