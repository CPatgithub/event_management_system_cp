import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EventForm from './components/events/eventForm';
import EventList from './components/events/eventsList';
import SignIn from './components/SignIn/SignIn';
import RequireAuth from './requireAuth/requireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route exact  path = "/" element={<RequireAuth><EventList/></RequireAuth>} />
        <Route exact path = "/signin" element = {<SignIn/>} />
        <Route exact path = "/create-event" element = {<EventForm/>} />
        {/* <Route exact path = "/edit-event/:eventId" component = {EventForm} /> */}
        </Routes>
    </div>
  );
}

export default App; 
