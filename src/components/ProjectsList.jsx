// DATA
import { useRef, useEffect } from 'react';
import {data as projetcs} from '../data/projects.js'
import SplitType from "split-type"
import gsap from 'gsap';

export default function ProjectsList() {

  const ulRef = useRef()

  useEffect(() => {

    document.querySelectorAll('#featured-projects ul li a').forEach(link => {
      let linkH3 = link.querySelector('h3')
      let linkSpan = link.querySelector('span')

      let splitH3 = new SplitType(linkH3)
      let splitSpan = new SplitType(linkSpan)

      let h3Chars = splitH3.chars
      let spanChars = splitSpan.chars

      gsap.defaults({stagger:0.015,duration:0.35,ease:'power3.easeOut'})

      let tl =gsap.timeline({paused:true})
      .to(h3Chars,{yPercent:-105})
      .to(spanChars,{yPercent:-105},0)

      link.addEventListener("mouseenter", function () {
        tl.play()
      })
                            
      link.addEventListener("mouseleave", function () {
          tl.reverse()
      })
    });

    document.querySelectorAll('#featured-projects ul li').forEach(li => {
      let tl = gsap.timeline({ease:'power3.easeOut', scrollTrigger:{
        trigger: li
      }})
      let bar = li.querySelector('.horizontal-bar')
      let title = li.querySelector('.project-details h3')

      tl.fromTo(bar,{scaleX:0},{scaleX:1, duration: 1.5, scrollTrigger:{
        trigger: bar
      }})
      tl.fromTo(title, {y:100}, {y:0, duration:.7},"=+.4")
    })   

  }, []);

  return (
    <ul ref={ulRef}>
        {
            projetcs.map((project) =>{
                return <li key={project.id}>
                          <div className="horizontal-bar"></div>
                          <a target={'_blank'} href={project.link}>
                              <div className="project-details overflow-box">
                                  <h3>{project.name}</h3>
                                  <span>{project.name}</span>
                              </div>                                                        
                              <img src={project.img} alt="" />
                          </a>                               
                        </li>
            })
        }                  
    </ul>
  )
}
