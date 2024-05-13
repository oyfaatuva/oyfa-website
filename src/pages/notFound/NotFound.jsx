import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'
import { Helmet } from 'react-helmet';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Helmet><title>Not Found - OYFA at UVA</title></Helmet>
            <div className={styles.info_column}>
            <img src='/images/_common/Navbar_OYFA_Logo.png' className={styles.logo}/>
                <h1 className={styles.oops_header}>Oops!</h1>
                <p className={styles.caption}>The page you were looking for doesn't exist.</p>
                <button className={styles.button}>
                    <Link to='/'>Back to Home</Link>
                </button>
            </div>

            <div className={styles.photo_column}>
                <img src='/images/_common/OYFABuddy.JPG' className={styles.photo}/>
            </div>            
        </div>
    );
}