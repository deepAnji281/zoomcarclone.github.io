import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <h1 className='h1' >Why Choose Our <span style={{color:'lightcoral'}}>ZoomCar Clone APP?</span>?</h1>
        <div className='footer'>
      
        <div className='footer1'>
            <img src='Pictures/carngo-clone-2.png'/>
            
        </div>
        <div className='footer2'>
          <div><img src='Pictures/complete.svg'/>
          <h3>comple customizable and branding</h3>
          </div>
          <div><img src='Pictures/android-ios.svg'/>
          <h3>available for andriod ios</h3></div>
          <div><img src='Pictures/high-number-user.svg'/>
          <h3>Easily accomdate a number of user activity</h3></div>
          <div><img src='Pictures/build-developers.svg'/> <h3>Dedicate Admin Pan to manage all the fetures of application</h3>
          </div>
          <div><img src='Pictures/dedicate-admin-panel.svg'/>
          <h3>Provide code to adopt complete customizations</h3></div>
          <div><img src='Pictures/provide-code-support.svg'/>
          <h3>Free bug support in the support period</h3></div>

            </div>
        
        </div>
        <div className='footer3'>
            <h4>Copyright@ not allowed</h4>
        </div>
    </>
  )
}

export default Footer