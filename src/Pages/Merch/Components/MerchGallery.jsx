import styles from '../Stylesheets/MerchGallery.module.css'

export default function MerchGallery({ merch, openItem, setCurrentItem }) {
    return (
        <div className={styles.merch_grid_container}>
            <p className={styles.merch_gallery_title}>Collection</p>
            <div className={styles.merch_grid}>
                {merch.map((merchItem, index) => (
                    <MerchItem key={index} item={merchItem} setCurrentItem={setCurrentItem}/>
                ))}
            </div>
        </div>
    );
}

function MerchItem({ item, setCurrentItem }) {
    return (
        <div className={styles.merch_container} style={{ cursor: 'pointer' }} onClick={() => setCurrentItem(item)}> {/* Remember: Whole thing is the button (not the img) */}
            <div className={styles.merch_img_container}>
                <img src={item.imgPath}/>
            </div>
            <p className={styles.merch_category}>{item.category.toUpperCase()}</p>
            <p className={styles.merch_name}>{item.name}</p>
            <p className={styles.merch_price}>{`$${parseFloat(item.price).toFixed(2)}`}</p>
            <p>{item.stock > 0 ? item.stock + ' IN STOCK': 'OUT OF STOCK'}</p>
        </div>
    );
}