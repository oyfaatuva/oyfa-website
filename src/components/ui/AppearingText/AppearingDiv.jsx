import { useInView } from "framer-motion";
import { useRef } from "react";

import styles from './AppearingDiv.module.css'

export default function AppearingDiv ({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (    
    <div ref={ref} className={isInView ? `${styles.inView }`: `${styles.hidden }`}>
        {children}  
    </div>
  );
};