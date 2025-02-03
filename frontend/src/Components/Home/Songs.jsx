import React, { useContext } from 'react'
import { PlayerContext } from '../../Context/PlayerContext'

const Songs = ({id, name, image, desc}) => {

  const {playWithId} = useContext(PlayerContext);

  return (
    <div>
        <div onClick={ () => {playWithId(id)} } className='text-white min-w-[9rem] cursor-pointer p-1 hover:bg-[#5d5c5c74] rounded'>
            <img className='rounded' src={image} alt="" />
            <p className='font-semibold text-[0.9rem] pt-1'>{name}</p>
            <p className='text-[0.8rem]'>{desc}</p>
        </div>
    </div>
  )
}

export default Songs