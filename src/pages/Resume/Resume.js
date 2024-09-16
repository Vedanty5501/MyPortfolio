import React from 'react'
import resume from '../../Assets/Vedant - Latest.pdf'
import './resume.css'


const Resume = () => {


  const download = () => {
      const link = document.createElement('a');
      link.href = resume; 
      link.download = 'Vedant - Latest.pdf'; 
      link.click();
  };



  return (
    <div >
      <div className='heading-edu' style={{marginLeft: 350, textAlign: 'center'}}>Resume</div>
      <div className='pdf-view'>
      <embed src={resume} type="application/pdf" className='pdf' />
      </div>
      <div className='download-button' onClick={download}>
        Download Resume
      </div>
    </div>
  )
}

export default Resume