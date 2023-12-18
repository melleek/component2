import React from 'react'

function Card1({img, h1, stl}) {
  return (
    <div>
      <div className={`w-[205px] py-[25px]  rounded-[25px] flex flex-col items-center ${stl}`} id="card1">
        <img src={img} />
        <h2 className='uppercase pt-[20px] text-[14px] font-[400]'>{h1}</h2>
      </div>
    </div>
  )
}

export default Card1
