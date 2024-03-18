import { Helmet } from "react-helmet";
import { useAuth } from "../../../components/AuthContext";
import AdminMerch from "../AdminMerch/AdminMerch";

export default function AdminDashboard () {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout(); 
    };

    return (
        <>
            <Helmet><title>Admin Dashboard</title></Helmet>
            <p>This is my dashboard</p>
            <button onClick={handleLogout}>Logout</button>
            <AdminMerch/>
        </>
    );
}
