import React from 'react'
import flyingrocket from '../images/core/rocket-learn.jpg'

function LearnProducts() {
  return (
    <section id="product" className='learn-row'>
      <h1 className="text-center">Our Products</h1>
      <div className="container-fluid" id="product-container">
        <div className="row" id="banner-row">
          <div className="col-md-6" id="about-col">
            <img
              className="img-responsive rounded mx-auto d-block"
              src={flyingrocket}
              alt=""
            />
          </div>
          <div className="col-md-6" id="product-col2">
            <h3>Product List</h3>
  
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnProducts