import {React, useState} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { PiWhatsappLogo } from "react-icons/pi";

const Contact = () => {

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Name.length===0){
      alert("Name field is neccessary")
      return
    }
    if (!validateEmail(Email)){
      alert("Enter Valid Mail id")
      return
    }
    const service_id = 'service_o54e85s'
    const template_id = 'template_rmvsaxv'
    const public_key = 'L1ofkkFYaGencajD2'


    const template_params = {
      from_name: Name,
      from_email: Email,
      to_name: 'Vedant',
      message: Message,
    };

    emailjs.send(service_id,template_id,template_params,public_key)
    .then((response)=>{
      // console.log('Email sent successfully!',response);
      alert('Contact request sent successfully. Will soon connect back')
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error)=> {
      console.error('Error sending email:',error)
      alert('Some error occured')
    });
  }



  return (
    <div className='container'>
      <div className='heading-edu' style={{marginLeft:50}} >Contact Me</div>
      <div className='contact'>
        <div className='contact-form'>
          <form className='emailform' onSubmit={handleSubmit}>
          <label for="Name"><span class="req">* </span>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="Name" name="name" placeholder='Your Name' value={Name} onChange={(e) => setName(e.target.value)}/><br/>
          <label for="Email"><span class="req">* </span>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="Email" name="email" placeholder='Your Email' value={Email} onChange={(e) => setEmail(e.target.value)} /><br/>
          <label for=""><span class="req">* </span>Message:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
          <textarea type="text" id="Msg" name="msg" placeholder='Message' value={Message} onChange={(e) => setMessage(e.target.value)}/><br/>
          <button className='submit' type="submit">Submit</button>
          {/* <div className='submit'>Send</div> */}
          </form>
          <div className='contact-text'>You can also connect with me on <PiWhatsappLogo size={25}/> <a href='https://wa.me/919625064432' target='_blank' style={{ color: "white" }}> Connect Me </a></div>
        </div>
      </div>
    </div>
  )
}

export default Contact