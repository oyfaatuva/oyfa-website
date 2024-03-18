import React, {Component} from 'react'
import '../Stylesheets/LeadershipIntro.css';
import { B_C_YOUTUBE_EMBED_ID } from '/src/Constants';
import YoutubeEmbed from './../../../components/media/YoutubeEmbed/YoutubeEmbed';
import { toOrdinalNumber } from './../../../utils/toOrdinalNumber';

export default class LeadershipIntro extends Component{
    render(){
        var YoutubeComponent = <></>
        if(B_C_YOUTUBE_EMBED_ID != '') 
            var YoutubeComponent = <div className='leadership_youtube_container'><YoutubeEmbed embedId={B_C_YOUTUBE_EMBED_ID} embedWidth='50%' embedHeight='440px'/></div>

        return(
            <>
                <h1 className = 'leadership_heading'>{toOrdinalNumber(this.props.bncNum)} BOARD & COUNCIL</h1>        
                {YoutubeComponent}
            </>
        )
    }
}