import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Register = ({ handleSubmit }) => {
    const [user, setUser] = useState({ username: "", email: "", password: "" })
    const navigate = useNavigate()

    const handleSubmitDecorator = (e) => {
        e.preventDefault();
        handleSubmit(user);
        setUser({ username: "", email: "", password: "" })
        navigate("/map")
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <h1 class="text-center">Register</h1>
            <div class="d-flex justify-content-center">
                <form onSubmit={handleSubmitDecorator}>
                    <div class="form-group">
                        <input class="form-control-lg" type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
                        <input class="form-control-lg" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                        <input class="form-control-lg" type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                    </div>
                    <button class="btn btn-primary btn-lg" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Register