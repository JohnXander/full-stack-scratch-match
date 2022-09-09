import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = ({ handleSubmit }) => {
    const [user, setUser] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const handleSubmitDecorator = (e) => {
        e.preventDefault();
        handleSubmit(user);
        setUser({ username: "", password: "" })
        navigate("/map")
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <h1 class="text-center">Login</h1>
            <div class="d-flex justify-content-center">
                <form onSubmit={handleSubmitDecorator}>
                    <div class="form-group">
                        <input class="form-control-lg" type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
                        <input class="form-control-lg" type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                    </div>
                    <button class="btn btn-primary btn-lg" type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login