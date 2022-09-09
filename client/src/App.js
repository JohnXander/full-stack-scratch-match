import { useState } from 'react';
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

  const handleRegister = async ({ username, email, password }) => {
    await fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password, countriesVisited: 0, friends: 0 })
    })
    setNotification("Registration", "successful")
    setTimeout(() => { setNotification("", "") }, "5000")
    setLoggedIn(true)
  }

  const handleLogin = async ({ username, password }) => {
    await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
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
