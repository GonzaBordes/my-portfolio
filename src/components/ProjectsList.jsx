// DATA
import {data as projetcs} from '../data/projects.js'
import SplitType from "split-type"
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function ProjectsList() {

  useGSAP(() => {
    
    gsap.registerPlugin(ScrollTrigger)

    const projectLiAll = document.querySelectorAll('#sticky li')
    const projectsH2 = document.querySelector('#sticky h2')
    const projectsH2Paragraph = document.querySelector('#sticky .container .overflow-box > p')

    gsap.fromTo(projectsH2, {y: '115%'},{y:0, duration:.5,  ease:"Expo.Ease",scrollTrigger:{
        trigger: projectsH2
    }})
    gsap.fromTo(projectsH2Paragraph, {y: '115%'},{y:0, duration: .5, delay: .2, ease:"Expo.Ease",scrollTrigger:{
        trigger: projectsH2Paragraph
    }})     

    projectLiAll.forEach(li => {

      const entryTl = gsap.timeline({delay: .4})

      // entryTl.fromTo(arrowBox,{scale:0},{scale: 1, ease: 'power4.out', onComplete:() => {
      //   li.classList.add('animation-complete')
      // }},'-=.3')

      ScrollTrigger.create({
        trigger: li,
        start: 'top 60%',
        animation: entryTl
      })

      const featuredImg = li.querySelector('picture')
      let h3 = li.querySelector('h3')
      const bottomContent = li.querySelector('.bottom-content')
      
      const bottomTl = gsap.timeline({delay: 0})
      const h3Split = new SplitType(h3)
      
      bottomTl.fromTo(featuredImg,{ opacity: 0,xPercent: 90},{opacity:1,xPercent: 0, duration: .65})      
      bottomTl.from(h3Split.chars,{opacity: 0, x: 10, duration: .5, stagger: .055},'-=.7')
      bottomTl.fromTo(bottomContent,{ opacity: 0, x:-60},{x:0,opacity: 1, duration: .45},'-=.8')
      
      ScrollTrigger.create({
        trigger: li,
        start: 'top 60%',
        animation: bottomTl
      })     
    });
  }, []);

  return (
    <ul className='project-list'>
        {
            projetcs.map((project) =>{
              return  <li  li key={project.id}>
                        <div className='card' >
                          <div className='top-content'>
                            <div>
                              <div>
                                <h3>{project.name}</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                              </div>                              
                              <div className="bottom-content">
                                
                                {/* <div className='project-stack'>
                                  <span>React</span>
                                  <span>Firebase</span>
                                </div> */}
                                <div className="overflow-box bottom-gradient">
                                  <Link className='body-link' to={`/${project.slug}`}>View More</Link>
                                </div> 
                                
                              </div>                               
                            </div>                         
                          </div> 
                          <picture>
                            <source media="(min-width: 1150px)" srcSet={project.img} />
                            <img className='featured-image' src={project.homeMobileImg} alt="" /> 
                          </picture>                                                    
                        </div>                                                    
                      </li>
            })
        }                  
    </ul>
  )
}
