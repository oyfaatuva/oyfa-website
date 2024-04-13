import { HashLink } from 'react-router-hash-link';
import AppearingDiv from '../../../../components/ui/AppearingDiv/AppearingDiv';
import styles from './LeadershipGallery.module.css'

export default function LeadershipGallery ({ bnc }) {
    return(
        <>
            <h1 className={styles.gallery_heading}>BOARD</h1>
            <CommitteeGrid committees={bnc.slice(0, 6)} />

            <h1 className={styles.gallery_heading}>COUNCIL</h1>
            <CommitteeGrid committees={bnc.slice(6)} />
        </>
    )
}

function CommitteeGrid ({ committees }) {
    return(
        <div className={styles.grid_container}>
            {committees.map((committee, index) => (
                <Committee key={index} committee={committee} />
            ))}
        </div>
    )
}

function Committee ({ committee }) {
    /* if title was provided render it */
    if(committee.committeeName) {
        var titleComponent =                 
            <div className={styles.person_text_container}>
                <h1 className={styles.person_title}>{committee.committeeName.toUpperCase()}</h1>
            </div>
    }

    /* for each person in the info array, map over them and render a PersonInfo component with their information */
    var infoComponent = 
        <>
            {committee.bios.map((bio, index) => (
                bio.text.map((personText, index2) => (
                    <div key={index + index2} className={styles.person_info_container}>
                        <PersonText name={personText.name} major={personText.major} email={personText.email} />
                    </div>
                )))
            )}
        </>

    return(
        <AppearingDiv>
            <div className={styles.person_img_container}>
                <HashLink smooth to={'bios#'+committee.bios[0].text.name}> {/* No idea why but when the page is first loaded the first link service will take you to the wrong section but going back a page and trying again it works perfectly...*/}
                    <img src={committee.committeeImgSrc} loading='lazy'/>
                </HashLink>
            </div>

            {infoComponent}
            {titleComponent}
        </AppearingDiv> 
    )
}

function PersonText ({ name, major, email }) {
    let nameComponent
    let majorComponent
    let emailComponent

    if(name)  nameComponent  = <h1 className={styles.person_name}>{name}</h1>
    if(major) majorComponent = <h2 className = {styles.person_major}>{major}</h2>
    if(email) emailComponent = <h2 className = {styles.person_email}>{email}</h2>

    return(
        <div className = {styles.person_text_container}>
            {nameComponent}
            {/* {majorComponent} */}
            {/* {emailComponent} */}
        </div>
        )
}

