import React from 'react';
import './App.css';
import FixedNav from './components/FixedNav';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <header className="App-header">
        <FixedNav/>
      </header>
      <Hero/>
      <Events/>
      <Footer/>
    </>
  );
}

export default App;
