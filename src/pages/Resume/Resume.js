import React from 'react'
import resume from '../../Assets/Vedant - Latest.pdf'
import './resume.css'


function Resume() {
  return (
    <div >
      <div className='heading-edu' style={{marginLeft: 300}}>Resume</div>
      <div className='pdf-view'>
      <embed src={resume} type="application/pdf" className='pdf' />
      </div>
    </div>
  )
}

export default Resume