import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [object, setObject] = useState("")
  const [action, setAction] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState("")
  const [userCountries, setUserCountries] = useState([])

  const API_URL = "http://localhost:4000/"
  let userParamId = 1
  // if (currentUser) userParamId = +currentUser.user.id

  useEffect(() => {
    if (!userCountries) {
      fetch(`${API_URL}countries/${userParamId}`, { method: "GET" })
        .then(resp => resp.json())
        .then(data => setUserCountries(data))
    }
  }, [loggedIn])

  const handleRegister = async ({ username, email, password }) => {
    await fetch(`${API_URL}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password, countriesVisited: 0, friends: 0 })
    })
      .then(resp => resp.json())
      .then(data => setCurrentUser(data))

    setNotification("Registration", "successful")
    setTimeout(() => { setNotification("", "") }, "5000")
    setLoggedIn(true)
  }

  const handleLogin = async ({ username, password }) => {
    await fetch(`${API_URL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(resp => resp.json())
      .then(data => setCurrentUser(data))

    setNotification("Login", "successful")
    setTimeout(() => { setNotification("", "") }, "5000")
    setLoggedIn(true)
  }

  const setNotification = (obj, verb) => {
    setObject(obj)
    setAction(verb)
  }

  return (
    <div>
      <Router>
        <header>
          <div>
            <h1 class="text-center">🌎Scratch Match</h1>
            <div class="navbar navbar-expand-xlg navbar-light bg-dark">
              {loggedIn && <Link to="/map">Scratch Map</Link>}
              {loggedIn && <Link to="/manage">Manage Pins</Link>}
              {!loggedIn && <Link to="/register">Register</Link>}
              {!loggedIn && <Link to="/login">Login</Link>}
              {loggedIn && <Link to="/profile">Profile</Link>}
              {loggedIn && <Link to="/friends">Friends</Link>}
            </div>
          </div>
          {object && <p>{object} was {action}!</p>}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path='/register' element={<Register handleSubmit={handleRegister} />} />
            <Route path='/login' element={<Login handleSubmit={handleLogin} />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
