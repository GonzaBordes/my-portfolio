

// IMG DE NICO
import nicoImg1 from "../img/nico-1.webp"
import nicoImg2 from "../img/nico-2.webp"
import nicoImg3 from "../img/nico-3.webp"
import nicoHomeImg from '../img/nico-web-home.webp'
import nicoLogoImg from '../img/nico-logo.png'

import nicoPanelImg from '../img/nico-home.webp'

// IMG JERRY AWWARDS
import jerryImg1 from "../img/jerry-1.webp"
import jerryImg2 from "../img/jerry-2.webp"
import jerryImg3 from "../img/jerry-3.webp"
import jerryImg4 from "../img/jerry-4.webp"
import jerryHomeImg from '../img/jerry-home.webp'

// IMG ODA ESTUDIO
import odaImg1 from "../img/oda-1.webp"
import odaImg2 from "../img/oda-2.webp"
import odaImg3 from "../img/oda-3.webp"
import odaHomeImg from '../img/oda-home.webp'


// IMG Az Eventos
import azImg1 from "../img/az-1.webp"
import azImg2 from "../img/az-2.webp"
import azImg3 from "../img/az-3.webp"
import azImg4 from "../img/az-4.webp"
import azHomeImg from '../img/az-home.webp'

// 18 Paid Media
import paidHomeImg from '../img/18-home.webp'

    
// IMG Detecto
import detectoImg1 from "../img/detecto-1.webp"
import detectoImg2 from "../img/detecto-2.webp"
import detectoImg3 from "../img/detecto-3.webp"
import detectoImg4 from "../img/detecto-4.webp"
import detectoHomeImg from '../img/detecto-home.webp'




export const data = 

