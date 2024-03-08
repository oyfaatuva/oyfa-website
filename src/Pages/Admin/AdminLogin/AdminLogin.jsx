import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import "./AdminLogin.css";
import { Navigate } from "react-router";

export default function AdminLogin () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Here you would usually send a request to your backend to authenticate the user
        // For the sake of this example, we're using a mock authentication
        if (username === "user" && password === "password") {
        // Replace with actual authentication logic
            await login({ username });
        } else {
            alert("Invalid username or password");
        }
    };

    if (user) {
        return <Navigate to="/admin/dashboard"/>;
    }

    return (
        <div className="login_container">
            <div className="login_panel">
                <h1 className="login_title">ADMIN LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="form_input"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="form_input"
                        />
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>
            </div>
            <img className='login_photo' src="/Images/Admin/Login_Photo.jpg"/>
        </div>
    );
};