import { Outlet } from "react-router";
import { AuthProvider } from "../hooks/useAuth";

export const AuthLayout = () => {  
    return (
        <AuthProvider>
            <Outlet/>
        </AuthProvider>
    );
  };