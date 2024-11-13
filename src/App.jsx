import './index.css';
import "./variables.css";
import Lenis from '@studio-freight/lenis';
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import SingleProject from './pages/SingleProject';


function App() { 
  const location = useLocation()

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  lenis.on('scroll', ({scroll}) => {
    let header = document.querySelector('header')        
    if(scroll > 80){
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')
    }
  })

 
  
  return (
      <>
        <AnimatePresence mode="wait" >  
          <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home  lenis={lenis} />}></Route>
                <Route path="/:slug" element={<SingleProject  lenis={lenis} />}></Route>
          </Routes>
        </AnimatePresence>                
      </>          
  )
}

export default App;
