import {motion} from 'framer-motion'
import { useEffect } from 'react'

const animationContainerVariants = {
  initial: {},
  animate: {

    transition: {
      delayChildren: .25,
      staggerChildren: 0.015,
      delay: .3
      
    }
  }
}

const animationLetterVariants = {
  initial: { opacity: 0},
  animate: {
    opacity:1,
    transition:{ duration: .4},
  }
}


const PageTransitions = ({routeName}) => {

  useEffect(() => {
    console.log(routeName.typeOff)
  }, []);

  return (
    <>
            <motion.div
            className='transition  cover gradient transition-none' 
            initial={{translateX:'100%'}}
            exit={{translateX: 0}}
            transition={{duration: .8, ease:[0.87, 0, 0.13, 1]}}/>

          <motion.div
            className='transition cover black transition-none' 
            initial={{translateX:'100%'}}
            exit={{translateX: 0}}
            transition={{duration: .8, delay:.05, ease:[0.87, 0, 0.13, 1]}}/>
            
          <motion.div
          className='transition gradient cover horizontal transition-none' 
          animate={{translateY: '-100%'}}
          transition={{duration: .8, delay: 1, ease: [0.87, 0, 0.13, 1]}}/>
          
          <motion.div
          className='transition black cover transition-none' 
          animate={{translateY: '-100%'}}
          transition={{duration: .8, delay: .9, ease: [0.87, 0, 0.13, 1]}}>
            <motion.div variants={animationContainerVariants} initial="initial" animate={'animate'} className=' letters-container transition-none'>
              {routeName.split('').map((letter, index) => (
                <motion.div key={index} className="overflow-box" style={{ display: 'inline-block', marginRight: letter === ' ' ? '8px' : '0' }}>
                  <motion.span 
                    variants={animationLetterVariants} 
                    className='block transition-none'
                  >
                    {letter === ' ' ? '\u00A0' : letter} {/* Espacio especial en caso de un espacio */}
                  </motion.span>
                </motion.div>
              ))}   
            </motion.div>
          </motion.div>
        </>
  )
}

export default PageTransitions