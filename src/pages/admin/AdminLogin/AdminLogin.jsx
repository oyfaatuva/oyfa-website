import { useState } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../../../components/AuthContext";
import { Navigate } from "react-router";
import axiosClient from "../../../utils/axiosClient";

import "./AdminLogin.css";

export default function AdminLogin () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { token , login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post('/auth/login', {
                user: username,
                pass: password,
            });
        
            if (response.status == 200) {
                const token = response.data.token;
                await login(token);    
            }
            else {
                alert('Invalid username or password');
            }        
        } catch (error) {
            alert('Invalid username or password');
        }
    };

    if (token) {
        return <Navigate to="/admin/dashboard"/>;
    }

    return (
        <div className="login_container">
            <Helmet><title>Admin Login - OYFA at UVA</title></Helmet>
            <div className="login_panel">
                <img className="logo" src="/images/_common/Navbar_OYFA_Logo.png"/>
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
                <img src="/images/admin/Login_Photo.jpg"/>
            </div>
        </div>
    );
};