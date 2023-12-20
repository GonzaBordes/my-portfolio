import "./Header.css"

function Header({lenis}) {
    
    // const headerRef = useRef(null)
    // const burgerRef = useRef(null)
    // const navRef = useRef(null)

    // const [burgerClick, setBurgerClick] = useState(false)

    // function handleBurgerClick(){
    //     setBurgerClick(!burgerClick)
    // }

    // useEffect(() => {
    //     const links = headerRef.current.querySelectorAll('ul li > div')
    //     const overlay = headerRef.current.querySelector('.overlay')

    //     burgerRef.current = gsap.timeline({paused:true})
    //     burgerRef.current.fromTo(overlay, {x:'-100%'}, {x:0, ease: "Expo.easeInOut" ,duration: .93})
    //     burgerRef.current.fromTo(navRef.current, {x:'-100%'}, {x:0, ease: "Expo.easeInOut" ,duration: .9},'-=.74')
    //     burgerRef.current.fromTo(links,{ y: '100%' },{y:0, duration: .45 , stagger: 0.05}, '-=0.3')
    // }, []);

    // useEffect(() => {
    //     burgerClick ? burgerRef.current.play() : burgerRef.current.reverse()
    // }, [burgerClick])  
    
    lenis.on('scroll', ({scroll}) => {
        let header = document.querySelector('header')        
        if(scroll > 0){
            header.classList.add('scrolled')
        }else{
            header.classList.remove('scrolled')
        }
      })

    return ( 
        <header data-scroll-sticky>            
            <div className="container">
                <h1>Desarrollador web</h1>
                <div className="logo">
                    <span className="word gonza">G
                        <span className="word-container">
                            <span className="word-fragment">onzalo</span>
                        </span>
                    </span>
                    <span className="word bordes">Bo<span className="green-dot">.</span>
                        <span className="word-container">
                            <span className="word-fragment">rdes</span>
                        </span>
                    </span>
                </div>
                <div className="burger-box">
                    <span className="burger-line"></span>
                </div>
                <nav>
                    <ul>
                        <li onClick={() => lenis.scrollTo('#featured-projects',{offset: -30})} className="overflow-box">
                            <div><a className="slide-link" href="#featured-projects">
                                <span>Works</span><span>Works</span>                                
                            </a></div>
                        </li>
                        <li onClick={() => lenis.scrollTo('#tabs-section',{offset: -30})} className="overflow-box">
                            <div><a className="slide-link" href="#tabs-section">
                                <span>About</span><span>About</span>   
                                </a></div>
                        </li>
                        <li onClick={() => lenis.scrollTo('#tabs-section',{offset: document.querySelector('#tabs-section').offsetTop})} className="overflow-box bottom-link">
                            <div><a className="slide-link" href="#contacto">
                                    <span>Contact</span><span>Contact</span>
                                </a></div>
                        </li>
                    </ul>                    
                </nav>
            </div>
        </header>
     );
}

export default Header;
