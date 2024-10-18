import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <div className="container mt-5">
    <h5>
            <Link className='text-warning' style={{ textDecoration: 'none', fontWeight: 'bolder' }} to={'/'}>
              <i class="fa-solid fa-arrow-left me-3"></i>Back to Home</Link>
          </h5>
      <h2 className="text-center">Registration Form</h2>
      <form  className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label"></label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
           
            placeholder="Enter your name"
          />
         
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            
            placeholder="Enter your email"
          />
         
        </div>

        <div className="col-md-6">
          <label htmlFor="phone" className="form-label"></label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
           
            placeholder="Enter your phone number"
          />
          
        </div>

        <div className="col-md-6">
          <label htmlFor="password" className="form-label"></label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            
            placeholder="Enter your password"
          />
         
        </div>

        <div className="col-12 text-center mb-5">
          <button type="submit" className="btn btn-success mt-3">Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register