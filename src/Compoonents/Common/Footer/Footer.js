import React from 'react'
import styles from './style.module.css';

const Footer = () => {
  return (
    <>
     <div className={styles.footerup}>
        <div className={styles.categories}>
            <h4>POPULAR CATEGORIES</h4>
            <ul>
                <li> Cars</li>
                <li>Bikes</li>
                <li>Property</li>
                <li> Mobiles</li>
            </ul>
        </div>
        <div className={styles.trending}> 
            <h4>TRENDING</h4> 
            <ul>
                <li> Cars</li>
                <li>Bikes</li>
                <li>Property</li>
                <li> Mobiles</li>
            </ul>
        </div>
        <div className={styles.about}>
            <h4>ABOUT US</h4> 
            <ul>
                <li> Cars</li>
                <li>Bikes</li>
                <li>Property</li>
                <li> Mobiles</li>
            </ul>
        </div>
        <div className={styles.social}>
            <h4>FOLLOW US ON</h4> 
            <br/>  <br/>  <br/>  
            <div className={styles.socialicon}>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-whatsapp"></i>
            </div>
           
        </div>
     </div>
    </>
  )
}

export default Footer;
