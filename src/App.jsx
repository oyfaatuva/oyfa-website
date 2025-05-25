import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { AuthLayout } from './pages/AuthLayout';
import PageLayout from './pages/PageLayout';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Events from './pages/events/Events'
import Links from './pages/links/Links'
import Leadership from './pages/leadership/Leadership'
import LeadershipBios from './pages/leadership/bios/LeadershipBios';
import Archives from './pages/archives/Archives'
import Merch, { merchLoader } from './pages/merch/Merch';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import AdminMerch from './pages/admin/AdminMerch/AdminMerch';
import AdminLayout from './pages/admin/AdminLayout';
import Families from './pages/families/Families';
import NotFound from './pages/notFound/NotFound';

// Async Components for code splitting
const EditMerchForm = React.lazy(() => import('./pages/admin/AdminMerch/Components/EditMerchForm'));

/* If adding new pages, add a new route with a relative link pointing to the new page and 
** set the element to the main component of your page  */

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout/>}>
            <Route path='/' element={<PageLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='links' element={<Links/>}/>
                <Route path='leadership'> 
                    <Route index element={<Leadership/>}/>
                    <Route path='bios' element={<LeadershipBios/>}/>
                </Route>
                <Route path='families' element={<Families/>}/>
                <Route path='merch' element={<Merch/>} loader={merchLoader}/>
                <Route path='archives' element={<Archives/>}/>
            </Route>

            <Route path='admin/login' element={<AdminLogin/>}/>
            <Route path='admin' element={<AdminLayout/>}>
                <Route index element={<AdminDashboard/>}/> 
                <Route path='dashboard' element={<AdminDashboard/>}/>
                <Route path='merch' element={<AdminMerch/>} loader={merchLoader}>
                    <Route path=':itemId' element={<EditMerchForm/>}/>
                </Route> 
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>            
    );
}
  
export default App;