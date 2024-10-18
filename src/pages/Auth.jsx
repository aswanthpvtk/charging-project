import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth() {


  return (
    <>
      <div style={{ width: '100%', height: '80vh', display: "flex", justifyContent: 'center', alignItems: 'center' }} className='mt-5 mb-5'>
        <div className='container w-75'>
          <h5>
            <Link className='text-warning' style={{ textDecoration: 'none', fontWeight: 'bolder' }}>
              <i class="fa-solid fa-arrow-left me-3"></i>Back to Home</Link>
          </h5>
          <div 
          // style={{ backgroundColor: '#77CDFF' }} 
          className='bg-light border broder-8 rounded'>
            <Row>
              <Col
                md={6} className='p-4 d-flex justify-content-center align-items-center'>
                <img src="https://airproductionservice.com/wp-content/uploads/2021/05/Login.jpg" alt="" width='70%' />
              </Col>
              <Col md={6} className='p-5 d-flex justify-content-center align-items-center'>
                <form className='w-100'>
                  <h5 className='text-center'>
                    <i class="fa-solid fa-bolt fa-fade text-warning me-3"></i>Charging</h5>






                  <h6>Sign in to your account</h6>

                  <div className='mb-3 mt-3'>
                    <input type="email" name="" id="" placeholder='Email Id' className='form-control rounded' />
                  </div>
                  <div className='mb-3'>
                    <input type="passwoed" name="" id="" placeholder='Password' className='form-control rounded'
                    />
                  </div>



                  <div>
                    <Link
                      to={'/charging'}>
                      <button className='btn btn-warning w-100 rounded'>Login</button>
                    </Link>
                    <p className='mt-3'>Not Registerd yet? Click here to
                      <Link className='ms-2' style={{ textDecoration: 'none', color: 'blue' }} to={'/register'}>Regiter</Link>
                    </p>


                  </div>


                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth