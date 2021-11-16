import React, { useState, createContext } from 'react';
import './App.css';
import FixedNav from './components/FixedNav';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import Places from './components/Places';
import { Switch, Route} from 'react-router-dom'

export const EventContext = createContext()

function App() {
  const [events, setEvents] = useState()
  const [selectedEvent, setSelectedEvent] = useState()

  return (
    <>
      <header className="App-header">
        <FixedNav/>
      </header>
      <Switch>
      <EventContext.Provider value={{events, setEvents, selectedEvent, setSelectedEvent}}>
        <Hero/>
       <Route path="/events"> <Events/> </Route>
        <Places/>
      </EventContext.Provider>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
