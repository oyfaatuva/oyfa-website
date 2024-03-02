import styles from '../Stylesheets/MerchGallery.module.css'

export default function MerchGallery({ merch }) {
    return (
        <div className={styles.merch_grid_container}>
            <p className={styles.merch_gallery_title}>Collection</p>
            <div className={styles.merch_grid}>
                {merch.map((merchItem, index) => (
                    <MerchItem key={index} item={merchItem}/>
                ))}
            </div>
        </div>
    );
}

function MerchItem({ item }) {
    return (
        <div className={styles.merch_container} style={{ cursor: 'pointer' }}> {/* Remember: This is the button (not the img) */}
            <div className={styles.merch_img_container}>
                <img src={item.imgPath} />
            </div>
            <p className={styles.merch_category}>{item.category.toUpperCase()}</p>
            <p className={styles.merch_name}>{item.name}</p>
            <p className={styles.merch_price}>{item.price}</p>
        </div>
    );
}