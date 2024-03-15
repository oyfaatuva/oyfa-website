import { useState } from 'react';
import HalfTitle from '../../../components/HalfTitle/HalfTitle';
import MerchCarousel from './MerchCarousel';
import MerchGallery from './MerchGallery';
import MerchItemPopUp from './MerchItemPopUp';

import axios from 'axios';
import axiosClient from '../../../axios-client';
import { useLoaderData } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function Merch() {
    const [currentItem, setCurrentItem] = useState(null);

    const setMerchItem = (item) => {setCurrentItem(item); }
    const closeItem = () => setCurrentItem(null);

    const items = useLoaderData();
    console.log(items);
    var testList = [
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.01, stock: 20, imgPath: "Images/Merch/seb2.jpg"},
        {category: 'me', name: 'Basty', price: 2, stock: 1, imgPath: '/Images/Merch/realseb.jpg'},
        {category: "Unisex Hoodie, XS-XL", name: "Super duper awesome hoodie", price: 35, stock: 20, imgPath: "/Images/Merch/megathrowback.jpg"},
        {category: "Holographic Sticker", name: "35th OYFA Decal", price: 3, stock: 0, imgPath: "/Images/Merch/throwback.jpg"},
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.078, stock: 0, imgPath: "/Images/Merch/OYFABuddy3.JPG"},
        {category: "Unisex T-Shirt, S-L", name: "2023 Barrio T-Shirt", price: 25.078, stock: 0, imgPath: "/Images/Merch/SamExample.JPG", 
        images: ["/Images/Merch/SamExample.JPG", "/Images/Merch/SamExample.JPG", "/Images/Merch/SamExample.JPG"]},]
    
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
            <HalfTitle header = 'Merch' imgSrc = {'/Images/Merch/BannerTest2.JPG'} brightness={75} position={55} caption='Order Now!'/>
            <MerchCarousel/>
            <MerchGallery merch={items} setCurrentItem={setMerchItem}/>

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
        // const response = await axios.get(import.meta.env.VITE_API_URL + '/api/merch', { params: {key: import.meta.env.VITE_API_KEY}});
        const response = await axiosClient.get('/merch');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}