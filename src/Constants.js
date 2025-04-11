/* This file exists to consolidate things that may change over the years for easy updating.
** It contains links, long paragraph texts, and other mishmash of stuff. Ideally in the future
** you should migrate any sort of constants to this file so it's all in one place.
** Various files will import constants from this bank here. 
** There are two sections, UPDATE EVERY YEAR and LESS LIKELY TO CHANGE. Each
** section is organized into each page where the constants will be used.
==========================================================================================*/


/* The following constants like VENMO_LINK, EVENTS_CALENDAR_SOURCE, and LINKS need to be updated every year */
/*=================UPDATE EVERY YEAR=================================================================================*/
/*=================UPDATE EVERY YEAR=================================================================================*/
/*=================UPDATE EVERY YEAR=================================================================================*/


/* This is the sectioned links which will be displayed on the links page. Most time-sensitive links will probably be
** under the Annoucements section, but make as many sections as you want. */

/*=================HOME=====================================================================*/

/* Current year's treasurer link, used in HomeGetInvolved */
export const VENMO_HANDLE = '@alyssafamero';
export const VENMO_LINK = 'https://account.venmo.com/u/alyssafamero';

/*=================EVENTS=====================================================================*/

/* Find the current google calendar embed link for this year's events. Log into the Google account,
** go to settings for the current calendar -> embed code -> customize, choose default view month/agenda, turn off title +
** print icon + calendar list + time zone. Then take only the src url rather than all the embed code and change
** this link, the Calendar component in eventsCalendar.js auto applies custom sizing rules. */
export const EVENTS_CALENDAR_SOURCE = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=M2NkNDhiZWYzOTA0OWJiZjQ5ZGIyZjJjMTJjNzYwMGUxMjFjNzY3NzI0YjQ5ODM4Y2Y1ODk1NDRjMGJiMDRhZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342'
export const CURRENT_YEAR = 2025;

/*=================LINKS=====================================================================*/

