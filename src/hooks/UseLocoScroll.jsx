import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".App");

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smartphone: { smooth: true }, 
      tablet: { smooth: true }, 
      multiplier: 1,
    });

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          locoScroll.scrollTo(document.querySelector(link.hash));
      });
    });

    locoScroll.on("scroll", (e)=>{
      ScrollTrigger.update()
      if(e.delta.y > 0){
        document.querySelector('header').classList.add('scrolled')
      }else{
        document.querySelector('header').classList.remove('scrolled')
      }

      console.log('scrolling')
    });

    new ResizeObserver(() => locoScroll.update()).observe(
      document.querySelector("[data-scroll-container]")
    );

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.querySelector(".App").style.transform
        ? "transform"
        : "fixed"
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.defaults({ scroller: scrollEl });

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    //ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [start]);
};

export default useLocoScroll;