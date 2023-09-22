import React from 'react';
import './offer-banner.css';
import offerImg from '../../../images/offer/travel.jpg';
// import offerImg2 from '../../../images/offer/hotel-offers.jpg';
// import offerImg3 from '../../../images/offer/transfers.jpg';
// import offerImg4 from '../../../images/offer/travel.jpg';

const OfferBanner = () => {
  return (
    <>
        <section className='offer-banner'>
            <div className="row m-0">
              <div className="col-sm-6 d-flex align-items-center ">
                <div className='p-4 p-sm-5 text-center text-sm-start'>
                  <h3> Book Hotels flat 25% off</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam porro laudantium blanditiis odit quis?</p>
                  <button className='btn btn2'> Click Now</button>
                </div>
              </div>
              <div className="col-sm-6 d-none d-sm-block p-0">
                <img className='offer-banner-img' src={offerImg} alt="offer-banner" /> 
              </div>
            </div>
        </section>
    </>
  )
}

export default OfferBanner;