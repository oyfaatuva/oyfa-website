import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import axiosClient from './../../utils/axiosClient';
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import { ADMIN_TABS } from "../../Constants";

import styles from './AdminLayout.module.css'

/* This is a Layout that allows only authenticated users to its children in the Router (see App.jsx) */

export default function AdminLayout() {
    const navigate = useNavigate();
    const { token } = useAuth();

    async function validateToken() {
        await axiosClient.get('/auth/validateToken');
    }

    useEffect(() => {
        // TODO: add message when logged state changes and logged off
        if (!token) 
            navigate('/admin/login', {replace: true})
        else {
            validateToken();
        }
    }, [token])
    
    return(      
        <div className={styles.app_container}>
            <Sidebar logoImgSrc={'/images/_common/Navbar_OYFA_Logo.png'} title={'ADMIN'} sidebarTabs={ADMIN_TABS}/>
            <div className={styles.main_content}>
                <Outlet/>
            </div>
        </div>      
    );
}