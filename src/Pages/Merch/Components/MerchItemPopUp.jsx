import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from '../Stylesheets/MerchItemPopUp.module.css'

export default function MerchItemPopUp({ item, handleClose, imageDir }) {
    const popUp = {
        hidden: {
            y: "100vh",
        },
        visible: {
            y: "0",
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                stiffness: 600,
            },
        },
        exit: {
            y: "100vh",
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                stiffness: 600,
            },
        },
    };

    return (
        <motion.div
            className={styles.popup_container}
            variants={popUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <div className={styles.image_column}>
                <div className={styles.image_container}>
                {item.images.map((imageName, index) => (
                    <img key={index} src={imageDir + imageName}/>
                ))}
                </div> 
            </div>

            <div className={styles.info_column}>
                <p className={styles.info_name}>{item.name}</p>
                <p>{item.category.toUpperCase()}</p>
                <p className={styles.info_description}>{item.description}</p>
                <p>{`$${parseFloat(item.price).toFixed(2)}`}</p>
                <p>{item.stock}</p>
            </div>
            <div className={styles.close} onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></div>
        </motion.div>
    );
}