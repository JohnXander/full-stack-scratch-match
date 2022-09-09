import { useState } from "react";

export default function UserForm({ handleSubmit, registerResponse }) {
    const [user, setUser] = useState({ username: "", email: "", password: "", countriesVisited: 0, friends: 0 });

    const handleSubmitDecorator = (e) => {
        e.preventDefault();
        handleSubmit(user);
        setUser({ username: "", email: "", password: "", countriesVisited: 0, friends: 0 })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmitDecorator}>
                <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                <input type="number" name="countriesVisited" placeholder="Countries Visited" value={user.countriesVisited} onChange={handleChange} />
                <input type="number" name="friends" placeholder="Friends" value={user.friends} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {registerResponse && <p>{registerResponse}</p>}
        </>
    );
}