// DATA
import { useRef, useEffect } from 'react';
import {data as projetcs} from '../data/projects.js'

export default function ProjectsList() {

  const ulRef = useRef()

  useEffect(() => {
    const everyLi = ulRef.current.querySelectorAll('li') 

    everyLi.forEach(li => {
      const img = li.querySelector('img')
      const parent = li.parentElement

      li.addEventListener('mousemove', (e) => {
        img.classList.add('active')
        parent.classList.add('active')

        const cursorX = e.pageX,
              cursorY = e.pageY

        const itemLeft = li.getBoundingClientRect().left,
              itemTop = li.getBoundingClientRect().top

        const imgPositionX = cursorX - itemLeft,
              imgPositionY = cursorY - itemTop

        img.style.top = `${imgPositionY + -150}px`
        img.style.left = `${imgPositionX + 120}px`  
      })
    });

  }, []);

  return (
    <ul ref={ulRef}>
        {
            projetcs.map((project) =>{
                return <li key={project.id}>
                          <a target={'_blank'} href={project.link}>
                              <div className="project-details">
                                  <h3>{project.name}</h3>
                                  <p>{project.year}</p>
                              </div>                                                        
                              <img src={project.img} alt="" />
                          </a>                               
                        </li>
            })
        }                  
    </ul>
  )
}
