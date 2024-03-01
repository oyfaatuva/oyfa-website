import styles from '../Stylesheets/MerchGallery.module.css'

export default function MerchGallery({ merch }) {
    var merchList = [1,2,3,4,5,6];
    merch = merchList;
    return (
        <div className={styles.merch_grid_container}>
            <div className={styles.merch_grid}>
                {merch.map((merchItem, index) => (
                    <MerchItem key={index}/>
                ))}
            </div>
        </div>
    );
}

function MerchItem({ item }) {
    return (
        <div className={styles.merch_container} style={{ cursor: 'pointer' }}> {/* Remember: This is the button (not the img) */}
            <div className={styles.merch_img_container}>
                <img src={''} />
            </div>
            <p className={styles.merch_name}>MERCH</p>
        </div>
    );
}