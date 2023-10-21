import './Footer.css'
import location from '../Assets/location.png'
import phone from '../Assets/phone.png'
import email from '../Assets/email.png'
import twitter from '../Assets/twitter.webp'
import linkedin from '../Assets/linkedin.png'
import telegram from '../Assets/telegram.png'
import github from '../Assets/github.png'
import React,{ useState } from 'react'


function Footer() {
    const [data,setData]=useState("")
  return (
    <>
    <div className="footer">
        <div className="footer-1">
            <h1>About Company</h1>
            <p>At BuilderBuddy, we're more than just a platform; we're a trusted partner in your journey to success. Whether you're planning a home renovation, a construction project, or require skilled workers for various tasks, BuilderBuddy is here to simplify the process, connect you with the right professionals, and ensure your projects are executed flawlessly.
            Our mission is to revolutionize the way you engage with contractors and workers, making it a hassle-free and transparent experience. With the power of blockchain technology, we bring security and trust to every interaction, from hiring the right professional to making secure payments.</p>
           
           <ul>
           
            <li><a href=" https://www.linkedin.com/in/naman-gautam-a8a81a253/"><img src={linkedin} alt="" width="50px" /></a></li>
            <li><a href="https://github.com/Naman1729"><img src={github} alt="" width="50px" /></a></li>
            <li><a href="https://twitter.com/NamanGautam1729"><img src={twitter} alt="" width="50px" /></a></li>
            <li><a href=" https://t.me/naman01729"><img src={telegram} alt="" width="50px" /></a></li>
           </ul>
        </div>
        <div className="footer-2">
            <h1>Subscribe to Newsletter</h1>
            <input type="text" value={data} placeholder='Write E-mail' onChange={(e)=>setData(e.target.value)}/>
            <button>Subcribe</button>
            <div className="info">
                <div className="info-1">
                    <img src={location} alt="" width="35px" />
                    <h6>Warsaw, 00-967, Poland</h6>
                </div>
                <div className="info-2">
                    <img src={phone} alt="" width="35px" />
                    <h6>+91 6969696969</h6>
                </div>
                <div className="info-3">
                    <img src={email} alt="" width="35px" />
                    <h6>Contact@gmai.com</h6>
                </div>
            </div>
        </div>
        <div className="footer-3">
            <h1>Opening Hour</h1>
            <div className="open-1">
                <p>Mon - Thu:</p>
                <p>	8am - 9pm</p>
            </div>
            <hr />
            <div className="open-2">
                <p>Mon - Thu:</p>
                <p>	8am - 9pm</p>
            </div>
            <hr />
            <div className="open-1">
                <p>Mon - Thu:</p>
                <p>	8am - 9pm</p>
            </div>
            
        </div>
      
    </div>
    <span className='disclaimer'>© Copyright 2023 Builder Buddy. | All Rights Reserved. | Legal Disclaimer Open Source License Disclosure</span>
    </>

  )
}

export default Footer