/* sectioned link information to render the Links page */
export const LINKS =
    [
        { 
            sectionTitle: 'Announcements',
            links: 
                [
                    {header: 'OYFA Excellence Scholarship', para: 'Calling all first years: the 2024 Scholarship is now open! Applications close March 15th, 11:59PM', link: 'https://forms.office.com/r/4CZ9SD9vZA'},
                ]
        },
        
        { 
            sectionTitle: 'OYFA Links',
            links: 
                [
                    {header: 'OYFA Historic Photos', para: 'View our official archive of memories', link: 'https://uvaoyfa.myportfolio.com/'},
                    {header: 'OYFA 2023-2024 Events Google Calendar', para: 'Clear your calendar for our amazing events!', link: 'https://calendar.google.com/calendar/u/0?cid=Y19uMzRsOThkbGE2cW5vYWJkbG9ibmQzYXY3c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t'},
                    {header: 'Week in OYFA (WIO) Sign-Up', para: 'Get our weekly newletter featuring announcements, news, puzzles, and fun tidbits!', link: 'http://eepurl.com/gBOWJv'},
                    {header: 'OYFA Discord', para: 'Play games with Oyfans', link: 'https://discord.gg/TTUZWeuD'},
                ]
        },

        { 
            sectionTitle: 'Facebook Groups',
            links: 
                [
                    {header: 'Official Facebook Group', para: 'Official channels for news and info. Find our other socials at the bottom of the page!', link: 'https://www.facebook.com/groups/oyfaatuva/'},
                    {header: 'Chilling Out With OYFA', para: 'Our silly casual Facebook group', link: 'https://www.facebook.com/groups/596905140414588/'}                ]
        },

        { 
            sectionTitle: 'External',
            links: 
                [
                    {header: 'External Org WIO Announcement Requests', link:'https://docs.google.com/forms/d/e/1FAIpQLScyJWjb7ewew4lsxuoGLVaQJyWHYATVHPBtJKpKJJxksDjN0g/viewform?usp=sf_link'},
                    {header: 'About Lokal Lab Siargao', para: 'Non-profit assisting Typhoon Rai relief efforts', link: 'https://www.lokalsiargao.com'},
                    {header: 'Philippines Typhoon Relief Fund', para: 'No longer accepting donations, but read about the effects of Typhoon Rai', link: 'https://gofund.me/60f4ee36'},
                ]
        },

        { 
            sectionTitle: 'Resources',
            links: 
                [
                    {header: 'OYFA Student Advisors Report Form', para: 'Our student advisors are available as a resource for all members. Report misconduct of any kind inflicted against those in our community. Examples of misconduct include but are not limited to discrimination of any kind; harassment; abuse; or any form of sexual violence', link:'https://docs.google.com/forms/d/e/1FAIpQLSf07yE_oCCto4bwkgZGUZOdhONq2qws9Z0Z8SFpM_GnxCH3yw/viewform'},
                    {header: 'Counseling and Psychological Services (CAPS)', para: 'Free individual, group, or couples therapy provided by the University of Virginia; also includes support group under Counseling and Psychological Services (CAPS) for students who want to become more comfortable with their gender identity and sexuality: (434)-243-5150', link: 'https://www.studenthealth.virginia.edu/CAPS'},
                    {header: "Maxine Platzer Lynn Women's Center", para: 'Free individual, group, or couples therapy provided by the University of Virginia; food distribution available in lobby: (434)-982-2361; 2964 Hydraulic Road, Charlottesville, VA 22901', link: 'https://womenscenter.virginia.edu/'},
                    {header: 'Planned Parenthood', para: 'Provides abortion, pregnancy testing, STD testing, and birth control services - (434)-296-1000', link: 'https://www.plannedparenthood.org/health-center/virginia/charlottesville/22901/charlottesville-health-center-2815-90860'},
                    {header: 'Gordie Center for Substance Abuse Prevention', para: 'Provides education, information, resources and referrals for university wide alcohol and other drug abuse prevention, strategies, and support for UVA students in recovery - (434)-982-0703; 400 Brandon Avenue, Charlottesville, VA 22903', link: 'https://gordie.studenthealth.virginia.edu/'},
                    {header: 'Student Disability Access Center', para: 'Provides support services, academic accommodations, advocacy, and educational training to the U.Va. students for physical and mental disabilities - (434)-243-5180; 400 Brandon Ave., Charlottesville, VA 22903', link: 'https://studenthealth.virginia.edu/'},
                    {header: 'Full List of Student Resources', link: 'https://docs.google.com/spreadsheets/d/1cOHmlndC50kTv60pviq2G98Huuva1fsiPkL64XinS0I/edit?usp=sharing'},
                ]
        }
    ]

/*=================LEADERSHIP=====================================================================*/

/* NOTE: the current B&C information has been moved to constants/bncArchive.js with the archived B&Cs */

/* Number of the Current Board and Council */
export const CURRENT_BNC = 37;

/* Youtube embed id of the B&C promo video to be displayed on LeadershipIntro component. You can find this by clicking share,
** embed on the current year's video. If there isn't a video for this year leave equal to empty string '' */
export const B_C_YOUTUBE_EMBED_ID = '';

/* The following constants probably will not need to change often */
/*=================LESS LIKELY TO CHANGE YEAR-TO-YEAR=====================================================================*/
/*=================LESS LIKELY TO CHANGE YEAR-TO-YEAR=====================================================================*/
/*=================LESS LIKELY TO CHANGE YEAR-TO-YEAR=====================================================================*/

/* social media links, used in HomeSocialsAndSignup and Footer */
export const FACEBOOK_LINK = 'https://www.facebook.com/groups/oyfaatuva/';
export const INSTAGRAM_LINK = 'https://www.instagram.com/oyfaatuva/';
export const YOUTUBE_LINK = 'https://www.youtube.com/user/uvaOYFA';
export const TWITTER_LINK = 'https://twitter.com/oyfaatuva';

/*=================COMMON=====================================================================*/

export const OYFA_AGE = new Date().getFullYear() - 1988;
export const MAX_WIDTH = '1000px' //Maximum window width to classify screen as "Mobile" before it minimizes to the "tab" form

/* These are the tabs to render on the Navbar, expect to add more if you add more pages (make sure to Route those in
** App.jsx within the router) */
export const NAVBAR_TABS = [
    { name: "ABOUT", url: "/about"},
    { name: "EVENTS", url: "/events"},
    { name: "LINKS", url: "/links"},
    { name: "LEADERSHIP", url: "/leadership"},
    { name: "MERCH", url: "/merch" },
    { name: "ARCHIVES", url: "/archives"},
];

