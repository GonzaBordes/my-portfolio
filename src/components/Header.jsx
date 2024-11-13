import { useEffect } from "react"
import "./Header.css"
import {motion} from 'framer-motion'

function Header({lenis, gsap}) {
    
   

      useEffect(() => {
        // const headerBottomLine = document.querySelector('.header-line')
        // const header = document.querySelector('header')
        // gsap.from( headerBottomLine,{scaleX: 0, duration: 1.2, delay: 1.3,ease: "expo.out"})
        // gsap.from(document.querySelector('header .container'),{opacity:0, duration: 1, delay: 1.9})
      }, []);

    return ( 
        <header >            
            <motion.div animate={{opacity: 1}} initial={{opacity:0}} transition={{duration: 1}} className="container">
                <h1>Desarrollador web</h1>
                <div className="logo">
                    <span className="word gonza">G
                        <span className="word-container">
                            <span className="word-fragment">onzalo</span>
                        </span>
                    </span>
                    <span className="word bordes">Bo<span className="green-dot">.</span>
                        <span className="word-container">
                            <span className="word-fragment">rdes</span>
                        </span>
                    </span>
                </div>
                <div className="burger-box">
                    <span className="burger-line"></span>
                </div>
                <nav>
                    <ul>
                        <li onClick={() => lenis.scrollTo('#sticky',{offset: -30})} className="overflow-box">
                            <div><a className="slide-link" href="#featured-projects">
                                <span>Works</span><span>Works</span>                                
                            </a></div>
                        </li>
                        <li onClick={() => lenis.scrollTo('#tabs-section',{offset: -30})} className="overflow-box">
                            <div><a className="slide-link" href="#tabs-section">
                                <span>About</span><span>About</span>   
                                </a></div>
                        </li>
                        <li onClick={() => lenis.scrollTo('#tabs-section',{offset: document.querySelector('#tabs-section').offsetTop})} className="overflow-box bottom-link">
                            <div><a className=" body-link" href="#contacto">
                                    <span>Contact</span>
                                </a></div>
                        </li>
                    </ul>                    
                </nav>
                <div className="header-line"></div>
            </motion.div>
            {/* <motion.div initial={{scaleX:0}} animate={{scaleX: 1}} transition={{duration:.55}} className="origin-left header-line"></motion.div> */}
        </header>
     );
}

export default Header;
