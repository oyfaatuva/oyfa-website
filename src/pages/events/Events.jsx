import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../components/layout/Loading/Loading';
const Calendar = React.lazy(() => import('./Components/EventsCalendar'));

/* Main export file to index that combines all "events" components */

export default class Events extends Component{
    render(){
        return(
            <div className='mb-4'>
                <Helmet><title>Events - OYFA at UVA</title></Helmet>
                <HalfTitle header = 'Events' imgSrc = '/images/events/Events_Title_Yogoyfa.jpeg' brightness = {70} caption='Check Instagram for latest updates' captionLink='https://www.instagram.com/oyfaatuva/' newTab = 'true'/>
                <Suspense fallback={<Loading/>}>
                    <Calendar />
                </Suspense>
            </div>
        )
    }
}