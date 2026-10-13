import { Component, useEffect, useRef, useState } from 'react'
import { EVENTS_CALENDAR_SOURCE, CURRENT_YEAR, FEATURED_EVENTS } from '../../../Constants'
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
                    title = 'OYFA events calendar'
                    className = 'events_calendar_iframe'></iframe>  
                </div> 
                {FEATURED_EVENTS && FEATURED_EVENTS.length > 0 &&
                    <div className = 'featured_columns'>
                        {FEATURED_EVENTS.map((column, colIndex) => (
                            <h2 className = {`featured_season col_${colIndex}`} key = {column.season}>{column.season}</h2>
                        ))}

                {Array.from({ length: Math.max(...FEATURED_EVENTS.map((c) => c.events.length)) }).flatMap((_, rowIndex) =>
                    FEATURED_EVENTS.map((column, colIndex) => {
                        const event = column.events[rowIndex]
                        if (!event) return <div className = {`featured_empty col_${colIndex}`} key = {`${column.season}-${rowIndex}`} />
                        return (
                            <FadeIn className = {`featured_event col_${colIndex}`} key = {`${column.season}-${rowIndex}`} direction = {colIndex === 0 ? 'left' : 'right'}>
                                <img className = 'featured_event_img' src = {event.imgSrc} alt = {event.title} />
                                <h3 className = 'featured_event_title'>
                                    {event.link
                                        ? <a href = {event.link} target = '_blank' rel = 'noreferrer'>{event.title}</a>
                                        : event.title}
                                </h3>
                                <p className = 'featured_event_blurb'>{event.blurb}</p>
                                {event.photosLink &&
                                    <a className = 'featured_event_photos' href = {event.photosLink} target = '_blank' rel = 'noreferrer'>More Photos!</a>
                                }
                            </FadeIn>
                        )
                    })
                )}
            </div>
        }
            </>
        )
    }
}

// Fading feature for event images and descriptions
function FadeIn({ children, className, direction }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true)
                observer.disconnect()
            }
        }, { threshold: 0.15 })

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref = {ref} className = {`fade_in fade_from_${direction || 'left'} ${visible ? 'fade_in_visible' : ''} ${className || ''}`}>
            {children}
        </div>
    )
}