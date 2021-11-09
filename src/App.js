import React from 'react';
import FixedNav from './components/FixedNav';
import Hero from './components/Hero'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FixedNav/>
      </header>
      <Hero/>
    </div>
  );
}

export default App;
