import React from 'react'

const FeaturBox = ({ title, desc, icon}) => {
  return (
    <div className='text-white element-center flex-col text-center'>
        <img src={`./images/${icon}`} alt="icon" className='w-[80px] h-[80px] object-contain' />
        <h4 className='text-xl font-semibold my-[15px]'>{title}</h4>
        <p className='font-normal tex-sm'>{desc}</p>
    </div>
  )
}

export default FeaturBox
