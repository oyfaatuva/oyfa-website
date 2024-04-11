import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AppearingDiv ({ children, className, style, translateMeasurement = 30, translateAxis = 'Y', margin = '0px 100px -50px 0px', duration = 0.5, delay = 0.5 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: margin });

    return (    
        <div className={className} ref={ref} style={{
            transform: isInView ? "none" : `translate${translateAxis}(${translateMeasurement}px)`,
            opacity: isInView ? 1 : 0,
            transition: `opacity ${duration}s ease-in-out ${delay}s, transform ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
            ...style
        }}>
            {children}  
        </div>
    );
};  