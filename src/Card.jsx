import React from 'react'
import arrow from './assets/images/arrow.png'
const Card = ({ image, destination, price, duration }) => {
  return (
    <div className='flex flex-col w-[70%]  lg:w-[15%]  lg: gap-2  shadow-2xl bg-white rounded-4xl'>
      <img src={image} alt="" />
      <div className='flex justify-between pl-4 lg: w-[90%]  lg:pl-3  '>
        <h3>{destination}</h3>
        <h3>{price}</h3>
      </div>
      <div className='flex items-center gap-2 pl-4 lg:4 w-[45%] lg:pl-3 pb-5'>
        <img src={arrow} alt="" />
        <h5>{duration}</h5>
      </div>
    </div>
  )
}

export default Card
