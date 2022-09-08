import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';

const App = () => {
  const [registerResponse, setRegisterResponse] = useState("")

  const handleRegister = async ({ username, email, password, countriesVisited, friends }) => {
    try {
      await fetch("http://localhost:4000/users/register", {
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
      <h1>Register</h1>
      <UserForm handleSubmit={handleRegister} />
      {registerResponse && <p>{registerResponse}</p>}
    </div>
  )
}

export default App
