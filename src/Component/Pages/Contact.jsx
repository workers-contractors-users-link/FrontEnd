import './Contact.css'
import Navbar from '../Navbar/Navbar'

function Contact() {
  return (
    <>
  <Navbar />

      <div className="contact-us">
        <div className="contact">
        <h1>Get Started</h1>

        <div className="contact-name">

          <div className="name">
            <p>Name*</p>
            <input type="text" placeholder='Enter Name here..'/>
            </div>

          <div className="email">
            <p>Email*</p>
            <input type="text" placeholder='Enter Email here..'/>
            </div>

        </div>

          <div className="contact-no">
            <p>Contact-No*</p>
            <input type="text" placeholder='Enter Contact no here..'/>
          </div>

        <div className="contact-message">
            <p>Message*</p>
            <textarea type="text" placeholder='Enter Text here..'/>
        </div>

        <button>SEND MESSAGE</button>



        </div>
      </div>



    </>
  )
}

export default Contact