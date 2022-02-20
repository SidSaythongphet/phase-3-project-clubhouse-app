import React, { useEffect, useState } from "react";
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
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const [clubs, setClubs] = useState([])

  useEffect(() => {
    fetch('/users')
      .then(resp => resp.json())
      .then(userData => setUsers(userData))
  }, [currentUser])

  useEffect(() => {
    fetch('/clubs')
      .then(resp => resp.json())
      .then(clubData => setClubs(clubData))
  }, [])

  useEffect(() => {
    const userId = localStorage.getItem('user_id')
    if(userId && !loggedIn) {
      fetch(`/users/${userId}`)
        .then(resp => resp.json())
        .then(user => {
          loginUser(user)
        })
      }
    }, [loggedIn])

    const loginUser = (user) => {
      setCurrentUser(user)
      setLoggedIn(true)
      localStorage.setItem('user_id', user.id)
    }
  
    const logoutUser = () => {
      setCurrentUser('')
      setLoggedIn(false)
      localStorage.removeItem('user_id')
    }

    const handleAddClub = (newClub) => {
      setClubs([...clubs, newClub])
    }

    const updateCurrentUser = () => {
      const userId = localStorage.getItem('user_id')
      fetch(`/users/${userId}`)
        .then(resp => resp.json())
        .then(user => {
          setCurrentUser(user)
        })
    }

  return (
    <Router>
      <NavBar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={ currentUser } />
      <Routes>
        <Route path="/" element={ <Home loggedIn={ loggedIn } currentUser={ currentUser } /> } />
        <Route path="/signup" element={ <SignUp loginUser={ loginUser } users={ users } /> } />
        <Route path="/login" element={ <Login loginUser={ loginUser } users={ users } /> } />
        <Route path="/createclub" element={ <CreateClub currentUser={ currentUser } onAddClub={ handleAddClub } onUpdateUser={ updateCurrentUser }/> } />
        <Route path="/clublist" element={ <ClubList clubs={ clubs }/> } />
        <Route path="/club" element={ <ClubPage /> } />
        <Route path="/club/events" element={ <EventList /> } />
      </Routes>
    </Router>
  );
}

export default App;
