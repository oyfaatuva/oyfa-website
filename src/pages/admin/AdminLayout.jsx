import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import { useEffect } from "react";

/* This is a Layout that allows only authenticated users to its children in the Router (see App.jsx) */

export default function AdminLayout() {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        // TODO: add message when logged state changes and logged off 
        if (!token) 
            navigate('/admin/login', {replace: true})
    })
    
    return(            
        <Outlet/>
    );
}