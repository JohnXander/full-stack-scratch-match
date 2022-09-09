import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Register from './components/Register';

const App = () => {
  const [registerResponse, setRegisterResponse] = useState("")

  const handleRegister = async ({ username, email, password, countriesVisited, friends }) => {
    try {
      const res = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password, countriesVisited, friends })
      })

      setRegisterResponse("User successfully registered")
      setTimeout(() => { setRegisterResponse("") }, "5000")

    } catch (error) {
      setRegisterResponse("Something went wrong")
    }

  };

  return (
    <div>
      <Router>
        <header>
          <div>
            <h1>🌎Scratch Match</h1>
            <div className='nav-bar'>
              {<Link to="/map">Scratch Map</Link>}{" "}
              {<Link to="/manage">Manage Pins</Link>}{" "}
              {<Link to="/register">Sign Up</Link>}{" "}
              {<Link to="/profile">Profile</Link>}{" "}
              {<Link to="/friends">Friends</Link>}{" "}
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path='/register'
              element={<Register handleSubmit={handleRegister} registerResponse={registerResponse} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
