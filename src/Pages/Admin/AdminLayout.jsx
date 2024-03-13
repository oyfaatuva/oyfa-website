import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

/* This is a Layout that allows only authenticated users to its children in the Router (see App.jsx) */

export default function AdminLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/admin/login"/>;
    }
    
    return(            
        <Outlet/>
    );
}