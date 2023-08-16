import React from 'react'
import girl from '../assets/images/girl.ico'

const Home = () => {
  return (
    <>
      <div className='fs-3'>  <i className="fas fa-home"></i>  Home</div>
      <br />

      <div className="container text-center mb-5  ">

        <img className='heartbeat mb-5 opacity-75 border border-3 border-dark rounded-5' src={girl} width={200} alt="" />
      </div>
      <h4 className='text-white mx-5'>Esta es la pagina de inicio de una Website. <br/>
      Creada con React, Bootstrap5.3 y usando la libreria de react-router-dom v6.4</h4>
      <br />
      
    </>

  )
}

export default Home