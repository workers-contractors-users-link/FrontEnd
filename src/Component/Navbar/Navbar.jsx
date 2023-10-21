import { Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Logo from '../Assets/logo-no-background.png';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <section>
        <div className="nav-cont">

          <div className="nav-cont1">
            <img src={Logo} alt="" />
          </div>

                <ul className='nav-cont-ul'>

                  <li><NavLink to="/" style={{ textDecoration: "none" }} >Home</NavLink></li>
                  <li><NavLink to="/about" style={{ textDecoration: "none" }} >About</NavLink></li>
                  <li><NavLink to="/contact" style={{ textDecoration: "none" }} >Contact Us</NavLink></li> 
                  <li><NavLink to="/data" style={{ textDecoration: "none" }} >Data</NavLink></li>
                </ul>
             
               
                <div className='nav-cont-btn'>
                  <Button> <NavLink to="/login" style={{  color: "white",textDecoration:"none" }}>Log In</NavLink></Button>
                  <Button> <NavLink to="/register" style={{ textDecoration: "none", color: "white" }}>Register</NavLink></Button>
                </div>
            

          





        </div>
      </section>


    </>
  )
}

export default Navbar