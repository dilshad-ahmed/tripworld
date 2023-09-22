import React from 'react';
import Banner from '../../images/banner-3.jpg';

import cardImage from '../../images/banner-1.jpg';
import cardImage2 from '../../images/banner-2.jpg';
import cardImage3 from '../../images/banner-3.jpg';
import cardImage4 from '../../images/offer/car.jpg';

const TransfersList = ({setIsOpen}) => {
  return (
    <section className="flight-list-container">
      <div className="banner">
        <img className='banner-img-small' src={cardImage4} alt="Banner" />
        <div className='center-text-banner'>
            <h2>Best Transfers </h2>
            <p className='small'>Book Best Transfers for you</p>
        </div>
      </div>

      <div className="container py-4 mb-4">
        <div className='row m-0 gy-4'>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <div className="card card-hover-shadow rounded-3">
                    <img className='rounded-3 img-size-flight' src={cardImage} alt="cardImage" />
                    <div className='containt-box p-2'>
                        <h5 className='mb-1'>Goa, India</h5>
                        <p className='small text-muted'>Package prices starting at</p>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <h6 className='m-0'>INR 22838</h6>
                                <p className='small m-0 text-muted'>per person</p>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <button className='btn btn-primary rounded' onClick={()=>{setIsOpen(true)}} > Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <div className="card card-hover-shadow rounded-3">
                    <img className='rounded-3 img-size-flight' src={cardImage2} alt="cardImage" />
                    <div className='containt-box p-2'>
                        <h5 className='mb-1'>Goa, India</h5>
                        <p className='small text-muted'>Package prices starting at</p>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <h6 className='m-0'>INR 22838</h6>
                                <p className='small m-0 text-muted'>per person</p>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <button className='btn btn-primary rounded' onClick={()=>{setIsOpen(true)}} > Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <div className="card card-hover-shadow rounded-3">
                    <img className='rounded-3 img-size-flight' src={cardImage3} alt="cardImage" />
                    <div className='containt-box p-2'>
                        <h5 className='mb-1'>Goa, India</h5>
                        <p className='small text-muted'>Package prices starting at</p>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <h6 className='m-0'>INR 22838</h6>
                                <p className='small m-0 text-muted'>per person</p>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <button className='btn btn-primary rounded' onClick={()=>{setIsOpen(true)}} > Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <div className="card card-hover-shadow rounded-3">
                    <img className='rounded-3 img-size-flight' src={cardImage3} alt="cardImage" />
                    <div className='containt-box p-2'>
                        <h5 className='mb-1'>Goa, India</h5>
                        <p className='small text-muted'>Package prices starting at</p>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <h6 className='m-0'>INR 22838</h6>
                                <p className='small m-0 text-muted'>per person</p>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <button className='btn btn-primary rounded' onClick={()=>{setIsOpen(true)}} > Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <div className="card card-hover-shadow rounded-3">
                    <img className='rounded-3 img-size-flight' src={cardImage4} alt="cardImage" />
                    <div className='containt-box p-2'>
                        <h5 className='mb-1'>Goa, India</h5>
                        <p className='small text-muted'>Package prices starting at</p>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <h6 className='m-0'>INR 22838</h6>
                                <p className='small m-0 text-muted'>per person</p>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <button className='btn btn-primary rounded' onClick={()=>{setIsOpen(true)}} > Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <div className="card card-hover-shadow rounded-3">
                    <img className='rounded-3 img-size-flight' src={cardImage} alt="cardImage" />
                    <div className='containt-box p-2'>
                        <h5 className='mb-1'>Goa, India</h5>
                        <p className='small text-muted'>Package prices starting at</p>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <h6 className='m-0'>INR 22838</h6>
                                <p className='small m-0 text-muted'>per person</p>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <button className='btn btn-primary rounded' onClick={()=>{setIsOpen(true)}} > Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TransfersList;