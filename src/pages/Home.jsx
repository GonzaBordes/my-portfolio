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

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectsList from "../components/ProjectsList"

function Home() {

    gsap.registerPlugin(ScrollTrigger)

    // DECLARING CONTENT SECTION REFS
    const heroRef = useRef(null)
    const tabsSectionRef = useRef(null)
    const projectsRef = useRef(null)
    const contactSectionRef = useRef(null)
    
    /////////////////////////////////// USE EEFECT START //////////////////////////////////////
    useEffect(() => {
        
        // TABS ------------------------------------------------------------------
        let tabLinks = tabsSectionRef.current.querySelectorAll('.tabs a')
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
        const heroTl = gsap.timeline()

        const heading = heroRef.current.querySelector('h2')
        const paragraph = heroRef.current.querySelector('.left-content p')
        const link = heroRef.current.querySelector('.left-content a')
        const rightContent = heroRef.current.querySelector('.right-content')
        const rightContentImg = heroRef.current.querySelector('.right-content img')
        const iconList = heroRef.current.querySelector('#hero ul')
        
        heroTl.fromTo(heading, {y: '100%'},{y:0, duration:.5, ease:"Expo.Ease", delay: .3})
        heroTl.fromTo(paragraph, {y: '100%'},{y:0, ease:"Expo.Ease",duration:.5}, '-=.25')
        heroTl.fromTo(link, {y: '100%'},{y:0,ease:"Expo.Ease", duration:.5}, '-=.35')
        heroTl.fromTo(rightContent, {opacity: 0},{opacity: 1 , duration: 1}, '-=.1')
        heroTl.fromTo(rightContentImg, {opacity: 0, y: 30},{opacity: 1, y:0 , duration: 1}, '-=.5')
        heroTl.fromTo(iconList, {opacity: 0, y: -30},{opacity: 1, y:0 , duration: 1}, '-=1')

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
        gsap.fromTo(projectsGrid, {opacity: 0, y: 80},{opacity: 1, y:0, delay: .5, duration: 1.3, scrollTrigger:{
            trigger: projectsGrid
        }})

        // TABS ANIMATIONS

        const tabsH2 = tabsSectionRef.current.querySelector('h2')
        const contentWrapper = tabsSectionRef.current.querySelector('.main-wrapper')
        const tabOne = tabsSectionRef.current.querySelector('.tabs a:first-of-type')
        const tabTwo = tabsSectionRef.current.querySelector('.tabs a:nth-of-type(2)')
        const tabThree = tabsSectionRef.current.querySelector('.tabs a:nth-of-type(3)')

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
            <Header/>
            <main data-scroll-section>
                <section data-scroll ref={heroRef} id="hero">
                    <div className="container">
                        <div className="left-content">
                            <div className="overflow-box">
                                <h2>Front End<span className="green-dot">.</span></h2>
                            </div>
                            <div className="overflow-box">
                                <p>Web Developer.</p>
                            </div>
                            <div className="overflow-box">
                                <a href="#featured-projects" className="body-link">Ver proyectos</a>
                            </div>
                        </div>
                        <div className="right-content">
                            <p>Hola, me llamo Gonzalo. Soy un entusiasta del desarrollo y diseño web front end. Busco brindar experiencias web agradables para el usuario.</p>
                            <img data-scroll data-scroll-speed="3" className="hero-circle" src={heroCircle} alt="Imagen vectorial que me representa" />
                        </div>                        
                    </div>
                    <ul>
                        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="5" className="locomotive-list">
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
                            <h2>Proyectos<span className="green-dot">.</span></h2>
                        </div>
                        <div className="overflow-box">
                            <p className="subtitle">Estos son algunos de mis trabajos seleccionados para que conozcas un poco más mi perfil.</p>
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
                            <h2>Como trabajo<span className="green-dot">.</span></h2>
                        </div>                       
                        <div className="main-wrapper">
                            <div className="content-wrapper">
                                <div data-tab="tab1" className="active content-box">
                                    <p>Trato de conectarme con proyectos que me motiven e impulsen a dar lo mejor de mi.</p>
                                    <p>También de brindar soluciones digitales sin olvidarme de las necesidades del cliente.</p>
                                    <a href="#contacto" className="body-link">Hablemos</a>
                                </div>
                                <div data-tab="tab2" className="content-box">
                                    <p>Me comprometo con las propuestas y con el objetivo que se busca en cada proyecto.</p>
                                    <p>Me gusta trabajar en equipo mediante la escucha y el intercambio activo.</p>
                                    <a href="#contacto" className="body-link">Hablemos</a>
                                </div>
                                <div data-tab="tab3" className="content-box">
                                    <p>Me especialicé en el desarrollo front-end utilizando tecnologías como HTML, CSS, JavaScript, React, Vue, Tailwind y GSAP.</p>
                                    <p>Además, Tengo amplios conocimientos de prototipado y diseño utilizando Figma y Adobe xd.</p>
                                    <a href="#contacto" className="body-link">Hablemos</a>
                                </div>
                            </div>
                            <div className="tabs">
                                <a data-tab="tab1" href="#" className="active">
                                    <span className="tab-title">Motivación</span>
                                    <img src={tabsArrow} alt="" />
                                </a>
                                <a data-tab="tab2" href="#">
                                    <span className="hidden tab-title">Compromiso</span>
                                    <img src={tabsArrow} alt="" />
                                </a>
                                <a data-tab="tab3" href="#">
                                    <span className="hidden tab-title">Stack</span>
                                    <img src={tabsArrow} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={contactSectionRef} id="contacto">
                <div className="container">
                    <div className="left-side">
                        <div className="overflow-box">
                            <h2>¿Querés que hablemos?
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
            </main>            
            <Footer/>                    
        </>
     );
}

export default Home;
