import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import axiosClient from './../../utils/axiosClient';

/* This is a Layout that allows only authenticated users to its children in the Router (see App.jsx) */

export default function AdminLayout() {
    const navigate = useNavigate();
    const { token } = useAuth();

    async function validateToken() {
        try {
            await axiosClient.get('/auth/validateToken');
        } catch (error) {
            console.error('Token validation failed:', error);
            navigate('/admin/login', { replace: true });
        }
    }

    useEffect(() => {
        // TODO: add message when logged state changes and logged off
        validateToken();
        if (!token) 
            navigate('/admin/login', {replace: true})
    }, [token])
    
    return(            
        <Outlet/>
    );
}