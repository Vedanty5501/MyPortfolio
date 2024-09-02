import React from 'react'
import './menu.css'
import pp from '../../Assets/my_pic.png'
import profilepic from '../../Assets/profile-pic.jpeg'
import { FcHome, FcBusinessman, FcLibrary, FcTodoList, FcGraduationCap, FcCommandLine, FcDocument, FcPhone } from "react-icons/fc";

const Menus = ({toggle, setView}) => {
  return (
    <>
    {
        !toggle?(
            <>
                <div className='navbar-profile-pic'>
                    <img src={profilepic} alt='profile'/>
                </div>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setView('Home')}><FcHome />Home</div>
                        <div className='nav-link' onClick={() => setView('About')}><FcBusinessman />About</div>
                        <div className='nav-link' onClick={() => setView('WorkEx')}><FcLibrary />Work Experience</div>
                        <div className='nav-link' onClick={() => setView('TechStack')}><FcTodoList/>Tech Stack</div>
                        <div className='nav-link' onClick={() => setView('Education')}><FcGraduationCap />Education</div>
                        <div className='nav-link' onClick={() => setView('Projects')}><FcCommandLine />Projects</div>
                        <div className='nav-link' onClick={() => setView('Resume')}><FcDocument/>Resume</div>
                        <div className='nav-link' onClick={() => setView('Contact')}><FcPhone />Contact Me</div>
                    </div>

                </div>
            </>
        ):
        (
            <>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setView('Home')}><FcHome size={25} title='Home'/></div>
                        <div className='nav-link' onClick={() => setView('About')}><FcBusinessman size={25} title='About'/></div>
                        <div className='nav-link' onClick={() => setView('WorkEx')}><FcLibrary size={25} title='Work Experience'/></div>
                        <div className='nav-link' onClick={() => setView('TechStack')}><FcTodoList size={25} title='Tech Stack'/></div>
                        <div className='nav-link' onClick={() => setView('Education')}><FcGraduationCap size={25} title='Education'/></div>
                        <div className='nav-link' onClick={() => setView('Projects')}><FcCommandLine size={25} title='Projects'/></div>
                        <div className='nav-link' onClick={() => setView('Resume')}><FcDocument size={25} title='Resume'/></div>
                        <div className='nav-link' onClick={() => setView('Contact')}><FcPhone size={25} title='Contact Me'/></div>
                    </div>
                </div>
            </>
        )
    }
        
    </>
  )
}

export default Menus