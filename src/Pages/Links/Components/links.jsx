import {Component} from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../../components/layout/HalfTitle/HalfTitle'
import LinkGallery from './linksLinkGallery';

/* Main export file to index that combines all "links" components */

export default class Links extends Component{
    render(){
        return(
            <div>
                <Helmet><title>Links</title></Helmet>
                <HalfTitle header = 'Links' imgSrc = './images/links/Links_Title_Culturefest.jpeg'
                brightness={90} position={25} />
                <LinkGallery />
            </div>
        )
    }
}