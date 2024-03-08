import { useEffect, useState } from 'react';
import HalfTitle from '../../../components/HalfTitle/HalfTitle';
import MerchCarousel from './MerchCarousel';

import MerchGallery from './MerchGallery';

import axios from 'axios';
import { useLoaderData } from 'react-router';

export default function Merch() {
    const items = useLoaderData();


    var testList = [
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.01, stock: 20, imgPath: "Images/Merch/seb2.jpg"},
        {category: 'me', name: 'Basty', price: 2, stock: 1, imgPath: '/Images/Merch/realseb.jpg'},
        {category: "Unisex Hoodie, XS-XL", name: "Super duper awesome hoodie", price: 35, stock: 20, imgPath: "/Images/Merch/megathrowback.jpg"},
        {category: "Holographic Sticker", name: "35th OYFA Decal", price: 3, stock: 0, imgPath: "/Images/Merch/throwback.jpg"},
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.078, stock: 0, imgPath: "/Images/Leadership/Leadership_Title_35B&C.jpg"},]

    return(
        <>
            <HalfTitle header = 'Merch' imgSrc = {'/Images/Leadership/Leadership_Title_35B&C.jpg'} brightness={75} position={25} caption='Order Now!'/>
            <MerchCarousel/>
            <MerchGallery merch={items}/>
        </>
    );
}

export async function merchLoader() {
    try {
        const response = await axios.get(import.meta.env.VITE_API_URL + '/api/merch', { params: {key: import.meta.env.VITE_API_KEY}});
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}