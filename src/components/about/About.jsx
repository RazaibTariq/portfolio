/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./about.css"
import ME from "../../assets/about-me1.png"
import { BsAward } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi"
import { FaRegFolder } from "react-icons/fa"
const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className="about__icon"/>
              <h5> Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ WorldWide</small>
            </article>

            <article className='about__card'>
              <FaRegFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p > 
          I am a nice and friendly person who is also honest and punctual. I work well in a team 
          setting as well as on my own, I am a good listener and communicator. I am a creative thinker who is constantly seeking new
          challenges. I am a well-organized person who always plans ahead to ensure that I handle my time well.
          </p>
          <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About