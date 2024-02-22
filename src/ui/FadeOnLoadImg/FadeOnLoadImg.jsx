import { useEffect, useState } from "react";
import styles from "./FadeOnLoadImg.module.css"

export default function FadeOnLoadImg({ imgPath, alt, className}) {   
    const [loaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
          setImageLoaded(true);
        };
        image.src = imgPath;
    
        return () => {
          image.onload = null;
        };
      }, []);

    return (
        <>
        {loaded && (
            <img src={imgPath} alt={alt} className={styles.fade_in_image + ' ' + (className || '')} />
        )}
        </>  
    );
}