import { Helmet } from "react-helmet";
import { useAuth } from "../../../components/AuthContext";

export default function AdminDashboard () {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout(); 
    };

    return (
        <>
            <Helmet><title>Admin Dashboard - OYFA at UVA</title></Helmet>
            <p>This is my dashboard</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
