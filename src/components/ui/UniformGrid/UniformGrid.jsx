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
        <div className={styles.grid_item} >
            {children}
        </div>
    );
}

const DraggableItem = ({ index, items, setItems, draggedIndex, setDraggedIndex, children }) => {
    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
        setDraggedIndex(index);
    };
    
    const handleDrop = (e, targetIndex) => {
        e.preventDefault();
        const startIndex = e.dataTransfer.getData('index');
        const draggedItem = items[startIndex];
    
        const newItems = items.filter((item, index) => index !== parseInt(startIndex));

        newItems.splice(targetIndex, 0, draggedItem);
    
        setItems(newItems);
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
    };

    return (
        <div 
            className={`${styles.grid_item} ${index === draggedIndex ? styles.dragging : ''}`} 
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
        >
            {children}
        </div>
    );
}

UniformGrid.Item = Item;
UniformGrid.DraggableItem = DraggableItem;