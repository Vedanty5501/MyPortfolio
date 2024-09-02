import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import './home.css'

const Home = () => {

  const [text] = useTypewriter({
    words:['An Android Developer','A MERN Developer'],
    loop:true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <>
        <div className={'container-fluid home-container'}>
          <div className='container home-content' >
            <h1>Hii There!👋</h1><br/>
            <h1 style={{fontFamily: 'Playfair Display'}}>I am{' '}<span style={{fontWeight:'bold', color: '#cd5ff8'}}>Vedant</span></h1>
            <br/>
            <h1>I am {' '}
            <span style={{fontWeight:'bold', color: '#cd5ff8'}}>
              {text}
              
            </span>
            <Cursor/>
            </h1>
            
          </div>
        </div>      
    </>
  )
}

export default Home;    