import React from 'react'
import Card from '../componentes/Card'
import ilustracion from '../assets/images/ilustracion.avif'
import ilustracion1 from '../assets/images/ilustracion1.avif'
import services from '../assets/images/services.jpg'
import logo from '../assets/images/logo.jpg'
import morty from '../assets/images/morty.png'
import poke from '../assets/images/pokemon.png'

const About = () => {
  return (
    <>
      <div className='fs-3 m-3'><i className="fa-solid fa-user-tie"></i> About</div>
      <div className="row mb-5">


        <div className="col-sm-12  col-md-4 ">
          <Card image={services}  url={"https://juamaya.github.io/web-slider"} title={"Pagina web"} description="     WEB SLIDER" />
          <br />
          <Card image={ilustracion}   url={"https://juamaya.github.io/curricujuan.github.io"} title={"CURRICULUM"} description="  CURRICULUM WEB"/>
     
        </div>
        <br />
        <div className="col-sm-12 col-md-4">
          <Card image={logo} url={"https://juamaya.github.io/portafolio"} title={"Portafolio"} description="Mi Portafolio  WEB"/>
          <br />
          <Card image={poke} url={"https://juamaya.github.io/pokemon"} title={"App Pokemon"} description="Pagina web que consume una API" />
         
        </div>
        <br />
        <div className="col-sm-12 col-md-4">
          <Card image={services}  url={"https://juamaya.github.io/menu-slider"} title={"Pagina web"} description="   MENU SLIDER" />
          <br />
          <Card image={morty} url={"https://juamaya.github.io/morty"} title={"App RICK and MORTY"} description="Pagina web que consume una API"/>
         
        </div>

      </div>
    </>
  )
}

export default About