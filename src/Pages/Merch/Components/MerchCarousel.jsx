import Slider from "react-slick"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Stylesheets/MerchCarousel.css'

export default function MerchCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="container2">
        <div className="slider-container">
            <Slider {...settings}>
                <div className="image-slide">
                    <img src='/Images/Merch/seb1.jpg'/>
                </div>
                <div className="image-slide">
                    <img src='/Images/Leadership/Leadership_Title_36B&C.jpg'/>
                </div>
                <div className="image-slide">
                    <img src='/Images/Leadership/Leadership_Title_36B&C.jpg'/>
                </div>
                <div className="image-slide">
                    <img src='/Images/Leadership/Leadership_Title_36B&C.jpg'/>
                </div>
            </Slider>
        </div>
        </div>
    );
}