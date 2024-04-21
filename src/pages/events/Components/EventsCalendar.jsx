import {Component} from 'react'
import { EVENTS_CALENDAR_SOURCE, CURRENT_YEAR } from '../../../Constants'

import '../Stylesheets/EventsCalendar.css'  

/* This file renders the Events page with the calendar and header. You can also add announcements and other 
** components here if you wish, but for now it just has the calendar. The code for that was simply generated
** by going into the Google account -> settings -> embed code -> customize. */

/* This is a rather ugly calendar but it's an easy cut and paste from official Google Calendar settings 
** In the future, maybe look into a npm package or an online Google Calendar embedder like 
** https://fullcalendar.io/docs/google-calendar or https://stylemygcal.com/try-it. All of these will require
** you to have access to the Google account and configuring an API key. */
export default class Calendar extends Component{
    render(){

        return(
            <>
                <h1 className = 'events_heading'>{CURRENT_YEAR} Events Calendar</h1>

                <div className = 'events_calendar_container'>
                    <iframe src = {EVENTS_CALENDAR_SOURCE}
                    className = 'events_calendar_iframe'></iframe>  
                </div> 
            </>
        )
    }
}