[
    {
        id: 'nico',
        slug: "nico-fullin",
        name: "Nico Fulin",
        year: 2023,
        img: nicoHomeImg,
        homeMobileImg: nicoImg1,
        detailHeading: "Implementing scroll-triggered events facilitated smooth gradient background transitions",
        heroText: 'Nico Fulin, a skilled graphic designer, brings creativity to life, crafting captivating visuals that resonate with audiences worldwide.',
        techText: "This dynamic design showcases Nico Fulin's expertise, employing React for seamless functionality, GSAP for fluid animations, and Vanilla CSS for custom styling. Multiple animations breathe life into the interface, engaging users with captivating motion and visual appeal.",
        problemText: "Distributing animations across dynamic content posed challenges, met creatively, enhancing user experience. Implementing gradient background changes on scroll demanded innovation, enriching visual aesthetics.",
        solutionText: "Employing a modular approach, animations were strategically integrated into dynamic content, ensuring seamless distribution across the website. By utilizing React's component-based structure and GSAP's animation capabilities, each project dynamically accommodated animations. Implementing scroll-triggered events facilitated smooth gradient background transitions, enhancing the site's visual allure and user engagement.",
        detail_images:[
            nicoImg1,
            nicoImg2,
            nicoImg3,
            nicoImg3    
        ],
        link: "https://nicolasfullin.site/"
    },
    {
        id: 'az redesing',
        slug: "az-redesign",
        name: "Az Redesign",
        year: 2023,
        detailHeading: "GSAP animations breathe life into the interface, enriching user engagement",
        heroText: "AZ Events Home Redesign flourishes with PHP in WordPress, custom post types, Swiper, and GSAP animations, crafting dynamic experiences.",
        techText: "The AZ Events Home Redesign leverages PHP within the WordPress environment, integrating custom post types and Swiper for dynamic content. GSAP animations breathe life into the interface, enriching user engagement. Challenges arose in adapting diverse event types and configuring Swiper settings. Innovative solutions included customizing templates and optimizing Swiper for seamless performance.",
        problemText: "Tailoring diverse events with their unique properties posed challenges, necessitating meticulous configuration for Swiper integration. Ensuring seamless adaptation across event types demanded strategic planning and customization. Optimizing Swiper settings for each event category required careful attention to detail and thorough testing.",
        solutionText: "Employing a modular approach, the AZ Events Home Redesign tackled challenges by customizing templates and fine-tuning Swiper configurations. Utilizing PHP and custom post types in WordPress streamlined content management. GSAP animations enhanced visual appeal and user interaction. Thorough testing ensured seamless performance, delivering a dynamic and engaging experience for users.",
        detail_images:[
            azImg3,
           azImg2,
           azImg1,
           azImg4  
             
        ],
        img: azHomeImg,
        homeMobileImg: azImg1,
        link: "https://azeventos.com.ar/"
    },
    {
        id: 5,
        slug: "detecto",
        name: "Detecto",
        year: 2021,
        img: detectoHomeImg,
        homeMobileImg: detectoImg3,
        detail_images:[
            detectoImg1,
            detectoImg2,
            detectoImg3,
            detectoImg4   
        ],
        link: "https://detecto.mx/home/",
        detailHeading: "Skillful manipulation of SVG paths enabled the creation of intricate rounded layouts",
        heroText: "Detecto's custom WordPress page, powered by PHP and GSAP, offers exclusive medical content and interactive risk calculators.",
        techText: "Detecto's WordPress page leverages PHP and custom post types for content management, complemented by GSAP animations for dynamic user interactions. Vanilla CSS ensures versatile styling options, while Vanilla JS powers interactive risk calculators. Challenges included integrating and validating calculator fields, along with sending results to an API for email delivery. Skillful use of SVG paths facilitated the creation of intricate rounded layouts.",
        problemText: "Developing and integrating risk calculators posed challenges in organizing and validating fields, as well as implementing API integration for result delivery via email. Crafting intricate rounded layouts demanded precise manipulation of SVG paths. The abundance of GSAP animations required careful orchestration to maintain smooth performance and user engagement throughout the site.",
        solutionText: "Detecto addressed calculator challenges by meticulously organizing and validating fields, ensuring accurate data collection. Seamless API integration facilitated result delivery via email, enhancing user experience. Skillful manipulation of SVG paths enabled the creation of intricate rounded layouts, enhancing visual appeal. Careful orchestration of GSAP animations ensured smooth performance, enriching user interactions and reinforcing Detecto's commitment to medical excellence.",
    },
    {
        id: 4,
        slug: "jerry-quizz",
        name: "Jerry Quizz",
        year: 2023,
        detailHeading: "Meticulous coordination between frontend and backend processes",
        heroText: "The Jerry Awards React Web App, powered by Tailwind and Framer Motion, delivers immersive live quizzes with dynamic animations.",
        techText: "The Jerry Awards Web App utilizes React, Tailwind CSS, Framer Motion, and Axios for seamless functionality. Framer Motion enriches the interface with fluid animations, enhancing user engagement during live quizzes. Axios facilitates backend communication for answer submissions and user interactions. Tailwind CSS streamlines styling, ensuring a sleek and responsive design across devices.",
        problemText: "Integrating backend functionality for answer submissions posed challenges, requiring synchronization with user interactions and dynamic animations. Articulating the timeline for answer submissions while maintaining a seamless user experience demanded careful planning. Ensuring proper animation of steps for answers and results called for meticulous coordination between frontend and backend processes.",
        solutionText: "The Jerry Awards Web App addressed backend articulation by implementing efficient data handling with Axios, ensuring seamless communication between users and the server. Framer Motion facilitated dynamic animations for answer steps and results, enhancing user immersion. Thorough coordination between frontend and backend processes ensured smooth transitions during live quizzes, delivering a captivating and interactive experience for users.",
        detail_images:[
            jerryImg1,
            jerryImg2,
            jerryImg3   
        ],
        img: nicoHomeImg,
        homeMobileImg: jerryImg4,
        link: "https://jerry-awards.netlify.app/"
    },    
    {
        id: 10,
        slug: "18-paid-media",
        name: "18 Paid Media",
        year: 2023,
        img: paidHomeImg,
        homeMobileImg:  odaImg3,
        detail_images:[
            odaImg1,
            odaImg2,
            odaImg3  
        ],
        scrollSpeed: 2,
        detailHeading: "performance optimization required strategic planning and meticulous execution.",
        link: "https://odaestudio.netlify.app/",
        heroText: "Oda Estudio's React web platform, enhanced by GSAP and Framer Motion, showcases architectural brilliance and exquisite furniture designs.",
        techText: "Oda Estudio's React platform harnesses the power of Framer Motion for fluid animations, complemented by GSAP for dynamic transitions. Vanilla CSS ensures customizable styling throughout the site. Challenges arose in managing the abundance of images and maintaining consistency in header styles across different pages. Solutions included optimizing image loading and implementing modular header components with flexible styling options.",
        problemText: "Handling numerous images posed challenges in terms of loading times and site performance, necessitating efficient optimization techniques. Maintaining consistent header styles between the homepage and other pages presented design cohesion issues. Balancing visual appeal with performance optimization required strategic planning and meticulous execution.",
        solutionText: "Oda Estudio tackled image management challenges by implementing image optimization techniques, ensuring swift loading without compromising quality. Modular header components were introduced, allowing for consistent styling across various pages while preserving design integrity. The use of Framer Motion and GSAP facilitated dynamic transitions, enhancing user experience and highlighting the studio's architectural prowess and furniture designs.",
    },    
    {
        id: 1,
        slug: "oda-estudio",
        name: "Oda estudio",
        year: 2023,
        img: odaHomeImg,
        homeMobileImg:  odaImg3,
        detail_images:[
            odaImg1,
            odaImg2,
            odaImg3  
        ],
        scrollSpeed: 2,
        detailHeading: "performance optimization required strategic planning and meticulous execution.",
        link: "https://odaestudio.netlify.app/",
        heroText: "Oda Estudio's React web platform, enhanced by GSAP and Framer Motion, showcases architectural brilliance and exquisite furniture designs.",
        techText: "Oda Estudio's React platform harnesses the power of Framer Motion for fluid animations, complemented by GSAP for dynamic transitions. Vanilla CSS ensures customizable styling throughout the site. Challenges arose in managing the abundance of images and maintaining consistency in header styles across different pages. Solutions included optimizing image loading and implementing modular header components with flexible styling options.",
        problemText: "Handling numerous images posed challenges in terms of loading times and site performance, necessitating efficient optimization techniques. Maintaining consistent header styles between the homepage and other pages presented design cohesion issues. Balancing visual appeal with performance optimization required strategic planning and meticulous execution.",
        solutionText: "Oda Estudio tackled image management challenges by implementing image optimization techniques, ensuring swift loading without compromising quality. Modular header components were introduced, allowing for consistent styling across various pages while preserving design integrity. The use of Framer Motion and GSAP facilitated dynamic transitions, enhancing user experience and highlighting the studio's architectural prowess and furniture designs.",
    },
]