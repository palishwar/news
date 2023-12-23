import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <div className="row">
      <div className="col-2">
             <div className="image">
                    <a href='#'><img src="https://thehimalayantimes.com/theme_himalayantimes/images/logo.png" /></a>
                </div>
      </div>
      <div className="col-4">
            <div className="second">Contact</div>
            <div><a href=""> Contact Us</a></div>
            <div><a href="">Inquiry/Feedback</a></div>
            <div><a href="">Login</a></div>
      </div>
      <div className="col-4">
          <div className="suru">
              <div className="third">Customer Support</div>
              <div><a href=""><FontAwesomeIcon icon={faLocationDot} className='me-2'/>Janaki Chowk, Janakpur Dham, Nepal</a></div>
              <div><a href=""><FontAwesomeIcon icon={faPhone} className='me-2'/>  +977-041-525085</a></div>
              <div><a href=""><FontAwesomeIcon icon={faEnvelope} className='me-2'/>  ecommerce@jankakiairways.com</a></div>
              <div className="lastfoot container-fluid pt-2">
        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
        
      </div>
            </div>
      </div>
    </div><span>Copyright 2023 Janaki Airways . All rights reserved</span>
    </>
  )
}

export default Footer