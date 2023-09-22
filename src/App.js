import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";

// Components import
import FlightList from './components/FlightList/FlightList';
import HotelList from './components/HotelsList/HotelList';
import PackageList from './components/PackageList/PackageList';
import ActivityList from './components/ActivityList/ActivityList';
import VisaList from './components/VisaList/VisaList';
import TransfersList from './components/TransfersList/TransfersList';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"470px",
  },
  
};

function App() {
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <>

      <div>
        
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          

          <div className='modal-size'> 
            <div>
              <h5 className='text-center mb-3 text-muted  '>Query Here</h5>
            </div>
            <form>
              <div className="row">
              <div className="col-6">
                  <div class="form-group">
                        <input type="text" class="form-control" name="fname" placeholder=' ' id='c1' autocomplete="off" autofocus required />
                        <label for="c1" class="input-text">First Name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                        <input type="text" class="form-control" name="Lname" placeholder=' ' id='c2' autocomplete="off" autofocus required />
                        <label for="c2" class="input-text">Last Name</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                  <input type="email" class="form-control" name="Cemail" placeholder=' ' id='c3' autocomplete="off" autofocus required />
                  <label for="c3" class="input-text">Email</label>
              </div>
              <div className="row">
                <div className="col-6">
                  
                  <div class="form-group">
                  <input type="email" class="form-control" name="Cemail" placeholder=' ' id='c4' autocomplete="off" autofocus required />
                  <label for="c4" class="input-text">Mobile No</label>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option className='disabled'>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className='d-flex justify-content-between'>
                <button className='btn btn-primary ' onClick={closeModal}>close</button>
                <button type='submit' className='btn btn-primary '> Submit</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>

      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home setIsOpen={setIsOpen} />} />
          <Route path="/flights" element={<FlightList setIsOpen={setIsOpen}/>} />
          <Route path="/hotels" element={<HotelList setIsOpen={setIsOpen}/>} />
          <Route path="/packages" element={<PackageList setIsOpen={setIsOpen}/>} />
          <Route path="/activities" element={<ActivityList setIsOpen={setIsOpen}/>} />
          <Route path="/visa" element={<VisaList setIsOpen={setIsOpen}/>} />
          <Route path="/transfers" element={<TransfersList setIsOpen={setIsOpen}/>} />
          <Route path="/contact/:no" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
          
      </Routes>
    </>
  );
}

export default App;
