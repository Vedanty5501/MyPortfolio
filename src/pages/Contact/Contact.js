import {React, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { PiWhatsappLogo } from "react-icons/pi";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_o54e85s', 'template_rmvsaxv', form.current, {
          publicKey: 'L1ofkkFYaGencajD2',
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
    <div className='container'>
      <div className='heading-edu' style={{marginLeft:50}} >Contact Me</div>
      <div className='contact'>
        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail} >
          <label for="Name"><span class="req">* </span>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="Name" name="name" placeholder='Your Name'/><br/>
          <label for="Email"><span class="req">* </span>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="Email" name="email" placeholder='Your Email' /><br/>
          <label for="Phone"><span class="req">&nbsp; </span>Phone Number:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="Phone" name="phone" placeholder='Phone Number' /><br/>
          <label for=""><span class="req">* </span>Message:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
          <textarea type="text" id="Msg" name="msg" placeholder='Message'/><br/>
          <button className='submit' type="submit">Submit</button>
          {/* <div className='submit'>Send</div> */}
          </form>
          <div className='contact-text'>You can also connect with me on <PiWhatsappLogo size={25}/> +91 9625064432 </div>
        </div>
      </div>
    </div>
  )
}

export default Contact