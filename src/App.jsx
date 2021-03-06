import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/static_components/NavBar";
import Home from "./components/static_components/Home";
import SignUp from "./components/session_components/SignUp";
import Login from "./components/session_components/Login";
import CreateClub from "./components/club_components/CreateClub";
import ClubListContainer from "./components/club_components/ClubListContainer";
import ClubPage from "./components/club_components/ClubPage";
import UserHomePage from "./components/users_component/UserHomePage";
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
    }, [loggedIn, currentUser])
    
    const loginUser = (user) => {
      setCurrentUser(user)
      setUsersClubs(user.clubs)
      setLoggedIn(true)
      localStorage.setItem('user_id', user.id)
    }
  
    const logoutUser = () => {
      setCurrentUser('')
      setLoggedIn(false)
      localStorage.removeItem('user_id')
      localStorage.removeItem('club_id')
    }

    const handleAddUser = (newUser) => {
      setUsers([...users, newUser])
    }

    const handleAddClub = (newClub) => {
      setAllClubs([...allClubs, newClub])
      setUsersClubs([...usersClubs, newClub])
    }

    const handleJoinClub = (newClub) => {
      setUsersClubs([...usersClubs, newClub])
    }

    const handleQuitClub = (removedClub) => {
      const updatedUsersClubs = usersClubs.filter(club => club.id !== removedClub.club_id)
      setUsersClubs(updatedUsersClubs)
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
          <Route path="/clublist" element={ <ClubListContainer clubs={ allClubs } usersClubs={ usersClubs } /> } />
          <Route path="/club/:club_title" element={ <ClubPage onJoinClub={ handleJoinClub } onQuitClub={ handleQuitClub } currentUser={ currentUser } /> } />
          {/* <Route path="/club/events" element={ <EventContainer /> } /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
