import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from '../Stylesheets/MerchItemPopUp.module.css'
import { useState } from "react";

export default function MerchItemPopUp({ item, handleClose, imageDir }) {
    const [currentPhotoName, setPhotoName] = useState(item.images.length > 0 ? item.images[0] : null);

    const popUp = {
        hidden: {
            y: "100vh",
        },
        visible: {
            y: "0",
            transition: {
                duration: 0.03,
                type: "spring",
                damping: 50,
                stiffness: 600,
            },
        },
        exit: {
            y: "100vh",
            transition: {
                duration: 0.03,
                type: "spring",
                damping: 50,
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
            <div className={styles.close} onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></div>
            <div className={styles.gallery_column}>
                <div className={styles.gallery}>
                    <div className={styles.gallery_images_column}>
                        {item.images.map((imageName, index) => (
                            <div className={styles.gallery_images_container} style={{outline: currentPhotoName === imageName ? '2px solid' : 'none' }}>
                                <img key={index} src={imageDir + imageName} onClick={() => setPhotoName(imageName)}/>
                            </div>
                        ))}
                    </div>
                    <div className={styles.image_container}>
                        <img src={imageDir + currentPhotoName}/>
                    </div> 
                </div>
            </div>

            <div className={styles.info_column}>
                <div className={styles.info_container}>
                    <p className={styles.info_name}>{item.name}</p>
                    <p className={styles.info_category}>{item.category.toUpperCase()}</p>
                    <p className={styles.info_description}>{item.description}</p>
                </div>
                <p>{`$${parseFloat(item.price).toFixed(2)}`}</p>
                <p>{item.stock}</p>
            </div>
        </motion.div>
    );
}