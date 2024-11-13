import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"


const HorizontalImages = ({images}) => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {

        const imgAll = document.querySelectorAll('#horizontal img')
        gsap.from(imgAll,{opacity:0, yPercent:100, stagger: .1, duration: .7, delay: 1.25, ease: 'power4.out' })

        const mm = gsap.matchMedia()

        mm.add("(min-width: 760px)", () => {
            const horizontalSection = document.querySelector('#horizontal');

            
            console.log(getScrollAmount)

            function getScrollAmount() {
                let hotizontalSectionWidth = horizontalSection.scrollWidth;
	            return -(hotizontalSectionWidth - window.innerWidth);
            }
        
            let horizontalAnimation = gsap.to(horizontalSection, {
                x: getScrollAmount,
                ease: 'none',
               
            });

            ScrollTrigger.create({
                trigger: horizontalSection,
                start:"top 5%",
                end: () => `+=${getScrollAmount() * -1}`,
                pin:true,
                animation:horizontalAnimation,
                scrub: .9,
                invalidateOnRefresh:true,
            })

           
        })
    }, []);

  return (
    <section id="project-images">
        <div id="horizontal">
            {
                images.map((image,i) => {
                    return <figure key={i}>
                                <img src={image} alt="" />
                            </figure>
                })
            }
           
        </div>
    </section>
  )
}

export default HorizontalImages