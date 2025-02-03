import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-screen w-[35%] bg-[#064052] text-white'>
        <div className='flex justify-center pt-2'>
            <h2 className='text-xl'>SoundStream</h2>
        </div>

        <div className='flex flex-col gap-4 mt-8 pl-8 pr-1'>

            <NavLink to='/add-song' className='flex gap-3 bg-white text-gray-900 px-2 py-1 font-semibold rounded-sm cursor-pointer drop-shadow-[-4px_4px_#629394]'>
                <img className='w-6' src={assets.add_song} alt="" />
                <p>Add Song</p>
            </NavLink>

            <NavLink to="/list-song" className='flex gap-3 bg-white text-gray-900 px-2 py-1 font-semibold rounded-sm cursor-pointer drop-shadow-[-4px_4px_#629394]'>
                <img className='w-6' src={assets.song_icon} alt="" />
                <p>List Song</p>
            </NavLink>

            <NavLink to="/add-album" className='flex gap-3 bg-white text-gray-900 px-2 py-1 font-semibold rounded-sm cursor-pointer drop-shadow-[-4px_4px_#629394]'>
                <img className='w-6' src={assets.add_album} alt="" />
                <p>Add Album</p>
            </NavLink>

            <NavLink to="/list-album" className='flex gap-3 bg-white text-gray-900 px-2 py-1 font-semibold rounded-sm cursor-pointer drop-shadow-[-4px_4px_#629394]'>
                <img className='w-6' src={assets.album_icon} alt="" />
                <p>List Album</p>
            </NavLink>

        </div>

    </div>
  )
}

export default Sidebar