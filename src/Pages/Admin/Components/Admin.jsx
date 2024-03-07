import { Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function AdminLayout() {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/admin/dashboard"/>;
    }
    
    return(            
        <Navigate to="/admin/login"/>
    );
}