import { useEffect, useState } from 'react';
import HalfTitle from '../../../components/HalfTitle/HalfTitle';
import MerchCarousel from './MerchCarousel';

import MerchGallery from './MerchGallery';

import axios from 'axios';

export default function Merch() {
    const [items, setItems] = useState([]);

    var testList = [
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.01, stock: 20, imgPath: "Images/Merch/seb2.jpg"},
        {category: 'me', name: 'Basty', price: 2, stock: 1, imgPath: '/Images/Merch/realseb.jpg'},
        {category: "Unisex Hoodie, XS-XL", name: "Super duper awesome hoodie", price: 35, stock: 20, imgPath: "/Images/Merch/megathrowback.jpg"},
        {category: "Holographic Sticker", name: "35th OYFA Decal", price: 3, stock: 0, imgPath: "/Images/Merch/throwback.jpg"},
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: 25.078, stock: 0, imgPath: "/Images/Leadership/Leadership_Title_35B&C.jpg"},]

    const fetch = () => {
        let apiGET = "/api/merch";
        axios
          .get(import.meta.env.VITE_API_URL + apiGET, { params: {key: import.meta.env.VITE_API_KEY}})
          .then((response) => setItems(response.data));
    };

    useEffect(() => {
        fetch();
    }, []);

    return(
        <>
            <HalfTitle header = 'Merch' imgSrc = {'/Images/Leadership/Leadership_Title_35B&C.jpg'} brightness={75} position={25} caption='Order Now!'/>
            <MerchCarousel/>
            <MerchGallery merch={items}/>
        </>
    );
}

