import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function FadeOnLoadImg({ imgPath, alt, className, style, duration = 0.4, inViewRequired = true }) {   
    const [loaded, setImageLoaded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 100px -50px 0px' });

    const imageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <motion.img
          key={imgPath}
          initial={{ opacity: 0 }}
          animate={{
            opacity: loaded && (inViewRequired ? isInView : true) ? 1 : 0
          }}
          transition={
            { opacity: { delay: 0.5, duration: duration } }
          }
          onLoad={imageLoaded}
          className={className}
          style={style}
          src={imgPath}
          alt={alt}
          ref={ref}
        />
    );
}