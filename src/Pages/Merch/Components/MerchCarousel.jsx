import Slider from "react-slick"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// We don't use a CSS module for this component because the Slick Carousel has some issues so we needed to rewrite 
// some of the css classes it uses (slides, slick-prev, slick-next)
import '../Stylesheets/MerchCarousel.css'

export default function MerchCarousel( {images} ) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className="center-container">
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((imgSrc, index) => (
                        <div key={index} className="image-slide">
                            <img src={imgSrc}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}