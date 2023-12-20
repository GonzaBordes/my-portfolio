import './index.css';
import "./variables.css";
// import 'locomotive-scroll/dist/locomotive-scroll.css'
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import Home from './pages/Home';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLocoScroll from './hooks/UseLocoScroll';
import Loader from './components/Loader';

function App() { 

  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
  
  return (
      <div className="App" data-scroll-container>
        <Loader />
        <Home lenis={lenis}/>         
      </div>          
  )
}

export default App;
