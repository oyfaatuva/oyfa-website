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
                <img className="logo" src="/Images/_Common/Navbar_OYFA_Logo.png"/>
                <h1 className="login_title">LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="form_input"
                        required
                    />
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="form_input"
                        required
                    />
                    <button type="submit" className="button">LOGIN</button>
                </form>
            </div>
            <div className='login_photo_container'>
                <img src="/Images/Admin/Login_Photo.jpg"/>
            </div>
        </div>
    );
};