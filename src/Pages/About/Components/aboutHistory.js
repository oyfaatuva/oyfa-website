import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/aboutHistory.css'
import { ABOUT_QUOTE_TEXT, ABOUT_PRESENT_TEXT } from '../../../Constants'

/* This file renders the first section, titled 1988 and {currYear}, of the About page. No fancy classes or usages here */

export default class History extends Component{
    render(){
        const currYear = new Date().getFullYear();

        return(
            /* quote section
            ** will render the quote and some decorative quotation marks on the left and right. There is some trouble in
            ** aesthetically aligning these quotation marks so keep playing with it. */
            <div className = 'history_background'>
                <h1 className = 'history_heading'>1988</h1>
                <p className = 'history_text'>NOTE: this text here and the row of dogs below are placeholders and will be rewritten with a brief history of OYFA :)</p>

                <div className = 'history_quote_parent'>
                    {/*alternative quotation mark outside of the <p> - <h1 className = 'history_quotation1'>"</h1>*/}
                    <p>
                        <span className = 'quotation1_bold'>
                            "
                        </span>

                        <span className = 'history_quote'>
                            {ABOUT_QUOTE_TEXT}
                        </span>

                        <span className = 'quotation2_bold'>
                            "
                        </span>
                    </p>
                    {/*alternative quotation mark outside of the <p> - <h1 className = 'history_quotation2'>"</h1>*/}
                    <p className = 'history_quote_author'> - Dr. Ron Labuguen</p>
                </div>

            {/* Image section */}
            <div className = 'row history_img_parent'>
                <HistoryRowImg imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/88e00a32-ab93-4095-bc14-e7929e1c1989_rw_600.jpg?h=468a567abffadea77e4bd188805b3490'/>
                <HistoryRowImg imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/88e00a32-ab93-4095-bc14-e7929e1c1989_rw_600.jpg?h=468a567abffadea77e4bd188805b3490' />
                <HistoryRowImg imgSrc = 'https://cdn.myportfolio.com/9755d902-8051-452b-84dd-f728e491ca8f/88e00a32-ab93-4095-bc14-e7929e1c1989_rw_600.jpg?h=468a567abffadea77e4bd188805b3490' />
            </div>

            {/* Today section*/}
                <h1 className = 'history_heading'>{currYear}</h1>
                <div className = 'history_quote_parent'>
                    <p className = 'history_quote'>{ABOUT_PRESENT_TEXT}</p>

                <div className = 'row award_img_container'>
                    <HistoryRowImg imgSrc = './Images/About/About_Successful_People.jpeg'/>
                    <HistoryRowImg imgSrc = './Images/About/About_CIO_Award.jpg' />
                    <HistoryRowImg imgSrc = './Images/About/About_Trophy.jpeg' />    
                </div>

                </div>
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Renders a single image for the row of images below the quote. Just a img inside a div for conciseness.
**  PROPS:
**      imgSrc: string, link to the image
**  RETURNS:
**      Just a image inside a col-4. You can make a seperate prop for custom column size later.
**==============================================================================================================*/
class HistoryRowImg extends Component{
    render(){
        const imgSrc = this.props.imgSrc

        return(
            <div className = 'col-4'>
                <img className = 'history_img' src = {imgSrc}></img>
            </div>
        )
    }
}