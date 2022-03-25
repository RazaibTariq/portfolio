import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/deepfake.jpg"
import IMG2 from "../../assets/virtualdrums.png"
import IMG3 from "../../assets/todotask1.jpg"

const data  = [
  {
    id: 1,
    image: IMG1,
    title: 'Deep Fake Detection',
    github: 'https://github.com/RazaibTariq',
    linkedin: 'https://linkedin.com/in/razaibtariq/'
},
  {
    id: 2,
    image: IMG2,
    title: 'Virtual Drums OpenCV',
    github: 'https://github.com/RazaibTariq',
    linkedin: 'https://linkedin.com/in/razaibtariq/'
},
  {
    id: 3,
    image: IMG3,
    title: 'TODO Task App',
    github: 'https://github.com/RazaibTariq',
    linkedin: 'https://linkedin.com/in/razaibtariq/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
      
      <div className='container portfolio__container'> 
      {
        data.map(({id, image, title, github, linkedin}) => {
          return (
            <article key={id} className='portfolio__item'>
       <div className='portfolio__item-image'> 
        <img src={image} alt="title" />
       </div>
       <h3>{title}</h3>
       <div className='portfolio__item-cta'> 
       <a href = {github} className='btn' target='_blank' rel="noreferrer"> Github </a>
       <a href = {linkedin} className='btn btn-primary' target='_blank' rel="noreferrer"> Linkedin</a>
       </div>
      </article>
          )
        })       
      }      
      </div>   
    </section>
  )
}

export default Portfolio