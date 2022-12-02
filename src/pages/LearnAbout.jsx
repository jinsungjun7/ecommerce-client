import React from 'react'
import flyingrocket from '../images/core/rocket-learn.jpg'

function LearnAbout() {
  return (
    <section id="about" className='learn-row'>
    <h1 className="text-center">About Us</h1>
    <div className="container-fluid" id="about-container">
      <div className="row" id="banner-row">
        <div className="col-md-6" id="about-col">
          <h3>Why Us</h3>
          <ul>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <li>Odio eu feugiat pretium nibh ipsum. Duis convallis convallis tellus id interdum.</li>
          </ul>
        </div>
        <div className="col-md-6" id="banner-col2">
          <img
            className="img-responsive rounded mx-auto d-block"
            src={flyingrocket}
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default LearnAbout