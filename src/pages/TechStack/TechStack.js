import React from 'react'
import './techstack.css'  
import c from '../../Assets/techStack/c.png'
import cpp from '../../Assets/techStack/cpp.png'
import python from '../../Assets/techStack/python.png'
import html from '../../Assets/techStack/html.png'
import js from '../../Assets/techStack/javascript.png'
import node from '../../Assets/techStack/node.png'
import react from '../../Assets/techStack/react.png'
import sql from '../../Assets/techStack/Sql.png' 
import mongo from '../../Assets/techStack/mongo.png' 
import android from '../../Assets/techStack/android.png'
function TechStack() {
  return (
    <div className='TechStack'>
      <div className='heading'><p>TechStack</p></div>
      <div className='row1'>
      <div className='c'>
        <img src={c} alt='C'/>
      </div>
      <div className='cpp'>
        <img src={cpp} alt='C++'/>
      </div>
      <div className='python'>
        <img src={python} alt='Python'/>
      </div>
      <div className='html'>
        <img src={html} alt='HTML & CSS'/>
      </div>
      </div>
      <div className='row2'>
      <div className='JS'>
        <img src={js} alt='JavaScript'/>
      </div>
      <div className='node'>
        <img src={node} alt='NodeJs'/>
      </div>
      <div className='react'>
        <img src={react} alt='ReactJS'/>
      </div>
      <div className='android'>
        <img src={android} alt='Android Studio'/>
      </div>
      </div>
      <div className='row3'>
        <div className='empty'></div>
      <div className='sql'>
        <img src={sql} alt='SQL'/>
      </div>
      <div className='mongo'>
        <img src={mongo} alt='MongoDB'/>
      </div>
      </div>
      
    </div>
  )
}

export default TechStack