import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Slider from 'react-slick';

import styles from './EditMerchForm.module.css'

export default function EditMerchForm() {
    const [item, imageDir] = useOutletContext();
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    let sliderRef = useRef(null);
    const imagesNonEmpty = item.images.length > 0;

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
        <div className={styles.popup_container}>
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
                <h3>Remaining Stock: {item.stock}</h3>
            </div>
        </div>
    );  
}