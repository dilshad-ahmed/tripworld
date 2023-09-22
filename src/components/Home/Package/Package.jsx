import React from 'react';
import cardImage from '../../../images/banner-1.jpg';
import cardImage2 from '../../../images/banner-2.jpg';
import cardImage3 from '../../../images/banner-3.jpg';

const Package = (props) => {
    const setIsOpen = props.setIsOpen; 

  return (
    <>  
        <div className="package-section-bg py-5">
            <section className='container package-section ' >
                <div className='d-flex flex-column align-items-center justify-content-center  '>
                    <h2 className='heading-text'>Explore Best Selling Packages</h2>
                    <p className='small sub-heading-text'>Book Domestic and International holidays</p>
                </div>
                <div className='row m-0 gy-4'>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3 img-size ' src={cardImage} alt={cardImage} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded ' onClick={()=>{setIsOpen(true)}}> Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3  img-size' src={cardImage2} alt={cardImage2} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded 'onClick={()=>{setIsOpen(true)}} > Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3 img-size ' src={cardImage3} alt={cardImage3} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded ' onClick={()=>{setIsOpen(true)}}> Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3 img-size ' src={cardImage} alt={cardImage} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded ' onClick={()=>{setIsOpen(true)}}> Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3 img-size ' src={cardImage3} alt={cardImage} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded ' onClick={()=>{setIsOpen(true)}}> Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3 img-size ' src={cardImage} alt={cardImage} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded ' onClick={()=>{setIsOpen(true)}}> Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3 img-size ' src={cardImage2} alt={cardImage} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded ' onClick={()=>{setIsOpen(true)}}> Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card hotel-card rounded-3">
                            <img className='rounded-3 img-size ' src={cardImage} alt={cardImage} />
                            <div className='containt-box p-2'>
                                <h5 className='mb-1'>Goa, India</h5>
                                <p className='small text-muted'>Package prices starting at</p>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col">
                                        <h6 className='m-0'>INR 22838</h6>
                                        <p className='small m-0 text-muted'>per person</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <button className='btn btn-primary rounded ' onClick={()=>{setIsOpen(true)}}> Query Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    </>
  )
}

export default Package;