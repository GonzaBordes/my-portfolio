import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {motion} from 'framer-motion'

function SingleProjectHeader({lenis}) {
    
    gsap.registerPlugin(ScrollTrigger)
    
    useEffect(() => {
        // const headerBottomLine = document.querySelector('.header-line')
        // gsap.from( headerBottomLine,{scaleX: 0, duration: 1.6, ease: "expo.out"})
        // gsap.fromTo(document.querySelector('header'),{opacity:0, duration: 1, delay: .5},{opacity:1})
      }, []);


    return ( 
        <header data-scroll-sticky>            
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
                    <div className="overflow-box">
                        <Link className="slide-link back-home-link" to="/">
                            <span>Back Home</span>
                            <span>Back Home</span>   
                        </Link>
                    </div>
                    <li onClick={() => lenis.scrollTo('#project-details',{offset: document.querySelector('#project-details').offsetTop})} className="overflow-box bottom-link">
                        <div><a className=" body-link" href="#contacto">
                                <span>Contact</span>
                            </a>
                        </div>
                    </li>
                </nav>
            </motion.div>
            <motion.div initial={{scaleX:0}} animate={{scaleX: 1}} transition={{duration:.7, delay: 0}} className="origin-left header-line"></motion.div>
        </header>
     );
}

export default SingleProjectHeader;
