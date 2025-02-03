import React from 'react'
import { useNavigate } from 'react-router-dom'

const Album = ({ id, name, image, desc }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate(`/album/${id}`)} className='text-white min-w-[9rem] cursor-pointer p-1 hover:bg-[#5d5c5c74] rounded'>
        <img className='rounded' src={image} alt="" />
        <p className='font-semibold text-[0.9rem] pt-1'>{name}</p>
        <p className='text-[0.8rem]'>{desc}</p>
      </div>
    </div>
  )
}

export default Album