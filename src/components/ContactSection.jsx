import { useEffect,useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"

export const ContactSection = () => {
    const contactSectionRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)
  
    useGSAP(() => {
        // CONTACT ANIMATIONS

        let contactHeading = document.querySelector('#contacto h2')
        let contactLiHeadingOne = contactSectionRef.current.querySelector('li:first-of-type h4')
        let contactLiHeadingTwo = contactSectionRef.current.querySelector('li:nth-child(2) h4')
        let contactLiHeadingThree = contactSectionRef.current.querySelector('li:nth-child(3) h4')


        const headingChars = new SplitType(contactHeading).chars

        let contactTl = gsap.timeline({scrollTrigger:{
            trigger: contactHeading,
            toggleActions: "play reverse play reverse",
            markers: false,
            start: "top 80%"
        }})

        contactTl.fromTo(headingChars,{yPercent: 100},{yPercent: 0, duration: .25 , stagger: .02, ease:"Expo.Ease"})
        contactTl.fromTo(contactLiHeadingOne,{y:"110%"}, {y:0, duration:.37, ease:"Expo.Ease"}, '-=.35')
        contactTl.fromTo(contactLiHeadingTwo,{y:"110%"}, {y:0, duration:.37, delay: .1, ease:"Expo.Ease"}, '-=.35')
        contactTl.fromTo(contactLiHeadingThree,{y:"110%"}, {y:0, duration:.37, delay: .1, ease:"Expo.Ease"}, '-=.35')
    }, []);

    return (
    <section ref={contactSectionRef} id="contacto">
                        <div className="container">
                            <div className="left-side">
                                <div className="overflow-box">
                                    <h2>Let's Chat
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
  )
}
