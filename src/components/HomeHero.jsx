import SplitType from "split-type"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {motion} from 'framer-motion'

// Icons
import heroGradient from '../img/hero-gradient.svg'
import gitHubIcon from '../img/github-icon.svg'
import psICon from '../img/ps-icon.svg'
import nodeIcon from '../img/node-icon.svg'
import figmaIcon from '../img/figma-icon.svg'
import tailwindIcon from '../img/tailwind-icon.svg'
import vueLogo from '../img/vue-logo.svg'
import firebaseLogo from '../img/firebase-logo.svg'
import framerMotionLogo from '../img/framer-motion-logo.svg'
import viteLogo from '../img/vite-logo.svg'
import reactLogo from '../img/react-logo.svg'

const HomeHero = ({lenis}) => {

    useGSAP(() => {

        // HERO ANIMATIONS

        const wordsSplitType = new SplitType('.right-content p', {
            type: 'words',
          });

          const headingSplit = new SplitType('#hero h2.split')
          const headingChars = document.querySelectorAll('h2 .char')

         gsap.from(headingChars,{ yPercent: -120, duration: .2, stagger: .015, delay: 1.6 })

          // Dividir el texto en líneas
          const words = wordsSplitType.words;

          console.log(words)

          var wordss = document.querySelectorAll('.right-content .line');
    
          wordss.forEach(function(line) {
              var lineContainer = document.createElement('div');
              lineContainer.className = 'line-container';
              lineContainer.style.overflow = 'hidden';
      
              // Mover el elemento .line dentro del nuevo contenedor
              line.parentNode.insertBefore(lineContainer, line);
              lineContainer.appendChild(line);
          });
 
        
        const heroTl = gsap.timeline()

       
        const paragraph = document.querySelector('#hero .left-content p')
        const link = document.querySelector('#hero .left-content .bottom-gradient')
        const iconList = document.querySelector('#hero .icons-wrapper')
        const heroCircle = document.querySelector(' .hero-circle')

        // Utiliza el método fromTo para animar los elementos con la clase .line
        heroTl.fromTo(words, {
            x: 10,
            opacity: 0
        }, {
            opacity:1,
            x: 0,
            stagger: 0.025, // Aplica un retraso de 0.1 segundos entre cada elemento
            duration: 1.4,
            delay: 2,
            ease: "expo.out", // Puedes ajustar la duración de la animación
        })        
        heroTl.fromTo(link, {y: '30%', opacity:0},{opacity:1,y:0,ease:"Expo.Ease", duration:.3},'-=1.2')        
        heroTl.fromTo(iconList, {opacity: 0, y: -30},{opacity: 1, y:0 , duration: 1},'-=1')
        heroTl.to(heroCircle, {opacity:1 ,ease:"Expo.Ease", duration: 1.3},'-=1.5')
        
    }, []);

  return (
    <section id="hero">
        <div className="container">
            <div className="left-content">
                <div className="overflow-box">
                    <h2  className=" split black-heading-gradient">
                        <span>Front End Development Specialist</span>
                        <span>With <span>passion</span> and <em>dedications</em></span>
                    </h2>
                </div>
                <div className="right-content">
                <p>Hello, my name is Gonzalo. I am a front-end web development and design enthusiast. I aim to create enjoyable web experiences for users.</p>
                <img src={heroGradient} className="hero-circle"  />                
                </div>   
                <div className="bottom-gradient m-auto overflow-box">
                    <a onClick={() => lenis.scrollTo('#sticky',{offset: -30})} href="#featured-projects" className="body-link"> My Projects</a>
                </div>
            </div>

        </div>
        <div className="icons-wrapper">
            <div className="icon-list">  
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={psICon} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={framerMotionLogo} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={viteLogo} alt="" />
                    <img src={vueLogo} alt="" />
                    <img src={reactLogo} alt="" />
                    <img src={nodeIcon} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={reactLogo} alt="" />
                    <img src={nodeIcon} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={psICon} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={framerMotionLogo} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={reactLogo} alt="" />                          
            </div>
            <div className="icon-list">  
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={psICon} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={framerMotionLogo} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={viteLogo} alt="" />
                    <img src={vueLogo} alt="" />
                    <img src={reactLogo} alt="" />
                    <img src={nodeIcon} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={reactLogo} alt="" />
                    <img src={nodeIcon} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={psICon} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={framerMotionLogo} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={gitHubIcon} alt="" />
                    <img src={figmaIcon} alt="" />
                    <img src={firebaseLogo} alt="" />
                    <img src={tailwindIcon} alt="" />
                    <img src={reactLogo} alt="" />                          
            </div>
        </div>
    </section>
  )
}

export default HomeHero