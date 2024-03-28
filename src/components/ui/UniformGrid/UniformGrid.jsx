import styles from './UniformGrid.module.css'; 

export default function UniformGrid( {gridGap = 20, children} ) {
    return (
        <div className={styles.grid_container} style={{gridGap: `${gridGap}px`}}> 
            {children}
        </div>
    );
}

const Item = ({ children }) => {
    return (
        <div className={styles.grid_item}>
            {children}
        </div>
    );
}

UniformGrid.Item = Item;