// ASSETS
import "./Home.css"
import heroCircle from '../img/hero-circle.svg'
import gitHubIcon from '../img/github-icon.svg'
import psICon from '../img/ps-icon.svg'
import nodeIcon from '../img/node-icon.svg'
import figmaIcon from '../img/figma-icon.svg'
import tailwindIcon from '../img/tailwind-icon.svg'
import tabsArrow from '../img/tabs-arrow.svg'
import vueLogo from '../img/vue-logo.svg'
import firebaseLogo from '../img/firebase-logo.svg'
import framerMotionLogo from '../img/framer-motion-logo.svg'
import viteLogo from '../img/vite-logo.svg'
import reactLogo from '../img/react-logo.svg'

// UTILS
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitType from "split-type"

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectsList from "../components/ProjectsList"

function Home({lenis}) {

    gsap.registerPlugin(ScrollTrigger)

    lenis.on('scroll', ({scroll}) => {
        const scrollIcons = document.querySelector('.locomotive-list')
        scrollIcons.style = `transform: translateX(${scroll}px)`
      })

    // DECLARING CONTENT SECTION REFS
    const heroRef = useRef(null)
    const tabsSectionRef = useRef(null)
    const projectsRef = useRef(null)
    const contactSectionRef = useRef(null)
    
    /////////////////////////////////// USE EEFECT START //////////////////////////////////////
    useEffect(() => {

        const linesSplitType = new SplitType('.right-content p', {
            type: 'words',
          });
          
          // Dividir el texto en líneas
          const lines = linesSplitType.lines;

          console.log(lines)

          var liness = document.querySelectorAll('.line');
    
          liness.forEach(function(line) {
              var lineContainer = document.createElement('div');
              lineContainer.className = 'line-container';
              lineContainer.style.overflow = 'hidden';
      
              // Mover el elemento .line dentro del nuevo contenedor
              line.parentNode.insertBefore(lineContainer, line);
              lineContainer.appendChild(line);
          });
 
        // TABS ------------------------------------------------------------------
        let tabLinks = tabsSectionRef.current.querySelectorAll('.tabs button')
        let contentBoxes = tabsSectionRef.current.querySelectorAll('.content-box')

        tabLinks.forEach((link, index) => {

            const linkId = link.getAttribute('data-tab')

            link.addEventListener('click',()=>{
                tabLinks.forEach(link => {
                    link.classList.remove('active')             
                })
                link.classList.add('active')
                contentBoxes.forEach(box => {
                    if(!box.getAttribute('data-tab' == linkId)){
                        if(box.classList.contains('active')){
                            box.classList.add('hidden')
                        }else{
                            box.classList.remove('active')
                        }                        
                    }else{
                        box.classList.remove('active')
                    }
                    
                    setTimeout(() => {
                        contentBoxes.forEach(box =>{
                            box.classList.remove('active')
                            box.classList.remove('hidden')
                        } )

                        contentBoxes[index].classList.add('active')
                    }, 390);
                })
            })
        });

        // GSAP ANIMATIONS ----------------------------------------------------------

        // HERO ANIMATIONS
        const heroTl = gsap.timeline({delay: 1.4})

        const heading = heroRef.current.querySelector('h2')
        const paragraph = heroRef.current.querySelector('.left-content p')
        const link = heroRef.current.querySelector('.left-content a')
        const rightContentImg = heroRef.current.querySelector('.right-content img')
        const iconList = heroRef.current.querySelector('#hero ul')
        
        heroTl.fromTo(heading, {y: '100%'},{y:0, duration:.5, ease:"Expo.Ease", delay: .3})
        heroTl.fromTo(paragraph, {y: '100%'},{y:0, ease:"Expo.Ease",duration:.5}, '-=.25')
        heroTl.fromTo(link, {y: '100%'},{y:0,ease:"Expo.Ease", duration:.5}, '-=.35')
        // Utiliza el método fromTo para animar los elementos con la clase .line
        heroTl.fromTo(lines, {
            y: "100%"
        }, {
            y: 0,
            stagger: 0.1, // Aplica un retraso de 0.1 segundos entre cada elemento
            duration: 1,
            ease: "expo.out", // Puedes ajustar la duración de la animación
        },'-=.2');
        heroTl.fromTo(rightContentImg, {opacity: 0, y: 30},{opacity: 1, y:0 , duration: 1}, '-=.6')
        heroTl.fromTo(iconList, {opacity: 0, y: -30},{opacity: 1, y:0 , duration: 1}, '-=.9')

        // MOUSE FOLLOW ANIMATION

        const projectsH2 = projectsRef.current.querySelector('h2')
        const projectsH2Paragraph = projectsRef.current.querySelector('.container .overflow-box > p')
        const projectsGrid = projectsRef.current.querySelector('.container ul')

        gsap.fromTo(projectsH2, {y: '115%'},{y:0, duration:.5,  ease:"Expo.Ease",scrollTrigger:{
            trigger: projectsH2
        }})
        gsap.fromTo(projectsH2Paragraph, {y: '115%'},{y:0, duration: .5, delay: .2, ease:"Expo.Ease",scrollTrigger:{
            trigger: projectsH2Paragraph
        }})
        

        // TABS ANIMATIONS

        const tabsH2 = tabsSectionRef.current.querySelector('h2')
        const contentWrapper = tabsSectionRef.current.querySelector('.main-wrapper')
        const tabOne = tabsSectionRef.current.querySelector('.tabs button:first-of-type')
        const tabTwo = tabsSectionRef.current.querySelector('.tabs button:nth-of-type(2)')
        const tabThree = tabsSectionRef.current.querySelector('.tabs button:nth-of-type(3)')

        gsap.fromTo(tabsH2, {y: '115%'},{y:0, duration:.5,  ease:"Expo.Ease",scrollTrigger:{
            trigger: tabsH2
        }})
        gsap.fromTo(contentWrapper, {opacity: 0, y: 30},{opacity: 1, y:0, duration: 1.3, scrollTrigger:{
            trigger: contentWrapper
        }})
        gsap.fromTo([tabOne,tabTwo,tabThree],{x:-50, opacity:0}, {x:0, duration: .6, opacity:1,  ease:"Expo.Ease",stagger: .2 , scrollTrigger:{
            trigger: contentWrapper
        }})

        // CONTACT ANIMATIONS

        const contactHeading = contactSectionRef.current.querySelector('h2')
        const contactLiHeadingOne = contactSectionRef.current.querySelector('li:first-of-type h4')
        const contactLiHeadingTwo = contactSectionRef.current.querySelector('li:nth-child(2) h4')
        const contactLiHeadingThree = contactSectionRef.current.querySelector('li:nth-child(3) h4')



        const contactTl = gsap.timeline({scrollTrigger:{
            trigger: contactHeading
        }})

        contactTl.fromTo(contactHeading,{y:"110%"}, {y:0, duration:.7, ease:"Expo.Ease"})
        contactTl.fromTo(contactLiHeadingOne,{y:"110%"}, {y:0, duration:.37, ease:"Expo.Ease"}, '-=.35')
        contactTl.fromTo(contactLiHeadingTwo,{y:"110%"}, {y:0, duration:.37, delay: .1, ease:"Expo.Ease"}, '-=.35')
        contactTl.fromTo(contactLiHeadingThree,{y:"110%"}, {y:0, duration:.37, delay: .1, ease:"Expo.Ease"}, '-=.35')
        
        
    }, []);    

    ////////////////////////////////// USEEFFECT END /////////////////////////////////////////

    return ( 
        <>
            <Header lenis={lenis}/>
            <main>
                <section ref={heroRef} id="hero">
                    <div className="container">
                        <div className="left-content">
                            <div className="overflow-box">
                                <h2>Front End<span className="green-dot">.</span></h2>
                            </div>
                            <div className="overflow-box">
                                <p>Web Developer.</p>
                            </div>
                            <div className="overflow-box">
                                <a onClick={() => lenis.scrollTo('#featured-projects',{offset: -30})} href="#featured-projects" className="body-link">Ver proyectos</a>
                            </div>
                        </div>
                        <div className="right-content">
                            <p>Hello, my name is Gonzalo. I am a front-end web development and design enthusiast. I aim to create enjoyable web experiences for users.</p>
                            <img data-scroll data-scroll-speed="3" className="hero-circle" src={heroCircle} alt="Imagen vectorial que me representa" />
                        </div>                        
                    </div>
                    <ul className="icon-list">
                        <div className="locomotive-list">
                        <div>
                                <li>
                                    <img src={gitHubIcon} alt="" />
                                </li>
                                <li>
                                    <img src={figmaIcon} alt="" />
                                </li>
                                <li>
                                    <img src={psICon} alt="" />
                                </li>
                                <li>
                                    <img src={tailwindIcon} alt="" />
                                </li>
                                <li>
                                    <img src={framerMotionLogo} alt="" />
                                </li>
                                <li>
                                    <img src={firebaseLogo} alt="" />
                                </li>
                            </div>
                            <div>
                                <li>
                                    <img src={gitHubIcon} alt="" />
                                </li>
                                <li>
                                    <img src={figmaIcon} alt="" />
                                </li>
                                <li>
                                    <img src={viteLogo} alt="" />
                                </li>
                                <li>
                                    <img src={vueLogo} alt="" />
                                </li>
                                <li>
                                    <img src={reactLogo} alt="" />
                                </li>
                                <li>
                                    <img src={nodeIcon} alt="" />
                                </li>
                            </div>
                            <div>
                                <li>
                                    <img src={gitHubIcon} alt="" />
                                </li>
                                <li>
                                    <img src={figmaIcon} alt="" />
                                </li>
                                <li>
                                    <img src={firebaseLogo} alt="" />
                                </li>
                                <li>
                                    <img src={tailwindIcon} alt="" />
                                </li>
                                <li>
                                    <img src={reactLogo} alt="" />
                                </li>
                                <li>
                                    <img src={nodeIcon} alt="" />
                                </li>
                            </div>              
                        </div>                                 
                    </ul>  
                </section>
                <section ref={projectsRef} data-scroll id="featured-projects">
                    <div className="container">
                        <div className="overflow-box">
                            <h2>Projects<span className="green-dot">.</span></h2>
                        </div>
                        <div className="overflow-box">
                            <p className="subtitle">Here are some of my selected works for you to get to know my profile a little better.</p>
                        </div>
                        <ProjectsList/>                        
                        
                        {/* <ul>
                        {
                            projetcs.map((project,i) =>{
                                return <ProjectItem  dataScrollSpeed={i % 2 !== 0 ? '2' : ''} key={project.name} link={project.link} id={project.id} name={project.name} type={project.type} src={project.img}/>
                            })
                        }
                         
                        </ul> */}
                    </div>
                </section>
                <section data-scroll ref={tabsSectionRef} id="tabs-section">
                    <div className="container">
                        <div className="overflow-box">
                            <h2>How i work<span className="green-dot">.</span></h2>
                        </div>                       
                        <div className="main-wrapper">
                            <div className="content-wrapper">
                                <div data-tab="tab1" className="active content-box">
                                    <p>I seek to connect with projects that motivate me and drive me to give my best.</p>
                                    <p> also aim to provide digital solutions without forgetting the client's needs.</p>
                                    <a onClick={() => lenis.scrollTo('#contacto',{offset: -30})} href="#contacto" className="body-link">Let's talk</a>
                                </div>
                                <div data-tab="tab2" className="content-box">
                                    <p>I am committed to the proposals and the objectives sought in each project.</p>
                                    <p>Enthusiastic about teamwork, I actively listen and engage in open communication to contribute effectively.</p>
                                    <a onClick={() => lenis.scrollTo('#contacto',{offset: -30})} href="#contacto" className="body-link">Let's talk</a>
                                </div>
                                <div data-tab="tab3" className="content-box">
                                    <p>I specialized in front-end development using technologies such as HTML, CSS, JavaScript, React, Vue, Tailwind, and GSAP. Additionally, I have experience in the WordPress development environment.</p>
                                    <p>Furthermore, I have extensive knowledge of prototyping and design using Figma and Adobe XD.</p>
                                    <a onClick={() => lenis.scrollTo('#contacto',{offset: -30})} href="#contacto" className="body-link">Let's talk</a>
                                </div>
                            </div>
                            <div className="tabs">
                                <button dbuttonta-tab="tab1" href="#" className="active">
                                    <span className="tab-title">Motivation</span>
                                    <img src={tabsArrow} alt="" />
                                </button>
                                <button data-tab="tab2" href="#">
                                    <span className="hidden tab-title">Commitment</span>
                                    <img src={tabsArrow} alt="" />
                                </button>
                                <button data-tab="tab3" href="#">
                                    <span className="hidden tab-title">Stack</span>
                                    <img src={tabsArrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                </main>                  
                    <section ref={contactSectionRef} id="contacto">
                    <div className="container">
                        <div className="left-side">
                            <div className="overflow-box">
                                <h2>Up for a chat?
                                </h2>
                            </div>                        
                            {/* <a href="#" className="body-link">contacto</a> */}
                        </div>
                        <div className="right-side">
                            <ul>
                                <li>
                                    <div className="overflow-box">
                                        <h4>Email</h4>
                                    </div>                                
                                    <a target={'blank'} href='mailto:gonzalobordes@gmail.com' >gonzalobordes@gmail.com</a>
                                </li>
                                <li>
                                    <div className="overflow-box">
                                        <h4>Linkedin</h4>
                                    </div>                               
                                    <a target={'blank'} href='https://www.linkedin.com/in/gonzalo-bordes/'>/gonzalo-bordes</a>
                                </li>
                                <li>
                                    <div className="overflow-box">
                                        <h4>Instagram</h4>
                                    </div>                               
                                    <a target={'blank'} href='https://www.instagram.com/gonzbordes/'>@gonzbordes</a>
                                </li>
                            </ul>
                        </div>                    
                    </div>                
                </section>              
                <Footer/>                   
        </>
     );
}

export default Home;
