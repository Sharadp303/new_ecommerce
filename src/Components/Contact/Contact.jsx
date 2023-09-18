import React from 'react'
import './Contact.css'
import {BiLogoFacebookCircle,BiLogoTwitter,BiLogoInstagram,BiLogoYoutube} from 'react-icons/bi'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-container">
            <span>BE IN TOUCH WITH US</span>
            <div className='mail'>
                <input type="text" placeholder='Enter your email' />
                <button>JOIN US</button>
            </div>
            <div className="contact-icons">
                <BiLogoFacebookCircle/>
                <BiLogoInstagram/>
                <BiLogoTwitter/>
                <BiLogoYoutube/>

            </div>
        </div>
    </div>
  )
}

export default Contact