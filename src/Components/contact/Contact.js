import React,{ useRef } from 'react';
import "./contact.css";
import Me from "../../assets/photo1.jpg";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7rvj3nt', 'template_gfhth0d', form.current, {
        publicKey: 'Tr1szeCeiQ3XUbXHk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='about__container  section' id='contact'>
      <h2 className='section__title'>Contact Me</h2>

      <div className='about__container grid'>
       

        <div className='about__data grid'>
          <div className='about__skills grid'>
          <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" className='btn' name="from_name" /><br/>
      <label>Email</label>
      <input type="email" className='btn' name="from_email" /><br/>
      <label>Message</label>
      <textarea name="message" className='btn' /><br/>
      <input type="submit" className='btn contactme' value="Send" />
    </form>
            

            

           
           

            {/* <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>E-mail :<a href='sbai.abdelmajid11@gmail.com'>sbai.abdelmajid11@gmail.com</a></h3>  
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Number Phone :<a href=''>0678474089</a></h3>
              </div>
            </div> */}



            

          </div>


        </div>
      </div>
    </section>
  )
}

export default Contact