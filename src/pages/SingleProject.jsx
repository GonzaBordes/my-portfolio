import { useParams } from "react-router-dom"
import {data as projetcs} from '../data/projects.js'
import PageTransitions from "../components/PageTransition.jsx"
import '../pages/SingleProject.css'
import SingleProjectHeader from "../components/singleProject/SingleProjectHeader.jsx"
import { ContactSection } from "../components/ContactSection.jsx"
import HorizontalImages from "../components/singleProject/HorizontalImages.jsx"
import SingleHero from "../components/singleProject/SingleHero.jsx"
import Footer from "../components/Footer.jsx"
import { SingleProjectDetails } from "../components/singleProject/SingleProjectDetails.jsx"
import {motion} from 'framer-motion'
import { useEffect } from "react"
import heroGradient from '../img/hero-gradient.svg'


const SingleProject = ({lenis}) => {
    const params = useParams()

    console.log(params.slug)

    let renderedProject = ''
    projetcs.forEach(loopedProject => {
        if(loopedProject.slug === params.slug){
            renderedProject = loopedProject
        }
    })    

    useEffect(() => {
        lenis.scrollTo(0,{duration: 0, lerp:20})
    }, []);
    
  return (
    <>
        <PageTransitions routeName={renderedProject.name} />
        <div exit={{rotateX: '6deg'}} transition={{duration: .4}}>
        <div>
            
            <SingleProjectHeader lenis={lenis} />
            <main id="single-project">
                <img src={heroGradient} className="hero-circle"  />  
                <SingleHero project={renderedProject}/>
                <HorizontalImages images={renderedProject.detail_images}/>
                <SingleProjectDetails project={renderedProject} />
            </main>
            <div className="sticky-bottom">
                <ContactSection  />
                <Footer/>
            </div>       
        </div>
    </div>    
    </>
   
    
    
    
  )
}

export default SingleProject