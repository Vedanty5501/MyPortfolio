import React,{useState} from 'react'
import './education.css'
import {RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";


function Education() {
  const [gradtoggle, setgradToggle] = useState(false)

    const handlegradToggle = () => {
        setgradToggle(!gradtoggle)
    }

  const [rstoggle, setrsToggle] = useState(false)

    const handlersToggle = () => {
        setrsToggle(!rstoggle)
    }

  const redirectRp = () => {
    window.open("https://ieeexplore.ieee.org/document/10140943","_blank");
  }
  const redirectCer = () => {
    window.open("https://drive.google.com/drive/folders/1_6lnjextCkXkRTha9nhGX3t_NNSDzcTV","_blank");
  }
  const redirectCerpython = () => {
    window.open("https://drive.google.com/file/d/1wjzJsI1eMu4L_0Jw_0pftPT6h3cMdOXE/view?usp=sharing","_blank");
  }
  const redirectCerWeb = () => {
    window.open("https://drive.google.com/file/d/1aHHlZ2NKsjrrq2gApgXgjaBhhFsEKakg/view?usp=sharing","_blank");
  }

  return (
    <div className='container'>
      <div className='heading-edu'>Education</div>
      <div className='graduation'>
        <div className={gradtoggle?'graduation-heading-toggle graduation-heading':'graduation-heading'}>
          <div className='drop'>
          <p onClick={handlegradToggle} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {
              gradtoggle?<RiArrowDropDownLine size={90} />:< RiArrowDropUpLine size={90} />
            }
          </p>
          </div>
          <div className='graduation-name'>
            Bachelor of Technology (B. Tech.)
          </div>
        </div>
        <div className={gradtoggle?'graduation-detail-toggle graduation-detail':'graduation-detail'} style={{width: 660}}>
          <p><text style={{color: 'orange'}}>Institue &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</text>ABES Engineering College</p>
          <p><text style={{color: 'orange'}}>University &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</text>APJ Abdul Kalam Technical university</p>
          <p><text style={{color: 'orange'}}>Passing Year : &nbsp;&nbsp;&nbsp;</text>2025</p>
          <p><text style={{color: 'orange'}}>CGPA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</text>7.5</p>

        </div>
      </div>
      <div className='heading-edu'>Research Paper</div>
      <div className='graduation'>
        <div className={rstoggle?'graduation-heading-toggle graduation-heading':'graduation-heading'} style={{width:800}}>
          <div className='drop'>
          <p onClick={handlersToggle} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {
              rstoggle?<RiArrowDropDownLine size={90} />:< RiArrowDropUpLine size={90} />
            }
          </p>
          </div>
          <div className='graduation-name' style={{fontSize:19, paddingLeft:25, paddingRight:24.5, paddingBottom:35}}>
          An Agile Approach to Energies the Donation Application
          </div>
        </div>
        <div className={rstoggle?'graduation-detail-toggle graduation-detail':'graduation-detail'} style={{width:759, paddingRight:20}}>
          <p><text style={{color: 'orange'}}>Abstract : </text>Conducted research on a mobile application designed to streamline charitable donations for NGOs in India, with a focus on facilitating book and essential needs donations. The study explores how agile methodology and social networking systems can enhance donation processes, improve NGO efficiency, and foster a culture of giving. The paper provides a conceptual investigation into the public's behavior towards donations and highlights the app's potential to create social awareness and positively impact communities.</p>
          <p  onClick={redirectRp}><div className='link'>
              Paper Link
            </div></p>

        </div>
      </div>
      <div className='certificates'>
        <div className='heading-edu'>
          Certificates
        </div>
        <div className='certificate-list'>
          <div className='certi-one'>
          Cisco Certified Network Associate (CCNA) Certification Series
          <div className='view' onClick={redirectCer}>
          <IoEyeSharp /> View
          </div>
          </div>
          <div className='certi-one'>
          Partner: PCAP - Programming Essentials in Python
          <div className='view' onClick={redirectCerpython}>
          <IoEyeSharp /> View
          </div>
          </div>
          <div className='certi-one'>
          The Complete 2023 Web Development Bootcamp
          <div className='view' onClick={redirectCerWeb}>
          <IoEyeSharp /> View
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education