import React from 'react'
import "./services.css"
import { BsCheck2 } from "react-icons/bs"
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offfer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3> UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX Design */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
          </ul>
        </article>

        {/* END OF Web Development */}

        <article className='service'>
          <div className='service__head'>
            <h3> Programming</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
          </ul>
        </article>

        {/* END OF Programming */}
      </div>
    </section>
  )
}

export default Services