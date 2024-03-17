import { useState} from 'react'
import { motion } from "framer-motion"
import { toOrdinalNumber } from '../../../utils/toOrdinalNumber';
import { BNC_ARCHIVE } from '../../../constants/bncArchive';

import styles from '../Stylesheets/LeadershipArchive.module.css'


export default function LeadershipArchive({ updateBnC }) {
    const [isOpen, setIsOpen] = useState(false);

    const archiveVariants = {
        expanded: {
            height: 'auto'
        },
        collapsed: {
            height: '0px',
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
                <p className={styles.archive_header}>ARCHIVE</p>
                <ArchiveGrid archive={BNC_ARCHIVE} updateBnC={updateBnC}/>
            </motion.div>

        </div>
    )   
}

function ArchiveGrid({ archive, updateBnC }) {
    return (
        <div className={styles.archive_grid}>
            {archive.map((bnc, index) => (
                <ArchivedBNC key={index} bnc={bnc} updateBnC={updateBnC}/>
            ))}
        </div>
    );
}

function ArchivedBNC({ bnc, updateBnC }) {
    return (
        <div className={styles.archived_bnc_container}>
            <div className={styles.archived_bnc_img_container}>
                <img src={bnc.imgPath} onClick={() => updateBnC({ bnc : bnc.bncNum})} style={{ cursor: 'pointer' }} />
            </div>
            <p className={styles.archived_bnc_title}>{`${toOrdinalNumber(bnc.bncNum)} BOARD AND COUNCIL`}</p>
        </div>
    );
}