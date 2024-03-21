import React from 'react';
import "./home.css";
import Me from "../../assets/photo1.jpg";
import Socials from './Socials';
import Scrool from './Scrool';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
      <div className='div-home__img'>
        <img src={Me} className='home__img'/>
      </div>
      <h1 className='home__name'>S'bai Abdelmajid</h1>
      <span className='home__education'>I'm a Full Stack developer</span>
      
      <Socials/>

      <a href='#contact' className='btn'>Contact Me</a>
      <Scrool/>
      </div>

      
      
    </section>
  )
}

export default Home