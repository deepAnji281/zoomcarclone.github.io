import React from 'react'
import './Header.css'

function Header() {
  return (
   <div className='header'>
   <img src='Pictures/O.jpg' className='logo'/>
   <div className='Text'>mninos Solutions</div>
   <div className='search-icon'>
   <i class="fa fa-search" ></i>
   </div>
   <a className='comp' href=''>Home</a>
   <a href='https://www.goteso.com/products/on-demand-products-services-delivery-app-development-company.html' className='comp'>Our Products</a>
   <a className='comp' href='https://www.goteso.com/services/'>Services</a>
   <a className='comp' href='https://search.walletgenius.com/serp?q=car%20software&segment=walletg.g017&s1aid=7470792284&s1cid=17039486831&s1agid=135676421173&s1kid=kwd-25923326&utm_source=adwords&gclid=Cj0KCQjw8O-VBhCpARIsACMvVLMAGwTFwcRamtuGzbqDF2DeRg80y_dUG6ftqtfbyA_7LctHqA4aP6YaAqoeEALw_wcB'>Software</a>
   <a className='comp' href='https://www.instahyre.com/jobs-at-zoomcar/'>Hire Developers</a>
   <a className='comp' href='https://www.zoomcar.com/zoomcar-mobility-services/blog/?p=96'>Solutions</a>
   <a className='comp' href='https://www.omninos.in/current-opening.php'>About Us</a>
   <a href='https://www.omninos.in/contact.php' className='comp'>Contact Us</a>
   

   </div>
  )
}

export default Header