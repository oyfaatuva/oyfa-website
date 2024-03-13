import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import "./AdminLogin.css";
import { Navigate } from "react-router";
import axios from "axios";

export default function AdminLogin () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://oyfaatuva.com/api/index.php', {
                name: "generateToken",
                param: {
                username: username,
                pass: password,
                }
            });
            const data = await response.data;
        
            if (data.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);

                await login({ username });    
            }
            else {
                alert('Invalid username or password');
            }        
        } catch (error) {
            console.error('An error occurred:', error);
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
                            required
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
                            required
                        />
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>
            </div>
            <img className='login_photo' src="/Images/Admin/Login_Photo.jpg"/>
        </div>
    );
};