import { useState} from 'react'
import { motion } from "framer-motion"

import styles from '../Stylesheets/LeadershipArchive.module.css'
import { BNC_ARCHIVE } from '/src/Constants'
import { toOrdinalNumber } from '../../../util/toOrdinalNumber';

export default function LeadershipArchive() {
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
                <ArchiveGrid archive={BNC_ARCHIVE}/>
            </motion.div>

        </div>
    )   
}

function ArchiveGrid({ archive }) {
    return (
        <div className={styles.archive_grid}>
            {archive.map((bnc, index) => (
                <ArchivedBNC key={index} bnc={bnc}/>
            ))}
        </div>
    );
}

function ArchivedBNC({ bnc }) {
    return (
        <div className={styles.archived_bnc_container}>
            <div className={styles.archived_bnc_img_container}>
                <img src={bnc.imgPath}/>
            </div>
            <p className={styles.archived_bnc_title}>{`${toOrdinalNumber(bnc.bncNum)} BOARD AND COUNCIl`}</p>
        </div>
    );
}