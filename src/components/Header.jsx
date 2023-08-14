import "./Header.css"

function Header() {
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
                        <li className="overflow-box">
                            <div><a href="#featured-projects">Trabajos</a></div>
                        </li>
                        <li className="overflow-box">
                            <div><a href="#tabs-section">Sobre mi</a></div>
                        </li>
                        <li className="overflow-box">
                            <div><a href="#contacto">Contacto</a></div>
                        </li>
                    </ul>                    
                </nav>
            </div>
        </header>
     );
}

export default Header;
