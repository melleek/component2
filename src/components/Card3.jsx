import React from 'react'

function Card3({img, h1, btn, stl}) {
  return (
    <div>
        <div className={`rounded-[30px] w-[289px] h-[320px] ${stl}`} id="card3">
            <div id="green" className='flex justify-center items-center bg-[#1E959B] w-[182px] h-[185px] rounded-[50%] relative top-[-13%] left-[17%]'>
                <img src={img} />
            </div>
            <h1 className='text-center text-[#1E959B] uppercase text-[24px] font-[700] pb-[10px]'>{h1}</h1>
            <button className='bg-[#F05670] text-white rounded-[15px] px-[62px] py-[15px] block m-[auto] uppercase' id="btn">{btn}</button>
        </div>
    </div>
  )
}

export default Card3
