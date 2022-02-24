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
import UserHomePage from "./components/session_components/UserHomePage";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          light: '#00d4ff',
          main: '#094f79',
          dark: '#020024',
        },
        secondary: {
          light: '#ffdd72',
          main: '#ffd54f',
          dark: '#b29537',
        }
    },
    typography: {
      fontFamily: 'Manrope',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700
    }
})

const App = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const [allClubs, setAllClubs] = useState([])
  const [usersClubs, setUsersClubs] = useState([])

  useEffect(() => {
    fetch('/users')
      .then(resp => resp.json())
      .then(userData => setUsers(userData))
  }, [])

  useEffect(() => {
    fetch('/clubs')
      .then(resp => resp.json())
      .then(clubData => setAllClubs(clubData))
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
    
  useEffect(() =>{
    fetch(`/users/${currentUser.id}/clubs`)
      .then(resp => resp.json())
      .then(clubData => setUsersClubs(clubData))
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

    const handleAddUser = (newUser) => {
      setUsers([...users, newUser])
    }

    const handleAddClub = (newClub) => {
      setAllClubs([...allClubs, newClub])
    }

    const handleJoinClub = (newClub) => {
      setUsersClubs([...usersClubs, newClub])
    }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={ currentUser } />
        <Routes>
          <Route path="/" element={ <Home loggedIn={ loggedIn } currentUser={ currentUser } /> } />
          <Route path="/home/:last_name:id" element={ <UserHomePage loggedIn={ loggedIn } currentUser={ currentUser } usersClubs={ usersClubs } setLoggedIn={ setLoggedIn }  /> } />
          <Route path="/signup" element={ <SignUp loginUser={ loginUser } users={ users } onAddUser={ handleAddUser} /> } />
          <Route path="/login" element={ <Login loginUser={ loginUser } users={ users } currentUser={ currentUser }/> } />
          <Route path="/createclub" element={ <CreateClub currentUser={ currentUser } onAddClub={ handleAddClub } /> } />
          <Route path="/clublist" element={ <ClubList clubs={ allClubs } /> } />
          <Route path="/club/:club_title" element={ <ClubPage onJoinClub={ handleJoinClub } usersClubs={ usersClubs } /> } />
          <Route path="/club/events" element={ <EventList /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
