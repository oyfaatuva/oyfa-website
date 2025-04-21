import { useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import styles from '../Stylesheets/MerchItemPopUp.module.css'

export default function MerchItemPopUp({ item, handleClose, imageDir }) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    let sliderRef = useRef(null);
    const imagesNonEmpty = item.images.length > 0;

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

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setCurrentPhotoIndex(next);
        },
    };

    return (
        <motion.div
            className={styles.popup_tab}
            variants={popUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <div className={styles.popup_container}>
                <div className={styles.close} onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></div>
                <div className={styles.gallery_column}>
                    <div className={styles.gallery}>
                        <div className={styles.gallery_images_column}>
                            {item.images.map((imageName, index) => (
                                <div key={index} className={styles.gallery_images_container}>
                                    <img key={index} src={imageDir + imageName} onClick={() => {sliderRef.slickGoTo(index); setCurrentPhotoIndex(index)}} style={currentPhotoIndex === index ? {outline: '3px solid'} : {}}/>
                                </div>
                            ))}
                        </div>
                        
                        {item.images.length > 1 ?
                        <div className={styles.main_image_slider}>
                            <Slider ref={slider => {sliderRef = slider;}} {...sliderSettings}>
                                {item.images.map((imageName, index) => (
                                    <div key={index} className={styles.slider_image_container}>
                                        <img src={imageDir + imageName}/>
                                    </div>
                                ))}
                            </Slider>
                        </div>  
                        :
                        <div className={styles.image_container}>
                            {imagesNonEmpty ? <img src={imageDir + item.images[0]}/> : <p>No photos</p> }
                        </div> 
                        }               
                    </div>
                </div>

                <div className={styles.info_column}>
                    <div className={styles.info_container}>
                        <p className={styles.info_name}>{item.name}</p>
                        <p className={styles.info_category}>{item.category.toUpperCase()}</p>
                        <p className={styles.info_description}>{item.description}</p>
                    </div>
                    <p className={styles.info_price}>{`$${parseFloat(item.price).toFixed(2)}`}</p>
                    <p>Remaining Stock: {item.stock}</p>
                    <h3><a href="https://forms.office.com/r/YiT7Cakize" target="_blank">Buy it now!</a></h3>
                </div>
            </div>
        </motion.div>
    );
}