import { HashLink } from 'react-router-hash-link';
import AppearingDiv from '../../../../components/ui/AppearingDiv/AppearingDiv';
import styles from './LeadershipGallery.module.css'
import { useSearchParams } from 'react-router-dom';

export default function LeadershipGallery ({ bnc, combinedBoardSection = false }) {
    
    return(
        <>
            <h1 className={styles.gallery_heading}>BOARD</h1>
            {combinedBoardSection ?
                <BoardRow board={bnc[0]}/>
                :
                <CommitteeGrid committees={bnc.slice(0, 6)} />
            }
            <h1 className={styles.gallery_heading}>COUNCIL</h1>
            <CommitteeGrid committees={bnc.slice(combinedBoardSection ? 1 : 6)} />
        </>
    )
}

function BoardRow ({ board }) {
    const [searchParams] = useSearchParams();

    return (
        <AppearingDiv className={styles.board_container}>
            <div className={styles.board_img_container}>
                <HashLink to={{pathname: 'bios', search: searchParams.get('bnc') ? `bnc=${searchParams.get('bnc')}` : '', hash: board.committeeName}}>
                    <img src={board.committeeImgSrc} loading='lazy'/>
                </HashLink>
            </div>
            <div className={styles.board_text}>
                {board.bios.map((bio, index) => (
                    <div className={styles.person_text_container}>
                        {bio.text?.map((personText, index2) => (
                            <PersonText key={index + index2} name={personText.name} major={personText.major} email={personText.email} />
                        ))}
                        <h1 className={styles.person_title}>{bio.committeeTitle.toUpperCase()}</h1>
                    </div>
                ))}
            </div>
        </AppearingDiv>
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
    const [searchParams] = useSearchParams();

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
                <>
                    {bio.text?.map((personText, index2) => (
                        <PersonText key={index + index2} name={personText.name} major={personText.major} email={personText.email} />
                    ))}
                    {bio.name && <PersonText key={index} name={bio.name}/>}
                </>
            ))}
        </>

    return(
        <AppearingDiv>
            <div className={styles.person_img_container}>
                <HashLink to={{pathname: 'bios', search: searchParams.get('bnc') ? `bnc=${searchParams.get('bnc')}` : '', hash: committee.committeeName}}>
                    <img src={committee.committeeImgSrc} loading='lazy'/>
                </HashLink>
            </div>

            {infoComponent}
            {titleComponent}
        </AppearingDiv> 
    )
}

function PersonText ({ name, major, email }) {
    return(
        <div className = {styles.person_text_container}>
            {name && <h2 className = {styles.person_name}>{name}</h2>}
            {/* {major && <h2 className = {styles.person_major}>{major}</h2>}
            {email && <h2 className = {styles.person_email}>{email}</h2>} */}
        </div>
    )
}

