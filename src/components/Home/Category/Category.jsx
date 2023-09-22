import React from 'react'
import { Link } from 'react-router-dom';
import Banner3 from '../../../images/banner-3.jpg';
import Banner2 from '../../../images/banner-2.jpg';
import Banner1 from '../../../images/banner-1.jpg';

const Category = () => {
  return (
    <section className=' category mt-5 my-4 px-3'>
        <div className="">
            <div className='d-flex flex-column align-items-center justify-content-center my-4 '>
                <h2 className='heading-text'>Categories </h2>
                <p className='small sub-heading-text'> Best Deals for you</p>
            </div>
        </div>
        <div className="row m-0">
            <div className="col-lg-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                <Link to="/flights" className='text-decoration-none text-muted'>
                    <div className='rounded-card '>
                        <img className='rounded-img' src={Banner2} alt="category" />
                        <h5 className='text-center my-4'>Flights</h5>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                <Link to="/hotels" className='text-decoration-none text-muted'>
                    <div className='rounded-card '>
                        <img className='rounded-img' src={Banner3} alt="category" />
                        <h5 className='text-center my-4'> Hotels </h5>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                <Link to="/packages" className='text-decoration-none text-muted'>
                    <div className='rounded-card '>
                        <img className='rounded-img' src={Banner1} alt="category" />
                        <h5 className='text-center my-4'>Packages</h5>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                <Link to="/activities" className='text-decoration-none text-muted'>
                    <div className='rounded-card '>
                        <img className='rounded-img' src={Banner3} alt="category" />
                        <h5 className='text-center my-4'>Activities</h5>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                <Link to="/visa" className='text-decoration-none text-muted'>
                    <div className='rounded-card '>
                        <img className='rounded-img' src={Banner2} alt="category" />
                        <h5 className='text-center my-4'>Visa</h5>
                    </div>
                </Link>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                <Link to="/transfers" className='text-decoration-none text-muted'>
                    <div className='rounded-card '>
                        <img className='rounded-img' src={Banner1} alt="category" />
                        <h5 className='text-center my-4'>Transfers</h5>
                    </div>
                </Link>
            </div>
            
        </div>
    </section>
  )
}

export default Category