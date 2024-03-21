import React from 'react';
import "./contact.css";
import Me from "../../assets/photo1.jpg";

const Contact = () => {
  return (
    <section className='about__container  section' id='contact'>
      <h2 className='section__title'>Contact Me</h2>

      <div className='about__container grid'>
        <div className='div_contact__img'>
         <img src={Me} className='contact__img'/> 
        </div>

        <div className='about__data grid'>
          <div className='about__skills grid'>
            

            <div className='skills__data'>
              <div className='skills__titles'>
                <h5 className='skills__name'><a href=''><i class="fa-brands fa-instagram">.</i>Abdelmajid.sbai.oficiel</a></h5>
                
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'><a href=''><i class="fa-brands fa-facebook">.</i>Abdelmajid.sbai</a></h3>
               
              </div>

            
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'><a href=''><i class="fa-brands fa-github">.</i>Abdelmajid.sbai</a></h3>
                
              </div>

            
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>E-mail :<a href=''>sbai.abdelmajid11@gmail.com</a></h3>
                
              </div>

            
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Number Phone :<a href=''>0678474089</a></h3>
                
              </div>

            
            </div>



            

          </div>


        </div>
      </div>
    </section>
  )
}

export default Contact