import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container-fluid p-4 mb-4' style={{ width: "100%", height: "80vh", backgroundColor: "white" }}>
      <Row>
        <Col md={6} className='d-flex justify-content-center align-items-center flex-column mt-5'>
          <img src="https://airproductionservice.com/wp-content/uploads/2021/05/Login.jpg" width="75%" alt="" />
        </Col>
        <Col md={6} className='d-flex justify-content-center align-items-center flex-column mt-'>
          <div>
            <h3 className='text-warning'>Project</h3>
            <h6>One of the finest charging solution</h6>
          </div>

          <Link
            to={'/login'}>
            <button className='btn btn-outline-success my-4'>Get Started <i class="fa-solid fa-arrow-right"></i> </button>
          </Link>
          {/* <Link to={'/login'}>
              <button className='btn btn-outline-light my-4'>Get Started <i class="fa-solid fa-arrow-right"></i> </button>
              </Link>
             */}

        </Col>
      </Row>

    </div>

  )
}

export default Home