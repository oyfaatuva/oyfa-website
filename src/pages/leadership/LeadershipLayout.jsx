import { Outlet } from "react-router-dom";
import { LeadershipProvider } from "./Components/LeadershipContext";

export default function LeadershipLayout () {
    return (
        <LeadershipProvider>
            <Outlet/>
        </LeadershipProvider>
    );
}