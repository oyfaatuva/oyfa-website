import { Suspense, useState } from "react";
import { Await, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import axiosClient from "../../../utils/axiosClient";
import { MerchItem } from "../../merch/Components/MerchGallery";
import UniformGrid from "../../../components/ui/UniformGrid/UniformGrid";

import styles from './AdminMerch.module.css'; 

const IMAGE_DIR = 'images/merch/'

export default function AdminMerch() {
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    const [viewSelected, setViewSelected] = useState('gallery');

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        stock: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleOnBlur = (e) => {
        if (!e.target.validity.valid) {
            e.target.value = '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {              
            const exampleFormData = {
                name: "ItemA",
                category: "TestItem",
                price: 12.00,
                stock: 10,
                description: "Test Item added through API"
            };

            const response = await axiosClient.post('/merch', formData);
            const data = await response.data;
            console.log(response);
        
            if (data.status === 200) {
                alert('Sucessfully inserted');
                window.location.reload();
            }
            else {
                alert('Could not insert');
            }        
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('No longer authenticated. Please login again')
            } else {
                console.error('Error:', error.message);
            }
        }

    };

    return (
        <>
            <div className={styles.view_bar}>
                <button className={styles.view_bar_button + ' ' + (viewSelected === 'gallery' ? styles.view_bar_button_selected : '')} onClick={() => setViewSelected('gallery')}>Gallery</button>
                <button className={styles.view_bar_button + ' ' + (viewSelected === 'table' ? styles.view_bar_button_selected : '')} onClick={() => setViewSelected('table')}>Table</button>
            </div>
            <Suspense
                fallback={<p>Loading merchandise...</p>}
            >
                <Await
                    resolve={loaderData.merch}
                    errorElement={
                        <p>Error loading merchanise</p>
                    }
                >
                    {(merch) => {
                        const [visibleMerch, setVisibleMerch] = useState(merch.filter(merchItem => merchItem.visible === 1 && merchItem.approved === 1));
                        const hiddenMerch = merch.filter(merchItem => merchItem.visible === 0 && merchItem.approved === 1);
                        const unapprovedMerch = merch.filter(merchItem => merchItem.approved !== 1);

                        const [draggedIndex, setDraggedIndex] = useState(null);

                        if(viewSelected === 'gallery') {
                            return (
                            <> 
                                <h2>Visible Merch</h2>
                                <UniformGrid gridGap={10}>
                                    {visibleMerch.map((item, index) => (
                                        <UniformGrid.DraggableItem key={item.id} index={index} items={visibleMerch} setItems={setVisibleMerch} draggedIndex={draggedIndex} setDraggedIndex={setDraggedIndex}>
                                            <MerchItem item={item} imageDir={IMAGE_DIR}/>
                                            <div className={styles.edit_button_container}>
                                                <button className={styles.edit_button} onClick={() => navigate(`/admin/merch/${item.id}`)}>EDIT</button>
                                            </div>
                                        </UniformGrid.DraggableItem>
                                    ))}
                                </UniformGrid>

                                {hiddenMerch.length > 0 && <h2>Hidden Merch</h2>}
                                <UniformGrid gridGap={10}>
                                    {hiddenMerch.map(item => (
                                        <UniformGrid.Item key={item.id}>
                                            <MerchItem item={item} imageDir={IMAGE_DIR}/>
                                        </UniformGrid.Item>
                                    ))}
                                </UniformGrid>

                                {unapprovedMerch.length > 0 && <h2>Pending Approval</h2>}
                                <UniformGrid gridGap={10}>
                                    {unapprovedMerch.map(item => (
                                        <UniformGrid.Item key={item.id}>
                                            <MerchItem item={item} imageDir={IMAGE_DIR}/>
                                        </UniformGrid.Item>
                                    ))}
                                </UniformGrid>
                                
                            </>
                            );
                        }
                        else {
                            return (<p>TableView</p>);
                        }
                    }}
                </Await>
            </Suspense>

            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form_input" maxLength="50" required/>
                <input type="text" id="category" name="category "value={formData.category} onChange={handleChange} placeholder="Category" className="form_input" maxLength="50" required/>
                <input type="number" step="0.01" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form_input" min="0" max="999" onBlur={handleOnBlur} required/>
                <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="form_input" min="0" max="999" onBlur={handleOnBlur} required/>
                <textarea  type="text" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Descrition" className="form_input" maxLength="600" required/>
                <button type="submit" className="button">CREATE</button>
            </form>

            <Outlet/>
        </>
    );
}