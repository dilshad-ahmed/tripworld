import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Banner1 from '../../images/banner-1.jpg';
// import Banner2 from '../../images/banner-2.jpg';
// import Banner3 from '../../images/banner-3.jpg';

import Banner1 from '../../images/offer/flight2.jpg';
import Banner2 from '../../images/offer/hotel-offers.jpg';
import Banner3 from '../../images/offer/car.jpg';
import Banner4 from '../../images/offer/travel.jpg';

// component import
import Package from './Package/Package';
import Activity from './Activity/Activity';
import Flight from './Flight/Flight';
import Hotel from './Hotel/Hotel';
import Visa from './Visa/Visa';
import Transfers from './Transfers/Transfers';
import OfferSection from './OfferSection/OfferSection.jsx';
import Category from './Category/Category.jsx';
import OfferBanner from './OfferBanner/OfferBanner.jsx';

function Home( props) {
  const setIsOpen = props.setIsOpen; 

  var settings = {
    dots: true,
    autoplay:true,
    fade:true,
    autoplaySpeed:3000,
    arrows : false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <>
      <div className='banner-section'>
        <Slider {...settings}>
          <div>
            <img className='banner-img img-fluid' src={Banner1} alt="Banner1" />
          </div>
          <div>
            <img className='banner-img img-fluid' src={Banner2} alt="Banner2" />
          </div>
          <div>
            <img className='banner-img img-fluid' src={Banner3} alt="Banner3" />
          </div>
        </Slider>
      </div>
      

      {/* using component in homepage */}
      <Category/>
      <Package setIsOpen={setIsOpen} />
      <OfferSection/>
      <Flight setIsOpen={setIsOpen}/>
      <Activity setIsOpen={setIsOpen}/>
      <OfferBanner/>
      <Hotel setIsOpen={setIsOpen}/>
      <Transfers setIsOpen={setIsOpen}/>
      <Visa setIsOpen={setIsOpen}/>
      {/* using component in homepage end*/}

    </>
  ) 
}

export default Home;
