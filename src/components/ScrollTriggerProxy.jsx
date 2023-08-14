
import {useEffect} from 'react'
import {useLocomotiveScroll} from "react-locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTriggerProxy = () => {

  const { scroll } = useLocomotiveScroll()  
  gsap.registerPlugin(ScrollTrigger) 

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el; 
      scroll.on('scroll', ScrollTrigger.update) 

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          if (scroll) {
            return arguments.length
              ? scroll.scrollTo(value, {duration: 0, disableLerp: true})
              : scroll.scroll.instance.scroll.y;
          }
          return null;
        },
        scrollLeft(value) {
          if (scroll) {
            return arguments.length
              ? scroll.scrollTo(value, 0, 0)
              : scroll.scroll.instance.scroll.x;
          }
          return null;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
    }

    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update())
      ScrollTrigger.refresh()
      ScrollTrigger.defaults({ scroller: ".App" });
    }
  }, [scroll]);
// console.log(scroll);
  return null
}

export default ScrollTriggerProxy