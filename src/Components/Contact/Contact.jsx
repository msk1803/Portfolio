import React from 'react';
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import {ImWhatsapp} from 'react-icons/im';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) =>{
e.preventDefault();

emailjs.sendForm('service_pzoodlu', 'template_dg8jjgf', form.current, 'L-kHubT35KRDN0Ukr')
e.target.reset()
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
  };
  return (
    <section id="contact"> 
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
         <h4>Email</h4>
         <h5>shubham.kumar1997@gmail.com</h5>
         <a href="mailto:shubham.kumar1997@gmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <ImWhatsapp/>
         <h4>Whatsapp</h4>
         <h5>shubham.kumar1997@gmail.com</h5>
         <a href="https://wa.me/7979942757" target="__blank">Send a message</a>
        </article>
        <article className="contact__option">
          <ImWhatsapp/>
         <h4>Whatsapp</h4>
         <h5>shubham.kumar1997@gmail.com</h5>
         <a href="https://wa.me/7979942757" target="__blank">Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required/>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact
