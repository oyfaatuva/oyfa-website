import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

/* This is a Layout that allows only authenticated users to its children in the Router (see App.jsx) */

export default function AdminLayout() {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            /* { replace: true } so that login pages replaces whatever page unauthenticated users were trying to access in history
            avoiding loop when clicking back arrow */ 
            navigate('/admin/login', {replace: true})
        }
    })
    
    return(            
        <Outlet/>
    );
}

