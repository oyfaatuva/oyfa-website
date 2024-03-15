import { useAuth } from "../../../hooks/useAuth";
import AdminMerch from "../AdminMerch/AdminMerch";

export default function AdminDashboard () {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout(); 
    };

    return (
        <>
            <p>This is my dashboard</p>
            <button onClick={handleLogout}>Logout</button>
            <AdminMerch/>
        </>
    );
}
