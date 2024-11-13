import { useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import tabsArrow from '../img/tabs-arrow.svg'

export const TabsSection = () => {
    gsap.registerPlugin(ScrollTrigger)

    const tabsSectionRef = useRef(null)

    useEffect(() => {
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
    }, []);


  return (
    <section data-scroll ref={tabsSectionRef} id="tabs-section">
        <div className="container">
            <div className="overflow-box">
                <h2 className="white-heading-gradient">How i Work</h2>
            </div>                       
            <div className="main-wrapper">
                <div className="content-wrapper">
                    <div data-tab="tab1" className="active content-box">
                        <p>Motivated by a genuine love for coding, I find joy in designing user-centric interfaces that bring creative ideas to life and enhance digital experiences.</p>
                        <p> I focus on crafting tailored solutions that not only meet clients’ needs but also exceed their expectations, ensuring a seamless and intuitive user journey.</p>
                        <a href="#contacto" className="gradient body-link">Let's talk</a>
                    </div>
                    <div data-tab="tab2" className="content-box">
                        <p>Dedicated to delivering high-quality solutions, I prioritize collaboration, continuous learning, and exceeding client expectations in every project.</p>
                        <p>Enthusiastic about teamwork, I actively listen and engage in open communication to contribute effectively.</p>
                        <a href="#contacto" className="gradient body-link">Let's talk</a>
                    </div>
                    <div data-tab="tab3" className="content-box">
                        <p>I specialized in front-end development using technologies such as HTML, CSS, JavaScript, React, Vue, Tailwind, and GSAP. Additionally, I have experience in the WordPress development environment.</p>
                        <p>Furthermore, I have extensive knowledge of prototyping and design using Figma and Adobe XD.</p>
                        <a href="#contacto" className="gradient body-link">Let's talk</a>
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
  )
}