/* Mailchimp WIO Root Form Posting Link, used in EmailSignup */
export const MAILCHIMP_BASE_URL = 'https://oyfaatuva.us4.list-manage.com/subscribe/post-json?u=06c31be345165e241d2affc73&amp;id=11be915f14&amp;f_id=00ad07e9f0;tag=1785772'

/* Github link, used in footer */
export const GITHUB_LINK = 'https://github.com/oyfaatuva/oyfa-website'

/*=================SOCIAL MEDIA=====================================================================*/
/* Common Social Media Handles Array for passing as props to SocialMedia.js routine */
import { faYoutube, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

/* Textless Social Media Handles Array for passing as props to SocialMedia.js routine, used in footer */
export const SOCIAL_MEDIA_HANDLES_NO_TEXT = [
    {icon: faFacebook, link: FACEBOOK_LINK},
    {icon: faInstagram, link: INSTAGRAM_LINK},
    {icon: faYoutube, link: YOUTUBE_LINK},
    {icon: faXTwitter, link: TWITTER_LINK}
]

export const SOCIAL_MEDIA_HANDLES = [
    {socialHandle: '@oyfaatuva', icon: faFacebook, link: FACEBOOK_LINK},
    {socialHandle: '@oyfaatuva', icon: faInstagram, link: INSTAGRAM_LINK},
    {socialHandle: '@uvaOYFA', icon: faYoutube, link: YOUTUBE_LINK},
    {socialHandle: '@oyfaatuva', icon: faXTwitter, link: TWITTER_LINK}
]

/*=================ABOUT=====================================================================*/
/* Dr. Rob Labuguen quote on About page, here for conciseness */
export const ABOUT_QUOTE_TEXT = "In 1988 Cyn Romero, Brod Bello, and a few other Filipino students wanted to form an organization that stood out from the other ones that already existed. They wanted one that would be more inclusive, not one that isolated itself from outsiders. This new organization was never meant to be exclusive at all. Its members fully welcomed anyone, Filipino or not, who wanted to hang out with them and who could tolerate − or even contribute to − their quirkiness. To say ‘I can′t join OYFA; I′m not Filipino’ was not a good enough reason not to join; we′d reply, ‘So?’ Moreover, they wanted to be more involved in other parts of the University, not just their own members. Primarily, they wanted the members to have fun, while at the same time learning to get along, work, and have fun. Most important of all, the organization′s members would learn something about their own culture and would share it with others. Why? To truly understand Filipinos − and therefore ourselves − we really need to know where we have come from. So, OYFA was born..."

/* Present-day OYFA info on About page, you may want to change this */
export const ABOUT_PRESENT_TEXT = `OYFA is a multi-generational organization now spanning ${OYFA_AGE} concurrent years as a mature CIO at the University of Virginia. In those years, the organization has accumulated a wealth of history, achievement, and accolades. Now far beyond its origins as a purely social club, the organization has evolved to take on a concrete mission and vastly expanded in influence and membership.`

/*=================ARCHIVES=====================================================================*/
/* File info which will be rendered on the Archives page */
export const FILES = 
[
    {name: 'OYFA Constitution', imgSrc: './images/archives/Archives_Preview_Constitution.png', link: '/files/OYFAConsitution.pdf'},
    {name: 'B&C Archive', imgSrc: './images/archives/Archives_Preview_B&C_Archive.png', link: '/files/Archives_B&C_Archive.pdf'},
    {name: 'Solidarity Statement', imgSrc: './images/archives/Archives_Preview_Solidarity_Statement.png', link: '/files/Archives_Solidarity_Statement.pdf'},
    {name: '2019-2023 Website', link: 'https://oyfaatuva.github.io/old-oyfa-website/'},
    {name: '2013-2018 Website', link: 'https://old.oyfaatuva.com'},
    {name: 'The Pensionado', link: 'https://modernpensionado.wordpress.com/the-pensionado/'}
]

/*=================ADMIN==========================================================================*/
import { faHouse, faShirt } from "@fortawesome/free-solid-svg-icons";

export const ADMIN_TABS = {
    dashboard: { name: "Dashboard", icon: faHouse, url: "/admin/dashboard" },
    merch: { name: "Merch", icon: faShirt, url: "/admin/merch" },
};