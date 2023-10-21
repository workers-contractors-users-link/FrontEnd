import './Home.css'
import Services from '../Services/Services'
import Man from '../Assets/man.png'
import Pattern from '../Assets/pattern.png'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <>
     <Navbar />
      <section>
        <div className='men-box'>

        <div className="text">
          <p>We're more than just a platform!</p>
          <h1> We're a <span>Trusted Partner</span> in your journey to success.</h1>
        </div>
          <div className="img-box">
            <img src={Pattern} class="back-img" alt="no" />
            <img src={Man} class="main-img" alt="no" />
          </div>

        </div>

       
      </section>

    <Services />
    </>
  )
}

export default Home

