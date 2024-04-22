import React, { Suspense, useState } from "react";
import { Await, Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { MerchItem } from "../../merch/Components/MerchGallery";
import UniformGrid from "../../../components/ui/UniformGrid/UniformGrid";
const PopUpTab = lazy(() => import('../../../components/ui/PopUpTab/PopUpTab'));
import CreateMerchForm from "./Components/CreateMerchForm";

import styles from './AdminMerch.module.css'; 

const IMAGE_DIR = 'images/merch/'

export default function AdminMerch() {
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    const { itemId } = useParams();
    const [viewSelected, setViewSelected] = useState('gallery');

    return (
        <div className={styles.content}>
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
                        const originalMerchOrder = merch.filter(merchItem => merchItem.approved === 1);
                        const [visibleMerch, setVisibleMerch] = useState(originalMerchOrder);
                        const unapprovedMerch = merch.filter(merchItem => merchItem.approved !== 1);
                        const [draggedIndex, setDraggedIndex] = useState(null);

                        return (
                        <> 
                            <PopUpTab open={itemId != undefined} closeLink={'/admin/merch'}>
                                <Outlet context={[merch.find(item => item.id == itemId), IMAGE_DIR]}/>
                            </PopUpTab>

                            <div className={styles.view_bar}>
                                <button className={styles.view_bar_button + ' ' + (viewSelected === 'gallery' ? styles.view_bar_button_selected : '')} onClick={() => setViewSelected('gallery')}>Gallery</button>
                                <button className={styles.view_bar_button + ' ' + (viewSelected === 'table' ? styles.view_bar_button_selected : '')} onClick={() => setViewSelected('table')}>Table</button>
                            </div>

                            {viewSelected === 'gallery' &&
                                <div className={styles.merch_container}>
                                    <h2>Approved Merch</h2>
                                    <UniformGrid gridGap={10}>
                                        {visibleMerch.map((item, index) => (
                                            <UniformGrid.DraggableItem key={item.id} index={index} items={visibleMerch} setItems={setVisibleMerch} draggedIndex={draggedIndex} setDraggedIndex={setDraggedIndex}>
                                                <MerchItem item={item} imageDir={IMAGE_DIR} setCurrentItem={() => {return}}/>
                                                <div className={styles.edit_button_container}>
                                                    <button className={styles.button} onClick={() => navigate(`/admin/merch/${item.id}`)}>EDIT</button>
                                                </div>
                                            </UniformGrid.DraggableItem>
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
                                    
                                    {JSON.stringify(originalMerchOrder) !== JSON.stringify(visibleMerch) &&
                                        <button className={styles.update_order_button + " " + styles.button}>
                                            Update Order
                                        </button>
                                    }
                                    <CreateMerchForm/>
                                </div>
                            }

                            {viewSelected === 'table' && <> 
                            <p>TableView</p>
                            </>}
                        </>
                        );
                    }}
                </Await>
            </Suspense>
        </div>
    );
}