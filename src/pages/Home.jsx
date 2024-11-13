// ASSETS
import "./Home.css"
import {animate, delay, motion} from 'framer-motion'

// UTILS
import ScrollTrigger from "gsap/ScrollTrigger"
import { useState, useEffect } from "react"

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectsList from "../components/ProjectsList"
import { ContactSection } from "../components/ContactSection"

import gsap from "gsap"
import { TabsSection } from "../components/TabsSection"
import HomeHero from "../components/HomeHero"


const animationContainerVariants = {
    initial: {},
    animate: {

      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
        delay: .2
        
      }
    }
  }

const animationLetterVariants = {
    initial: { opacity: 0},
    animate: {
    opacity:1,
    transition:{ duration: 1},
    }
  }

function Home({lenis}) {

    const [loading, setLoading] = useState(true)    

    gsap.registerPlugin(ScrollTrigger)

    

    useEffect(() => {
      lenis.scrollTo(0,{ immediate: true })

      setTimeout(() => {
        setLoading(false)
      }, 2150);

    }, [lenis]);

    return (
        <div>
          <motion.div
            className='transition cover gradient transition-none' 
            initial={{translateX:'-100%'}}
            // animate={{translateY: '100%'}}
            exit={{translateX: 0}}
            transition={{duration: .8 , ease: [0.87, 0, 0.13, 1]}}/>

            <motion.div
            className='transition cover black transition-none' 
            initial={{translateX:'-100%'}}
            // animate={{translateY: '100%'}}
            exit={{translateX: 0}}
            transition={{duration: .8 ,delay: .04, ease: [0.87, 0, 0.13, 1]}}/>

          <motion.div
          className='transition gradient home horizontal transition-none' 
          initial={{translateY:'0'}}
          animate={{translateY: '-100%'}}
          transition={{duration: .46, delay: 1.49, ease: [.77,.35,.38,.79]}}/>
            
            <motion.div
          className='transition black home transition-none' 
          initial={{translateY:'0'}}
          animate={{translateY: '-100%'}}
          transition={{duration: .46, delay: 1.4, ease: [.77,.35,.38,.79]}}>
            <motion.div variants={animationContainerVariants} initial="initial" animate={'animate'} className='overflow-box transition-none'>
              <motion.span variants={animationLetterVariants}
              className='block transition-none transition-heading-gradient'
             
             
              >G</motion.span>
              <motion.span variants={animationLetterVariants} 
              className='block transition-none transition-heading-gradient'
              
              >B</motion.span>
              <motion.span variants={animationLetterVariants}
              className='block transition-none transition-heading-gradient'
              
              
              >O</motion.span>
            </motion.div>
          </motion.div>

            <motion.div className="home-content" >
              <Header lenis={lenis} gsap={gsap}/>      
              <main>
                <HomeHero lenis={lenis} />
                <section id="sticky">
                    <div className="container">
                        <div className="left-content">
                          <div className="overflow-box">
                            <h2 className="black-heading-gradient">My Work</h2>
                          </div>
                          <div className="overflow-box" style={{marginTop: '1rem'}}>
                              <p className="subtitle">Here are some of my selected works for you to get to know my profile a little better.</p>
                          </div>
                        </div>                           
                        <ProjectsList/>                        
                    </div>
                </section>
                <TabsSection lenis={lenis}/>
              </main>
              <div className="sticky-bottom">
                <ContactSection />            
                <Footer/>  
              </div>                                    
            </motion.div>
          
        </div>
        
     );
}

export default Home;
