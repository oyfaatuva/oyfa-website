import styles from './Footer.module.css'
import { SOCIAL_MEDIA_HANDLES_NO_TEXT, GITHUB_LINK } from '../../../Constants';
import SocialMedia from './../../ui/SocialMedia/Socialmedia';
import EmailSignup from './../../forms/Emailsignup/Emailsignup';

/********************************************************************************************************************
** This file renders the Footer component, which is a common component that appears on all pages. It contains two
** sections, one with some social media buttons and a WIO signup form, the other with some fine print text and links.
********************************************************************************************************************/

{/*TODO: Something in Footer is overflowing and causing a white bar on the right side of mobile screens */}
export default function Footer () {
    const copyrightYear = new Date().getFullYear()

    const numOfSocialMediaColumns = 3

    return(
        <footer className={`text-muted ${styles.footer}`}>

            {/* Social media and email section */}
            <section className={styles.footer_section}>
                <div className={styles.footer_section_one_parent}>
                    <div className={styles.footer_social_media_parent}>
                        <SocialMedia handles = {SOCIAL_MEDIA_HANDLES_NO_TEXT} numColumns = {numOfSocialMediaColumns}/>
                    </div>
                    <div className={styles.footer_email_parent}>
                        <EmailSignup/>
                    </div>
                </div>
            </section>

            {/* Info section */}
            <section>
                <div className={styles.footer_bottom_text}>
                    {/* We've had this disclaimer on the footer of the website for a while but I don't think it's that important 
                        and imo its ugly lol - Basty*/}
                    {/* <p className = {styles.footer_disclaimer}>
                        Although this organization has members who are University of Virginia students 
                        and may have University employees associated or engaged in its activities and affairs, 
                        the organization is not a part of or an agency of the University. 
                        It is a separate and independent organization which is responsible 
                        for and manages its own activities and affairs. The University does not direct, 
                        supervise or control the organization and is not responsible for the organization's contracts, 
                        acts or omissions.
                    </p> */} 

                    <p className = {styles.footer_paragraph}> {/* have to manually add in the white space */}
                        Website created and maintained by OYFA Webmasters.&nbsp;
                        <a href = {GITHUB_LINK} target = '_blank' className = {styles.footer_anchor}> 
                        Access code here.
                        </a>
                        <br/>
                        Copyright Organization of Young Filipino Americans © {copyrightYear}. All Rights Reserved.
                    </p>
                </div>
            </section>
        </footer>
    )
}
