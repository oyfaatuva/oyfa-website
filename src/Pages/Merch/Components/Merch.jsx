import { useState } from 'react';
import HalfTitle from './../../../components/layout/HalfTitle/HalfTitle';
import MerchCarousel from './MerchCarousel';
import MerchGallery from './MerchGallery';
import MerchItemPopUp from './MerchItemPopUp';

import axiosClient from '../../../utils/axiosClient';
import { useLoaderData } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const IMAGE_DIR = 'images/merch/'

export default function Merch() {
    const [currentItem, setCurrentItem] = useState(null);

    const setMerchItem = (item) => {setCurrentItem(item); }
    const closeItem = () => setCurrentItem(null);

    const items = useLoaderData();
    
    var testList = [
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.01, stock: 20, images: ['seb2.jpg']},
        {category: 'me', name: 'Basty', price: 2, stock: 1, images: ['realseb.jpg']},
        {category: "Unisex Hoodie, XS-XL", name: "Super duper awesome hoodie", price: 35, stock: 20, images: ['megathrowback.jpg']},
        {category: "Holographic Sticker", name: "35th OYFA Decal", price: 3, stock: 0, images: ['throwback.jpg']},
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.078, stock: 0, images: ['OYFABuddy3.JPG']},
        {category: "Unisex T-Shirt, S-L", name: "2023 Barrio T-Shirt", price: 25.078, stock: 0, images: ["SamExample.JPG", "SamExample.JPG", "SamExample.JPG"]}]
    

    const GALLERY_IMAGES = ['/images/merch/seb1.jpg', '/images/merch/seb1.jpg' , '/images/merch/seb1.jpg'];
    // const [items, setItems] = useState([]);

    // const fetch = () => {
    //     let apiGET = "/api/merch";
    //     axios
    //         .get(import.meta.env.VITE_API_URL + apiGET, { params: {key: import.meta.env.VITE_API_KEY}})
    //         .then((response) => setItems(response.data));
    // };

    // useEffect(() => {
    //     fetch();
    // }, []);

    return(
        <>
            <ScrollRestoration/> {/* Included here and not anywhere else because for some reason using a loader resets scroll position */}
            <HalfTitle header = 'Merch' imgSrc = {'/images/merch/OyfaBuddyBanner.JPG'} brightness={75} position={55} caption='Order Now!'/>
            <MerchCarousel images={GALLERY_IMAGES}/>
            <MerchGallery merch={items} setCurrentItem={setMerchItem} imageDir={IMAGE_DIR}/>

            <AnimatePresence
                initial={false}
                mode="wait"
            >
                {currentItem && <MerchItemPopUp item={currentItem} handleClose={closeItem}/>}
            </AnimatePresence>
        </>
    );  
}

export async function merchLoader() {
    try {
        const response = await axiosClient.get('/merch');
        console.log(response)        
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}