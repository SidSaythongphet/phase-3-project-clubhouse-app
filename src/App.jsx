import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/static_components/NavBar";
import Home from "./components/static_components/Home";
import SignUp from "./components/session_components/SignUp";
import Login from "./components/session_components/Login";
import CreateClub from "./components/club_components/CreateClub";
import ClubList from "./components/club_components/ClubList";
import ClubPage from "./components/club_components/ClubPage";
import EventList from "./components/event_components/EventList";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/createclub" element={ <CreateClub /> } />
        <Route path="/clublist" element={ <ClubList /> } />
        <Route path="/club" element={ <ClubPage /> } />
        <Route path="/club/events" element={ <EventList /> } />
      </Routes>
    </Router>
  );
}

export default App;
