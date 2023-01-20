import React from 'react'
import { NavLink } from 'react-router-dom'



const About = () => {
  return (
    <div>
      
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-secondary fw-bold mb-4'>A Propos de nous</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ex, tempora expedita quis dolorum ea nam laboriosam quos.
              Sequi quis quibusdam pariatur cupiditate eum beatae aut,
              nostrum quaerat laudantium autem iure adipisci libero molestiae
              ab consequatur suscipit esse nesciunt magnam vitae? Atque rem,
              expedita reiciendis perspiciatis vel dicta rerum aspernatur,
              neque dolor eum excepturi aliquid minima molestiae,
            </p>
            <NavLink to="/contact" className="btn 
            btn-outline-secondary px-3">contactez-nous</NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
          <img src='#' alt='About us'
          height= "400px" width= "400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About