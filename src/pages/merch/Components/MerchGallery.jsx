import styles from '../Stylesheets/MerchGallery.module.css'

export default function MerchGallery({ merch, setCurrentItem = null, imageDir }) {
    return (
        <div className={styles.merch_grid_container}>
            <div className={styles.merch_grid}>
                {merch.map((merchItem, index) => (
                    <MerchItem key={index} item={merchItem} setCurrentItem={setCurrentItem} imageDir={imageDir}/>
                ))}
            </div>
        </div>
    );
}

function MerchItem({ item, setCurrentItem, imageDir }) {
    return (
        <div className={styles.merch_container} style={{ cursor: 'pointer' }} onClick={() => setCurrentItem(item)}>
            <div className={styles.merch_img_container}>
                {item.images && item.images.length > 0  && 
                <img src={imageDir + item.images[0]}/>}
            </div>
            <p className={styles.merch_category}>{item.category.toUpperCase()}</p>
            <p className={styles.merch_name}>{item.name}</p>
            <p className={styles.merch_price}>{`$${parseFloat(item.price).toFixed(2)}`}</p>
            <p>{item.stock > 0 ? item.stock + ' IN STOCK': 'OUT OF STOCK'}</p>
        </div>
    );
}