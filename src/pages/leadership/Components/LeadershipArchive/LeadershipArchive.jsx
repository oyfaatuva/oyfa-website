import { useState} from 'react'
import { motion } from "framer-motion"
import { toOrdinalNumber } from '../../../../utils/toOrdinalNumber';

import styles from './LeadershipArchive.module.css'

export default function LeadershipArchive({ archive, updateBnC }) {
    const [isOpen, setIsOpen] = useState(false);

    const archiveVariants = {
        expanded: {
            height: 'auto'
        },
        collapsed: {
            height: '0px'
        }
    }

    return(
        <div className={styles.archive}>
            <p className={styles.archive_button_toggle} onClick={() => setIsOpen(!isOpen)}>
                VIEW PAST B&Cs
            </p>

            <motion.div
                layout 
                className={styles.archive_accordian + " " + (isOpen ? 'expanded' : '')}
                variants={archiveVariants}
                initial='collapsed'
                animate={ isOpen ? 'expanded' : 'collapsed'}
                transition={{ ease: "easeInOut", duration: 0.3 }}
            >
                <div className={styles.archive_container}>
                    <p className={styles.archive_header}>ARCHIVE</p>
                    <div className={styles.archive_grid}>
                        {archive.map((bnc) => (
                            <ArchivedBNC key={bnc.bncNum} bnc={bnc} updateBnC={updateBnC} setIsOpen={setIsOpen}/>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )   
}

function ArchivedBNC({ bnc, updateBnC, setIsOpen }) {
    return (
        <div className={styles.archived_bnc_container}>
            <div className={styles.archived_bnc_img_container}>
                <img src={bnc.imgPath} onClick={() => {setIsOpen(false); updateBnC({ bnc : bnc.bncNum}); }} style={{ cursor: 'pointer', objectPosition: `center ${bnc.position}%` }} />
            </div>
            <p className={styles.archived_bnc_title}>{`${toOrdinalNumber(bnc.bncNum)} BOARD AND COUNCIL`}</p>
        </div>
    );
}