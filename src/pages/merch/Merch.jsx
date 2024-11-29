import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { defer, Await, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from "framer-motion";
import axiosClient from '../../utils/axiosClient';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import MerchGallery, { MerchSkeletonGallery } from './Components/MerchGallery';

// Async Component for code splitting
const MerchCarousel = React.lazy(() => import('./Components/MerchCarousel'));
const MerchItemPopUp = React.lazy(() => import('./Components/MerchItemPopUp'));

import styles from './Merch.module.css';

const IMAGE_DIR = 'images/merch/'

export default function Merch() {
    const [currentItem, setCurrentItem] = useState(null);

    const loaderData = useLoaderData();

    const setMerchItem = (item) => {setCurrentItem(item);}
    const closeItem = () => {setCurrentItem(null); };

    //TODO: Fix bug where carousel doesn't work with just a single image
    const GALLERY_IMAGES = ['Komiks_Banner.png', 'Komiks_Banner.png'];

    useEffect(() => {
        if(currentItem == null)
            document.body.style.overflow = 'visible';
        else
            document.body.style.overflow = 'hidden';
     }, [currentItem]);

    return(
        <>
            <Helmet><title>Merch - OYFA at UVA</title></Helmet>
            <HalfTitle header = 'Merch' imgSrc = {'/images/merch/OyfaBuddyBanner.JPG'} position={55} caption='Order Now!' captionLink="https://forms.office.com/r/FRGzHXXMQq" newTab />
            
            <div className='mb-4'>
                <p className={styles.gallery_title}>Showcase</p>
                <Suspense>
                    <MerchCarousel images={GALLERY_IMAGES} imageDir={IMAGE_DIR}/>
                </Suspense>
            </div>
            <p className={styles.gallery_title}>Collection</p>
            <Suspense
                fallback={<MerchSkeletonGallery/>}
            >
                <Await
                    resolve={loaderData.merch}
                    errorElement={
                        <MerchError/>
                    }
                >
                    {(merch) => (
                        <MerchGallery merch={merch} setCurrentItem={setMerchItem} imageDir={IMAGE_DIR}/>
                    )}
                </Await>
            </Suspense>

            <AnimatePresence
                initial={false}
                mode="wait"
            >
                {currentItem && <Suspense><MerchItemPopUp item={currentItem} handleClose={closeItem} imageDir={IMAGE_DIR}/></Suspense>}
            </AnimatePresence>
        </>
    );  
}

function MerchError() {
    const navigate = useNavigate()

    return (
        <div className={styles.error_container}> 
            <h3>There was an error loading the Merchandise</h3>
            <button className={styles.reload_button} onClick={() => {navigate('.', { replace: true })}}>
                <h4>RELOAD</h4>
            </button>
        </div>
    );
}

export async function merchLoader() {
    try {
        //For forcing rejected Promise to view and test errorElement 
        // return defer({merch: new Promise((resolve, reject) => {
        //     setTimeout( () => reject(('this is an error')) );
        // })})
        
        const merchPromise = axiosClient.get('/merch').then((response) => response.data);
        return defer({merch: merchPromise});
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}