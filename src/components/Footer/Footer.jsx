import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import FooterLogo from '../../images/logo.png';

const Footer = () => {
//     const [value, setValue] = useState(new Date());

//     useEffect(() => {
//       const interval = setInterval(() => setValue(new Date()), 1000);
  
//       return () => {
//         clearInterval(interval);
//       };
//     }, []);
// console.log()

  return (
    <section className=' footer-section'>
        <div className="row py-5 m-0">
            <div className="col-sm-4 px-md-5 d-flex align-items-center">
                <div>
                    <img className='footer-logo mb-2 mb-md-3' src={FooterLogo} alt={FooterLogo} />
                    <p className='text-white-75'> <span className='font-weight-bold text-white'> Address</span>   : <span className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quaerat!</span> </p>
                    <p className='text-white-75'> <span className='font-weight-bold text-white'> Email</span>   : abc@gmail.com</p>
                    <p className='text-white-75 m-0'> <span className='font-weight-bold text-white'> mobile no</span>   : +91 9883649889</p>
                    <div id="google_translate_element"></div>
                    {/* <p> Current Time : <span>{Date()} </span></p> */}
                </div>
            </div>
            <div className="col-sm-8 mt-3 mt-sm-0">
                <div className="row">
                    <div className="col-4">
                        <ul className='list-unstyled'>
                        <h6 className='font-weight-bold text-white'>Some Links </h6>
                            <Link to="/hotels" className='text-decoration-none'> <li>Hotels</li> </Link>
                            <Link to="/Flights" className='text-decoration-none'> <li>Flights</li> </Link>
                            <Link to="/Transfers" className='text-decoration-none'> <li>Transfers</li> </Link>
                            <Link to="/Packages" className='text-decoration-none'> <li>Packages</li> </Link>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className='list-unstyled'>
                            <h6 className='font-weight-bold text-white'>Important Links </h6>
                            <Link to="/hotels" className='text-decoration-none'> <li>Hotels</li> </Link>
                            <Link to="/Flights" className='text-decoration-none'> <li>Flights</li> </Link>
                            <Link to="/Transfers" className='text-decoration-none'> <li>Transfers</li> </Link>
                            <Link to="/Packages" className='text-decoration-none'> <li>Packages</li> </Link>
                            <Link to="/Visa" className='text-decoration-none'> <li>Visa</li> </Link>
                            <Link to="/Activities" className='text-decoration-none'> <li>Activity</li> </Link>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className='list-unstyled'>
                        <h6 className='font-weight-bold text-white'>Some Links </h6>
                            <Link to="/hotels" className='text-decoration-none'> <li>Hotels</li> </Link>
                            <Link to="/Flights" className='text-decoration-none'> <li>Flights</li> </Link>
                            <Link to="/Transfers" className='text-decoration-none'> <li>Transfers</li> </Link>
                            <Link to="/Packages" className='text-decoration-none'> <li>Packages</li> </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;