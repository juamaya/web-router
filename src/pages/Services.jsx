import React from 'react'

import services from '../assets/images/services.jpg'
import appRoutes from '../assets/images/app-routes.png'
import poke from '../assets/images/pokemon.png'
import logo from '../assets/images/logo.jpg'
import morty from '../assets/images/morty.png'
import Card from '../componentes/Card'

const Services = () => {
  return (
    <>
      <div className='fs-3 m-2'><i className="fa-solid fa-desktop"></i>  Services</div>


      <div className="row mb-5">


        <div className="col-sm-12  col-md-4 ">
          <Card image={logo} />
          <br />
          <Card image={appRoutes} />
          <br />
          <Card image={services} />
        </div>
        <br />
        <div className="col-sm-12 col-md-4">
          <Card image={logo} />
          <br />
          <Card image={poke} url={"https://juamaya.github.io/pokemon"} title={"App Pokemon"} description="Pagina web que consume una API"/>
          <br />
          <Card image={services} />
        </div>
        <br />
        <div className="col-sm-12 col-md-4">
          <Card image={logo} />
          <br />
          <Card image={morty }url={"https://juamaya.github.io/morty"} title={"App RICK and MORTY"} description="Pagina web que consume una API"/>
          <br />
          <Card image={services} />
        </div>

      </div>
    </>
  )
}

export default Services