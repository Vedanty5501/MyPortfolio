import React,{useState} from 'react'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import WorkEx from '../../pages/WorkEx/WorkEx'
import TechStack from '../../pages/TechStack/TechStack'
import Resume from '../../pages/Resume/Resume'
import Education from '../../pages/Education/Education'
import Projects from '../../pages/Projects/Projects'
import Contact from '../../pages/Contact/Contact'
import Menus from '../Menus/Menus';
import './Layout.css'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const Layout = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const [view,setView] = useState('Home')


    // const handleView = (inp) => {
    //     switch(inp){
    //         case 'Home': setView('Home');
    //                      break
    //         case 'About': setView('About');
    //                       break
    //         default:
    //             setView('Home')
    //     }
    //     console.log(view)
    // }


  return (
    <>
    <div className='page'>
        <div className='sidebar-section' >
            <div className={toggle? 'sidebar':'sidebar-toggle sidebar'}>
                <div className='sidebar-toggle-icons'>
                <p onClick={handleToggle}>
                    {
                        toggle?(<AiOutlineDoubleRight style={{borderEndStartRadius:'10px', borderStartStartRadius:'10px'}} size={30} />):(<AiOutlineDoubleLeft style={{borderEndStartRadius:'10px', borderStartStartRadius:'10px'}} size={30} />)
                    }
                </p>
                </div>
                <Menus toggle={toggle} setView={setView}/>
            </div>
        </div>
        <div className='display-content'>
            {view === 'Home' && <Home />}
            {view === 'About' && <About />}
            {view === 'WorkEx' && <WorkEx />}
            {view === 'TechStack' && <TechStack />}
            {view === 'Education' && <Education />}
            {view === 'Projects' && <Projects />}
            {view === 'Resume' && <Resume />}
            {view === 'Contact' && <Contact />}
        </div>
        
    </div>
    </>
  )
}

export default Layout