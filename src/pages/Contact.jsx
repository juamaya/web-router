import React from 'react'
import Form from '../componentes/Form'
import Spinner from '../componentes/Spinner'

const Contact = () => {
  return (
    <>
      <div className="contaier-fluid bg-secondary p-5 text-white opacity-75">
        <div className='fs-3'><i className="fa-regular fa-address-card"></i>  Contact</div>

        <div className="container d-flex justify-content-around">
          <Form />

          <Spinner/>
       <Spinner/>


        </div>

      </div>



    </>
  )
}

export default Contact