import React from 'react'
import "./about.css";
import Me from "../../assets/photo1.jpg";

const About = () => {
  return (
    <section className='about__container  section' id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className='about__container grid'>
        <div className='div_contact__img'>
        <img src={Me} className='about__img'/> 
        </div>
        
        

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>My name is Abdelmadjid S'bai, I am 20 years old and I am currently a student at the ISTA NTIC Tangier Vocational Training Institute, specialized in the development of websites, by deferent programming languages such as HTML, CSS, JAVASCREPT, PHP, REACT, LARAVEL. I am currently studying at the Faculty of Legal,
             Economic and Social Sciences, Tangier, with an option in economics and management.</p>
            <a href='' className='btn ' id='cv'>CV <span className='p-1'><i className='icon-arrow-down-circle m-1 p-1'></i></span></a>

          </div>

          <div className='about__skills grid'>
            

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Developpement</h3>
                <span className='skills__number ' id=''>85%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage developpement'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>UI/UX design (Figma)</h3>
                <span className='skills__number'>70%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage ui__design'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Excel</h3>
                <span className='skills__number'>60%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage excel'></span>
              </div>
            </div>


            

          </div>


        </div>
      </div>
    </section>
  )
}

export default About