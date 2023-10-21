import './About.css'
import easytouse from '../Assets/easytouse.png'
import trust from '../Assets/trust.jpg'
import empowering from '../Assets/empowering.png'
import Navbar from '../Navbar/Navbar'
function About() {
  return (
<>
<Navbar />
<div className="aboutus">

<h1>About Us</h1>
<hr />
<p> BuilderBuddy is to reshape the way people connect with skilled professionals in the construction and service industry. We envision a future where finding the right contractor or worker is a seamless and trusted process for all. Our goal is to empower individuals and businesses to undertake their projects with confidence, knowing they have access to a network of reliable professionals. We strive to be the driving force behind a more efficient and transparent industry, where trust, quality, and innovation are paramount. Our vision is to bring together builders, homeowners, and skilled workers in a community that thrives on fairness, security, and collaboration. Through the power of blockchain technology and our commitment to excellence, we aim to revolutionize the way projects are executed and payments are made. We see a world where everyone can achieve their construction and service goals with ease and satisfaction. At BuilderBuddy, we're working towards a future where your vision becomes reality.</p>
</div>

<div className="our-vision">
                <h1>Our Visions</h1>
            </div>

            <div className="write">

                <div className="write-1">
                    <img src={easytouse} alt="" width="350px"/>
                    <div className="texts">
                        <h1>Easy To Use</h1>
                        <p>With our platform, customers can easily create their order and list their requirements, select the category of their work and after that Contractors/Workers will contact them to get further details on their work to be done. After the communication step, use can then choose the desired Contractor/Worker for their Work. Contractors/Workers can add the milestones to the Work and can easily receive payments from the user in USDC token.</p>
                    </div>
                </div>

                <div className="write-2">
                 
                    <div className="texts">
                        <h1>Trust</h1>
                        <p>Transparency and trust are at the core of our values. By leveraging the power of blockchain technology, we bring transparency to the contractor and user engagement process. Every step from user registration, user ordering to user's order fulfillment is recored on-chain. All the work being conducted is logged on-chain, we divide the whole work in tasks, and every information of each Task is recorded on-chain with the cost to fulfill a task. We use Gitcoin services to verify the identity of both user and contractor, which also prevents sybil attack and use Chainlink Functions services to check the Gitcoin score of a user on-chain and on the basis of which access is allowed to them.</p>
                    </div>
                    <img src={trust} alt="" width="400px"/>
                </div>


                <div className="write-3">
                    <img src={empowering} alt="" width="450px"/>
                    <div className="texts">
                        <h1>Empowering Workers</h1>
                        <p>At BuilderBuddy, we are dedicated to empowering workers by providing them with a platform where they can showcase their skills and connect with individuals and businesses in need of their expertise. We believe that every worker, from skilled tradespeople to construction professionals, should have the opportunity to find meaningful work and build their careers.</p>
                    </div>
                </div>

            </div>
</>
    )
}

export default About