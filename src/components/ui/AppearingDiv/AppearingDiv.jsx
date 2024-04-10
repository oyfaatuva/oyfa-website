import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AppearingDiv ({ children, className, style, translateY = 30, verticalThreshold = 200, duration = 0.5 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: `0px ${verticalThreshold}px -50px 0px` });

    return (    
        <div className={className} ref={ref} style={{
            transform: isInView ? "none" : `translateY(${translateY}px)`,
            opacity: isInView ? 1 : 0,
            transition: `opacity ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, transform ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
            ...style
        }}>
            {children}  
        </div>
    );
};  