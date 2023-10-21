import './Services.css'
import Contmang from '../Assets/construction-management.webp'
import Designbuild from '../Assets/design-build.webp'
import Contseri from '../Assets/construction-services.png'
import GeneralCont from '../Assets/general-contract.webp'
import Preconstruction from '../Assets/Preconstruction.webp'
import Buildinginfo from '../Assets/Buildinginfo.webp'

function Services() {
  return (
  <>
   

<div className='our-services'>
  <h1>OUR SERVICES</h1>
  <div className='service-box'>

    <div className='box-1'>
      <div className='img'>
        <img src={Buildinginfo} alt="" width="95" />
      </div>
      <div className='seri-text'>
        <h6>BUILDING INFORMATION MODELING</h6>
        <p>Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format. In...</p>
      </div>
    </div>

    <div className='box-1'>
      <div className='img'>
        <img src={Contseri} alt="" width="95" />
      </div>
      <div className='seri-text'>
        <h6>CONSTRUCTION SERVICES</h6>
        <p>Our customers love the pace/quality tempo that we show during each of the principal construction processes! We're comfortable with any...</p>
      </div>
    </div>
    <div className='box-1'>
      <div className='img'>
        <img src={Preconstruction} alt="" width="95" />
      </div>
      <div className='seri-text'>
        <h6>PRE-CONSTRUCTION SERVICES</h6>
        <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand.This...</p>
      </div>
    </div>
    <div className='box-1'>
      <div className='img'>
        <img src={Designbuild} alt="" width="95" />
      </div>
      <div className='seri-text'>
        <h6>DESIGN-BUILD</h6>
        <p>If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of...</p>
      </div>
    </div>
    <div className='box-1'>
      <div className='img'>
        <img src={Contmang} alt=""  width="95"/>
      </div>
      <div className='seri-text'>
        <h6>CONSTRUCTION MANAGEMENT</h6>
        <p>Construction project management is essential. We're using the most time and iterations efficient life cycles for that.As you may know,...</p>
      </div>
    </div>
    <div className='box-1'>
      <div className='img'>
        <img src={GeneralCont} alt="" width="95"/>
      </div>
      <div className='seri-text'>
        <h6>GENERAL CONTRACTING</h6>
        <p>We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority...</p>
      </div>
    </div>



  </div>
</div>


  
  
  </>
  )
}

export default Services