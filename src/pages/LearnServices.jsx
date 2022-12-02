import React from 'react'
import rocket from "../images/core/rocket.jpg"

function LearnServices() {
  return (
    <section id="service" className='learn-row'>
    <h1 className="text-center">Services</h1>
    <div className="container-fluid" id="service-container">
      <div className="row" id="banner-row">
        <div className="col-md-4" id="service-col1">
          <img
            src={rocket}
            className="img-fluid rounded mx-auto d-block"
            alt="..."
          />
          <h3>Travel</h3>
            
          <p>
            Lorem ipsum dolor. 
            <br/>
            Lorem ipsum dolor.
            <br/> 
            Lorem ipsum dolor.
          </p>

        </div>
        <div className="col-md-4" id="service-col2">
          <img
            src={rocket}
            className="img-fluid rounded mx-auto d-block"
            alt="..."
          />
          <h3>Stay</h3>
            
          <p>
              Lorem ipsum dolor. 
            <br/>
            Lorem ipsum dolor.
            <br/> 
            Lorem ipsum dolor.
          </p>

        </div>
        <div className="col-md-4" id="service-col3">
          <img
            src={rocket}
            className="img-fluid rounded mx-auto d-block"
            alt="..."
          />
          <h3>Cruises</h3>
            
          <p>
              Lorem ipsum dolor. 
            <br/>
            Lorem ipsum dolor.
            <br/> 
            Lorem ipsum dolor.
          </p>

        </div>
      </div>
    </div>
  </section>
  )
}

export default LearnServices