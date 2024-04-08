import { useState } from "react";
import { motion } from 'framer-motion';

export default function FadeOnLoadImg({ imgPath, alt, className, style }) {   
    const [loaded, setImageLoaded] = useState(false);

    const imageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: loaded ? 1 : 0
          }}
          transition={
            { opacity: { delay: 0.5, duration: 0.4 } }
          }
          onLoad={imageLoaded}
          className={className}
          style={style}
          src={imgPath}
          alt={alt}
        />
    );
}