import React from 'react'

function Card2({img, h6, p}) {
  return (
    <div>
        <div id="card2" className='rounded-[25px] w-[320px] h-[320px] flex flex-col items-center p-[30px]'>
            <img src={img} alt="" />
            <h6 className='text-[#1E959B] text-[16px] font-[700] pt-[6px]'>{h6}</h6>
            <p className='text-[14px] text-[#000] font-[400] pt-[6px]'>{p}</p>
        </div>
    </div>
  )
}

export default Card2
