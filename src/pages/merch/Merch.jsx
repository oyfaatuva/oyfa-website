import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router';
import { defer, Await } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from "framer-motion";
import axiosClient from '../../utils/axiosClient';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import MerchGallery from './Components/MerchGallery';

// Async Component for code splitting
const MerchCarousel = React.lazy(() => import('./Components/MerchCarousel'));
const MerchItemPopUp = React.lazy(() => import('./Components/MerchItemPopUp'));

import styles from './Merch.module.css';

const IMAGE_DIR = 'images/merch/'

export default function Merch() {
    const {setTransition} = useOutletContext();
    const [currentItem, setCurrentItem] = useState(null);

    const loaderData = useLoaderData();

    const setMerchItem = (item) => {setCurrentItem(item); setTransition(false)}
    const closeItem = () => {setCurrentItem(null); setTransition(true);};

    var networklessItemList = [
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.01, stock: 20, images: ['seb2.jpg']},
        {category: 'me', name: 'Basty', price: 2, stock: 1, images: ['realseb.jpg']},
        {category: "Unisex Hoodie, XS-XL", name: "Super duper awesome hoodie", price: 35, stock: 20, images: ['megathrowback.jpg']},
        {category: "Holographic Sticker", name: "35th OYFA Decal", price: 3, stock: 0, images: ['throwback.jpg']},
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.078, stock: 0, images: ['OYFABuddy.JPG']},
        {category: "Unisex T-Shirt, S-L", name: "2023 Barrio T-Shirt", price: 25.078, stock: 0, images: ["SamExample.JPG", "SamExample.JPG", "SamExample.JPG"]}]
    
    const GALLERY_IMAGES = ['Komiks_Banner.png', 'beAModelIBeg.jpg' , 'seb.jpg'];

    useEffect(() => {
        if(currentItem == null)
            document.body.style.overflow = 'visible';
        else
            document.body.style.overflow = 'hidden';
     }, [currentItem]);

    return(
        <>
            <Helmet><title>Merch</title></Helmet>
            <HalfTitle header = 'Merch' imgSrc = {'/images/merch/OyfaBuddyBanner.JPG'} position={55} caption='Order Now!' captionLink="https://forms.office.com/r/FRGzHXXMQq" newTab />
            
            <div className='mb-4'>
                <p className={styles.gallery_title}>Showcase</p>
                <Suspense>
                    <MerchCarousel images={GALLERY_IMAGES} imageDir={IMAGE_DIR}/>
                </Suspense>
            </div>
            <p className={styles.gallery_title}>Collection</p>
            <Suspense
                fallback={<p>Loading merchandise...</p>}
            >
                <Await
                    resolve={loaderData.merch}
                    errorElement={
                        <p>Error loading merchanise</p>
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

export async function merchLoader() {
    try {
        const merchPromise = axiosClient.get('/merch').then((response) => response.data);
        return defer({merch: merchPromise});
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}