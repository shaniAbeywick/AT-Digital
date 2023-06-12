import React from 'react';
import BannerImage from '../assets/Hero Image.jpg';
import "../styles/HeroSection.css"
// import { Button } from 'react-bootstrap';
// import {Card} from 'react-bootstrap';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img  src={BannerImage} alt='img'/>
        <div className='hero-text'>
            <p >
            We crush your 
            competitors, goals, and 
            sales records - without 
            the B.S.</p>
            <button className='hero-btn'>
                <span class="button-text">Get free consultation</span>
            </button>
        </div>
    
      
     
      
    </div>
  )
}

export default HeroSection;
