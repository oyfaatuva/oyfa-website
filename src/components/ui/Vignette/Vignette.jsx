import style from './Vignette.module.css'

export default function Vignette( {blur = 200, radius = 0, opacity = 0.8} ) {    
    return (
        <div className={style.vignette} style={{boxShadow: `0px 0px ${blur}px ${radius}px rgba(0,0,0,${opacity}) inset`}}/>
    );
}