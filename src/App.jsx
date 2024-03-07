import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Home from './pages/Home/Components/home'
import About from './pages/About/Components/about'
import Events from './pages/Events/Components/events'
import Links from './pages/Links/Components/links'
import Leadership from './pages/Leadership/Components/leadership'
import Archives from './pages/Archives/Components/archives'
import LeadershipBio from './pages/Leadership/Components/leadershipBio'
import RootRouteComponent from './root'
import Merch from './pages/Merch/Components/Merch';
import Admin from './pages/Admin/Components/AdminLayout';
import AdminLogin from './pages/Admin/Components/AdminLogin';
import { AuthLayout } from './components/AuthLayout';
import AdminDashboard from './pages/Admin/Components/AdminDashboard';
import AdminLayout from './pages/Admin/Components/AdminLayout';

/* If adding new pages, add a new route with a relative link pointing to the new page and 
** set the element to the main class of your page 
**
** In general, use React <Link> instead of anchor <a href=''> for navigating between pages (for external websites is ok)
** <a> triggers a refresh which can possibly reset any data we are potentially passing between pages */

const newRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout/>}>
            <Route path='/' element={<RootRouteComponent />}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='links' element={<Links/>}/>
                <Route path='leadership' element={<Leadership/>}/>
                <Route path='merch' element={<Merch/>}/>
                <Route path='archives' element={<Archives/>}/>
                <Route path='bios' element={<LeadershipBio/>}/>
            </Route>
            
            <Route path='admin/login' element={<AdminLogin/>}/>
            <Route path='admin' element={<Admin/>}/>
            <Route element={<AdminLayout/>}>
                <Route path='dashboard' element={<AdminDashboard/>}/>  
            </Route>   
        </Route>
    )
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRouteComponent />, /**RootRouteComponent is the parent of all the other Routes and will contain all shared Components (ex. 
        Navbar, Footer, ScrollToTop) */
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'events',
                element: <Events/>,
            },
            {
                path: 'links',
                element: <Links/>,
            },
            {
                path: 'leadership',
                element: <Leadership/>,
            },
            {
                path: 'merch',
                element: <Merch/>,
            },
            {
                path: 'archives',
                element: <Archives/>,
            },
            {
                path: 'bios',
                element: <LeadershipBio/>,
            },
        ]
    },
    {
        path: 'admin',
        element: <Admin/>,
        children: [
            {
                path: 'login',
                element: <AdminLogin/>
            },
        ]
    },
]);

function App() {
    return (
        <RouterProvider router={newRouter}/>            
    );
}
  
export default App;