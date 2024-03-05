import HalfTitle from '../../../components/HalfTitle/HalfTitle';
import MerchCarousel from './MerchCarousel';

import MerchGallery from './MerchGallery';

import axios from 'axios';

export default function Merch() {
    var betterMerchList = [
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: '$25.00', imgPath: "/Images/Leadership/Leadership_Title_35B&C.jpg"},
        {category: 'Unisex T-Shirt, S-L', name: '2022 Barrio T-Shirt', price: '$25.00', imgPath: '/Images/Leadership/Leadership_Title_35B&C.jpg'},
        {category: "Unisex Hoodie, XS-XL", name: "Super duper awesome hoodie", price: '$35.00', imgPath: "/Images/Leadership/Leadership_Title_35B&C.jpg"},
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: '$25.00', imgPath: "/Images/Leadership/Leadership_Title_35B&C.jpg"},
        {category: "Unisex T-Shirt, S-L", name: "2022 Barrio T-Shirt", price: '$25.00', imgPath: "/Images/Leadership/Leadership_Title_35B&C.jpg"},]

    return(
        <>
            <HalfTitle header = 'Merch' imgSrc = {'/Images/Leadership/Leadership_Title_35B&C.jpg'} brightness={75} position={25} caption='Order Now!'/>
            <MerchCarousel/>
            <MerchGallery merch={betterMerchList}/>
        </>
    )
}

