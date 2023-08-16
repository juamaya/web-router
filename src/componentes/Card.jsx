import React from 'react'

const Card = ({image, title, description, url }) => {
  return (
    <>
    <div class="card">
  <img src={image} alt="" />
  <div class="card__content">
    <p class="card__title">{title}</p>
    <p class="card__description">{description }
    <a className='btn btn-success m-5' href={url} target='_blank'>VISITAR</a></p>
  </div>
</div>

    
    
    
    </>
  )
}

export default Card