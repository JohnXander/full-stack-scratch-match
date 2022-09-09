import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Hero from './components/Hero';

import Register from './components/Register';

const App = () => {
  const [object, setObject] = useState("")
  const [action, setAction] = useState("")

  const handleRegister = async ({ username, email, password }) => {
    await fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password, countriesVisited: 0, friends: 0 })
    })

    setNotification("User", "registered")
    setTimeout(() => { setNotification("", "") }, "5000")
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
            <h1>🌎Scratch Match</h1>
            <div class="navbar navbar-expand-xlg navbar-light bg-dark">
              {<Link to="/map">Scratch Map</Link>}{" "}
              {<Link to="/manage">Manage Pins</Link>}{" "}
              {<Link to="/register">Register</Link>}{" "}
              {<Link to="/profile">Profile</Link>}{" "}
              {<Link to="/friends">Friends</Link>}{" "}
            </div>
          </div>
          {object && <p>{object} was {action}!</p>}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path='/register'
              element={<Register handleSubmit={handleRegister} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
