import React from 'react'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'

function LearnContact() {
  return (
    <div id='contact'>
    <section id="social" className='learn-row' style={{paddingBottom:'60px'}}>
      <h1 className="text-center" style={{paddingBottom:'16px'}}>Get In Touch</h1>
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <div className="row align-items-center" id="social-row">
          <div className="col-md-4 social-col">
            <a href="/ecommerce-client"
              ><UilInstagram size='2.5rem' /></a>
          </div>
          <div className="col-md-4 social-col">
            <a href="/ecommerce-client"
              ><UilTwitter size='2.5rem' /></a>
          </div>
          <div className="col-md-4 social-col">
            <a href="/ecommerce-client"
              ><UilLinkedin size='2.5rem' /></a>
          </div>
        </div>
      </div>
    </section>
  
    <section id="footer" className='learn-row'>
      <section id="banner">
        <div className="container-fluid" id="banner-container">
          <div className="row" id="banner-row">
            <div className="col-md-4" id="footer-col1">
              <h3>My Website</h3>
                
              <p>
                At Space-Y, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
  
            </div>
            <div className="col-md-4" id="footer-col2">
              <h3>Contact Us</h3>
                
              <p>Call Us- 1800-121-6532</p>
              
                              
              <p>Email Us- support@xyz.com</p>
  
            </div>
  
            <div className="col-md-4" id="footer-col2">
              <h3>Subscribe To Newsletter</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" 
                       className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <button type="button" 
                        className="btn btn-primary">
                        Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
  )
}

export default LearnContact