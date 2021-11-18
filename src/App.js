import React, {createContext} from 'react';
import './styles/App.css';
import FixedNav from './components/FixedNav';
import Events from './components/Events';
import Footer from './components/Footer';
import Places from './components/Places';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import CreateEvent from './components/CreateEvent';

export const UserContext = createContext()



function App() {
  return (
    <>
    <Router>
      <header className="App-header">
        <FixedNav/>
      </header>
      <Routes>
        <Route path="/Places" element={<Places/>}/> 
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/CreateEvent" element={<CreateEvent/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
