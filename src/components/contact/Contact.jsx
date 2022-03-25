import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {RiMessengerLine} from "react-icons/ri"
import {FaWhatsapp} from "react-icons/fa"
import { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b6o9a8c', 'template_vvamhrl', form.current, 'N3IQbjUBLfIhhbY_T')
    e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'> 
      <div className='contact__options'> 
      <article className='contact__option'>
        <HiOutlineMail className="contact__option-icon"/>
        <h4>Email</h4>
        <h5> razaibtariq@gmail.com</h5>
        <a href= "mailto:razaibtariq@gmail.com" target="_blank" rel="noreferrer"> Send a message </a>
      </article>

      <article className='contact__option'>
        <RiMessengerLine className="contact__option-icon"/>
        <h4>Messenger</h4>
        <h5>Razaib Tariq</h5>
        <a href= "https://m.me//RazaibTariq" target="_blank" rel="noreferrer"> Send a message </a>
      </article>

      <article className='contact__option'>
        <FaWhatsapp className="contact__option-icon"/>
        <h4>WhatsApp</h4>
        <h5> +12345678</h5>
        <a href= "https://api.whatsapp.com/send?phone=+12345678" target="_blank" rel="noreferrer"> Send a message </a>
      </article>   
      </div> 
      {/* End of Contact Option */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="text" name="email" placeholder="Your Email" required />
        <textarea name="message" row="7" placeholder="Your Message" required /> 
        <button type='submit' className="btn btn-primary">Send Message </button>
       </form>
       
    </div>
    </section>
  )
}

export default Contact