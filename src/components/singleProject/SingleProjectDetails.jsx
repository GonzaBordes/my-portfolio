import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"


export const SingleProjectDetails = ({project}) => {


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    let detailsLiAll = document.querySelectorAll('#project-details li')
    let horizontalBar = document.querySelectorAll('.horizontal-bar')

    horizontalBar.forEach(bar => {
      gsap.from(bar,{width: 0, duration: 1, ease: "power4.inOut", scrollTrigger:{
        trigger: bar,
        start: 'top 80%'
      }})
    });

    detailsLiAll.forEach(li => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: li,
          start: 'top 50%', // Ajusta según tu necesidad
          end: 'bottom 20%', // Ajusta según tu necesidad
        }
      });

      let h4 = li.querySelector('h4')
      let p = li.querySelector('p')

      const h4Split = new SplitType(h4)

      tl.from(h4Split.chars,{opacity: 0, x: 10, duration: .8, stagger: .025})
      tl.from(p,{x: 40 ,duration: .6, opacity: 0,  ease:"Expo.Ease"}, "-=.85")
    });
  }, []);

  return (
    <section id="project-details">
      <div className="container">
        <div className="horizontal-bar"></div>
        <h2>About the project</h2>
        <div className="content">
          <div className="sticky">
            <h3>{project.detailHeading}</h3>
          </div>         
          <ul>
              <li>
                  <div className="overflow-box">
                    <h4>Technologies</h4>
                  </div>
                  <p>{project.techText}</p>
              </li>
              <div className="horizontal-bar"></div>
              <li>
                  
                  <div className="overflow-box">
                    <h4>Challenges</h4>
                  </div>
                  <p>{project.problemText}</p>
              </li>
              <div className="horizontal-bar"></div>
              <li>
                  <div className="overflow-box">
                    <h4>Solutions</h4>
                  </div>              
                  <p>{project.solutionText}</p>
              </li>
          </ul>
        </div>        
      </div>
    </section>
  )
}
