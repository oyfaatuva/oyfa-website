import { motion } from "framer-motion"
import styles from '../Stylesheets/MerchItemPopUp.module.css'

export default function MerchItemPopUp({ item, handleClose, imageDir }) {
    const dropIn = {
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
            className={styles.item_container}
            variants={dropIn}
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
                <button onClick={handleClose}>Close</button>
            </div>
        </motion.div>
    );
}