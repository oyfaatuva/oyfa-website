import { Outlet } from "react-router-dom";
import { AuthProvider } from './../components/AuthContext';

export const AuthLayout = () => {  
    return (
        <AuthProvider> 
            <Outlet/>
        </AuthProvider>
    );
};