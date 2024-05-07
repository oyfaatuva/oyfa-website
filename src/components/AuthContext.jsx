import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useLocalStorage("ACCESS_TOKEN", null);
    const navigate = useNavigate();

    const login = async (token) => {
        setToken(token);
        navigate("/admin/dashboard");
    };

    const logout = () => {
        setToken(null);
        navigate("/admin/login", { replace: true });
    };

    const value = useMemo(() => ({
        token, login, logout,
    }), [token]);
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
};