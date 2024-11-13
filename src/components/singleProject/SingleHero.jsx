import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



const SingleHero = ({project}) => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
      gsap.from('h2',{yPercent: 100 ,duration: .5, ease: "expo", delay: 1.5})

      const opacityItems = document.querySelectorAll('#hero p, #hero a')

      opacityItems.forEach(element => {
        gsap.from(element,{opacity: 0, duration: 1, delay: 1.55})
      });
  }, []);

  return (
    <section id="hero">
                <div className="container">
                    <div>
                      <div className="overflow-box">
                        <h2 className="black-heading-gradient">{project.name}</h2>
                      </div>                       
                      <p>{project.heroText}</p>
                    </div>
                    <div className="bottom-gradient">
                      <a href={`${project.link}`} className="body-link" target="_blank">View Online</a>
                    </div>                                     
                </div>
    </section>
  )
}

export default SingleHero