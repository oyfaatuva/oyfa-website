import HalfTitle from '../../../components/HalfTitle/HalfTitle';

import MerchGallery from './MerchGallery';

import axios from 'axios';

export default function Merch() {
    return(
        <>
            <HalfTitle header = 'Merch' imgSrc = {'/Images/Leadership/Leadership_Title_35B&C.jpg'} brightness={75} position={25} caption='Order Now!'/>
            <MerchGallery/>
        </>
    )
}
