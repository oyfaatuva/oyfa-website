import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Home from './pages/home/Components/Home'
import About from './pages/about/Components/About'
import Events from './pages/events/Components/Events'
import Links from './pages/links/Components/Links'
import Leadership from './pages/leadership/Components/Leadership'
import Archives from './pages/archives/Components/Archives'
import LeadershipBio from './pages/leadership/Components/LeadershipBio'
import Merch, { merchLoader } from './pages/merch/Merch';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import { AuthLayout } from './pages/AuthLayout';
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import AdminLayout from './pages/admin/AdminLayout';
import PageLayout from './pages/PageLayout';
import NotFound from './pages/notFound/NotFound';

/* If adding new pages, add a new route with a relative link pointing to the new page and 
** set the element to the main component of your page 
**
** Make sure you use React <Link> or useNavigate() instead of anchor <a href=''> for navigating between pages.
** <a> triggers a refresh which can possibly reset any data we are potentially passing between pages */

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout/>}>
            <Route path='/' element={<PageLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='links' element={<Links/>}/>
                <Route path='leadership' element={<Leadership/>}/>
                <Route path='merch' element={<Merch/>}
                    loader={merchLoader}/>
                <Route path='archives' element={<Archives/>}/>
                <Route path='bios' element={<LeadershipBio/>}/>
            </Route>

            <Route path='admin/login' element={<AdminLogin/>}/>
            <Route path='admin' element={<AdminLayout/>}>
                <Route index element={<AdminDashboard/>}/> 
                <Route path='dashboard' element={<AdminDashboard/>}/>
                <Route path='merch'/> 
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>            
    );
}
  
export default App;