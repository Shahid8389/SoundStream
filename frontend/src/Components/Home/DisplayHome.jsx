import React, { useContext } from 'react'
import Navbar from '../Navbar'
import Album from './Album'
import Songs from './Songs'
import { PlayerContext } from '../../Context/PlayerContext'

const DisplayHome = () => {

    const {songsData, albumsData} = useContext(PlayerContext);

  return (
    <div>
        <Navbar />

        <div className='text-white pt-3'>
            <p className='font-semibold text-xl'>Featured Charts</p>
        </div>

        <div className='flex gap-3 pt-3 overflow-auto'>
            {albumsData.map( (element, index) => {
                return (
                <Album key={index} id={element._id} image={element.image} name={element.name} desc={element.desc} />
                )
            })}
        </div>

        <div className='text-white pt-3'>
            <p className='font-semibold text-xl'>Featured Songs</p>
        </div>

        <div className='flex gap-3 pt-3 overflow-auto'>
            {songsData.map( (element, index) => {
                return (
                <Songs key={index} id={element._id} image={element.image} name={element.name} desc={element.desc} />
                )
            })}
        </div>
    </div>
  )
}

export default DisplayHome