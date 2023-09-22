import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Banner1 from '../../../images/banner-1.jpg';
// import Banner2 from '../../../images/banner-2.jpg';
// import Banner3 from '../../../images/banner-3.jpg';

import Banner1 from '../../../images/offer/flight-offer.jpg';
import Banner2 from '../../../images/offer/hotel-offers.jpg';
import Banner3 from '../../../images/offer/transfers.png';
import Banner4 from '../../../images/offer/travel.jpg';
import Banner5 from '../../../images/offer/car.jpg';

const OfferSection = () => {

    var settings = {
        dots: false,
        autoplay:true,
        autoplaySpeed:3000,
        arrows : false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                // autoplay:true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                speed: 800,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                speed: 700,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <section className='px-2 offer-carousel  '>
        <div className='d-flex flex-column align-items-center justify-content-center mb-3 '>
            <h2 className='heading-text'>Best Deals </h2>
            <p className='small sub-heading-text'>Best Deals for you</p>
        </div>

        <div className="row m-0">
            <Slider {...settings}>
                <div className=' offer-card'>
                    <img className='img-fluid offer-img' src={Banner1} alt="Banner1" />
                </div>
                <div className=' offer-card'>
                    <img className='img-fluid offer-img' src={Banner2} alt="Banner1" />
                </div>
                <div className=' offer-card'>
                    <img className='img-fluid offer-img' src={Banner5} alt="Banner1" />
                </div>
                <div className=' offer-card'>
                    <img className='img-fluid offer-img' src={Banner4} alt="Banner1" />
                </div>
                <div className=' offer-card'>
                    <img className='img-fluid offer-img' src={Banner1} alt="Banner1" />
                </div>
                <div className=' offer-card'>
                    <img className='img-fluid offer-img' src={Banner5} alt="Banner1" />
                </div>
                {/* <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div> */}
        </Slider>   
        </div>
    </section>
  )
}

export default OfferSection;