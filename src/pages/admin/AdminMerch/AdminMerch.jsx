import React, { Suspense, useEffect, useState } from "react";
import { Await, Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { MerchItem } from "../../merch/Components/MerchGallery";
import UniformGrid from "../../../components/ui/UniformGrid/UniformGrid";
import WideModal from "../../../components/ui/PopUpTab/WideModal";
import CreateMerchForm from "./Components/CreateMerchForm";

import styles from './AdminMerch.module.css'; 

const IMAGE_DIR = 'images/merch/'

export default function AdminMerch() {
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    const { itemId } = useParams();
    const [viewSelected, setViewSelected] = useState('gallery');

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
                        const [visibleMerch, setVisibleMerch] = useState(merch.filter(merchItem => merchItem.approved === 1));
                        const hiddenMerch = merch.filter(merchItem => merchItem.visible === 0 && merchItem.approved === 1);
                        const unapprovedMerch = merch.filter(merchItem => merchItem.approved !== 1);

                        const [draggedIndex, setDraggedIndex] = useState(null);

                        if(viewSelected === 'gallery') {
                            return (
                            <> 
                                <WideModal open={itemId != undefined} closeLink={'/admin/merch'}>
                                    <Outlet context={[merch.find(item => item.id == itemId)]}/>
                                </WideModal>
                               
                                <h2>Visible Merch</h2>
                                <UniformGrid gridGap={10}>
                                    {visibleMerch.map((item, index) => (
                                        <UniformGrid.DraggableItem key={item.id} index={index} items={visibleMerch} setItems={setVisibleMerch} draggedIndex={draggedIndex} setDraggedIndex={setDraggedIndex}>
                                            <MerchItem item={item} imageDir={IMAGE_DIR} setCurrentItem={() => {return}}/>
                                            <div className={styles.edit_button_container}>
                                                <button className={styles.edit_button} onClick={() => navigate(`/admin/merch/${item.id}`)}>EDIT</button>
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
                            </>
                            );
                        }
                        else {
                            return (
                                <p>TableView</p>
                            );
                        }
                    }}
                </Await>
            </Suspense>

            <CreateMerchForm/>
        </>
    );
}