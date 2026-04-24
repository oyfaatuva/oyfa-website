import {Component} from 'react'
import '../Stylesheets/LinksLinkGallery.css';
import { LINKS } from '../../../Constants';

/* Uses LINKS, an array of link sections which are themselves arrays of links, to render the LinkGallery */
export default class LinkGallery extends Component{
    render(){

        return(
            <>
                {LINKS.map((section, index) => (
                        <LinkSection key = {index} sectionTitle = {section.sectionTitle} links = {section.links} columns = {section.columns}/>
                ))}
            </>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Renders a grouping of links that have something in common. Will have a header at the top with an optional
**      image, and then a series of Link components.
**  PROPS:
**      sectionTitle: string, main h1 text to describe the group
**      links:        array of strings, will be mapped over to create Link components.
**  OPTIONAL PROPS:
**      imgSrc: string, path to your group image below the header
**  RETURNS:
**      Link component, which is an h1, p, and possible img rigged with a link.
**==============================================================================================================*/
class LinkSection extends Component{
    render(){
        const sectionTitle = this.props.sectionTitle
        const links        = this.props.links
        const imgSrc       = this.props.imgSrc
        const columns  = this.props.columns || 2

        return(
            <div>
                <h1 className = 'link_section_heading'>{sectionTitle}</h1>
                {imgSrc && <img className = 'link_img_container' src = {imgSrc}/>}
                <div className={`links_container ${columns === 3 ? "three_col" : "two_col"}`}>
                    {links.map((link, index) => (
                        <Link key = {index} header={link.header} para={link.para} imgSrc={link.imgSrc} link={link.link} featured={link.featured}/>
                    ))}
                </div>
                <hr/>
            </div>
        )
    }
}

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Pass the header text, caption paragraph text, a link, and an optional descriptive image to create a single
**      link component for the link gallery. The header is underlined but the caption isn't, if you want otherwise
**      change the CSS.
**  PROPS:
**      header: string, main h1 text to describe what the link is
**      header: string, caption p text to further describe what the link is
**      link:   string, link to your website of choice. The whole component will be linked.
**  OPTIONAL PROPS:
**      imgSrc: string, path to your descriptive image
**  RETURNS:
**      Link component, which is an h1, p, and possible img rigged with a link.
**==============================================================================================================*/
class Link extends Component{
    render(){
        const imgSrc = this.props.imgSrc;
        const header = this.props.header;
        const para   = this.props.para;
        const link   = this.props.link;

        return(
            <div className={`link_container ${this.props.featured ? "featured_link" : ""}`}>

                <a href = {link} target='_blank' className = 'link_anchor'>

                    {imgSrc && (
                        <div className='link_img_container'>
                            <img src={imgSrc}/>
                        </div>
                    )}
                    <div className = 'link_text_container'>
                    <h1 className = 'link_heading'>
                        {header}
                    </h1>

                    <p className = 'link_paragraph'>
                        {para}
                    </p>
                    </div>
                </a>
            </div>
        )
    }
}