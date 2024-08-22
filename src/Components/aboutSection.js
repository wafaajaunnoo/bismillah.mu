import React from 'react'
import "./styles.css";

const aboutSection = () => {
  return (
    <div className='aboutSection'>
        <h1>Salaam.</h1>
        <p><strong>bismillah.mu</strong> is your go-to platform for discovering Halal food spots, mosques, and prayer rooms across Mauritius. </p>
        <p>Our mission is simple: to provide you with a hassle-free experience in finding places where you can dine and pray comfortably according to your faith.</p>
        <p>Our curated list of Halal eateries and prayer spaces is tailored to meet your needs, whether you're a resident seeking your next dining destination or a visitor exploring Mauritius. </p>
        <p>May our platform serve its purpose.</p>
        <input type='button' value="explore" aria-label='explore' tabIndex={1} id='explore-btn'/>
    </div>
  )
}

export default aboutSection