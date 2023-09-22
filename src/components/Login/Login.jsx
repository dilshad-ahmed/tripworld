import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';

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

const Login = () => {

    const [SmodalIsOpen, setIsOpenSignup] = React.useState(false);
  
    function openModal() {
      setIsOpenSignup(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpenSignup(false);
    }

    const HandleForm = (e) =>{
        e.preventDefault();
        setIsOpenSignup(true);
    }

  return (
    <>
      <div>
        
        <Modal
          isOpen={SmodalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
        >
          
          

          <div className='modal-size'> 
            <div>
              <h5 className='text-center mb-3 text-muted  '>Create New Account</h5>
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
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Mobile No"/>
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
                <button type='submit' className='btn btn2 '> Submit</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>

        <section className=' d-flex vh-100 align-items-center justify-content-center bg-light'>
            <div className='login-container'>
                <form class="form-horizontal form-container">
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" placeholder=' ' id='1' autocomplete="off" autofocus required />
                        <label for="1" class="input-text">name</label>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder=' '  id='2' required/>
                        <label for="2" class="input-text">Password</label>
                    </div>
                    <div className='d-grid'>
                        <button class="btn btn-primary btn-block">Submit</button>
                    </div>
                    <div className='mt-2 text-center border-top pt-2 mt-3'>
                        <button onClick={HandleForm} className='text-decoration-none btn btn2 '> Create New Account</button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login;