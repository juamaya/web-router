import React from 'react'
import Card from '../componentes/Card'
import ilustracion from '../assets/images/ilustracion.avif'
import ilustracion1 from '../assets/images/ilustracion1.avif'
import services from '../assets/images/services.jpg'
import logo from '../assets/images/logo.jpg'

const About = () => {
  return (
    <>
      <div className='fs-3 m-3'><i className="fa-solid fa-user-tie"></i> About</div>
      <div className="row mb-5">


        <div className="col-sm-12  col-md-4 ">
          <Card image={services} />
          <br />
          <Card image={ilustracion} />
     
        </div>
        <br />
        <div className="col-sm-12 col-md-4">
          <Card image={logo} />
          <br />
          <Card image={ilustracion1} />
         
        </div>
        <br />
        <div className="col-sm-12 col-md-4">
          <Card image={services} />
          <br />
          <Card image={ilustracion} />
         
        </div>

      </div>
    </>
  )
}

export default About