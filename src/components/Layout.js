import { Outlet, NavLink, Link } from "react-router-dom";
import '../index.css';
import Logo from '../images/logo.png';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-white navbar-light p-0 shadow-sm sticky-top ">
        <div className="container">
          <Link className="navbar-brand p-0 m-0" to="/"> 
            <img className="logo" src={Logo} alt="Triprav logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* navbar Desktop */}
          <div className="collapse navbar-collapse desktop-nav " id="collapsibleNavbar"> 
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/flights"  activeClassName="active">Flights</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/hotels"  activeClassName="active">Hotels</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/packages"  activeClassName="active">Packages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/activities"  activeClassName="active">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/visa"  activeClassName="active">Visa</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/transfers"  activeClassName="active">Transfers</NavLink>
              </li>
              <li className="nav-item">
                <Link className='login-btn' activeClassName="login-btn-active" to="/login"  >Login</Link>
              </li>
            </ul>
          </div>

           {/* Offcanvas Sidebar mobile */}
          <div className="offcanvas offcanvas-start mobile-nav" id="demo">
            <div className="offcanvas-header">
              <h1 className="offcanvas-title">Triprav</h1>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/flights"  activeClassName="active">Flights</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/hotels"  activeClassName="active">Hotels</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/packages"  activeClassName="active">Packages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/activities"  activeClassName="active">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/visa"  activeClassName="active">Visa</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/transfers"  activeClassName="active">Transfers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/transfers"  activeClassName="active">Transfers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" activeClassName="active" >Login</NavLink>
              </li>
            </ul>
              
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
      
      <Footer/>
    </>
  )
};

export default Layout;