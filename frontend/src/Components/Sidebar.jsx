import React from 'react'
import {assets} from '../assets/data'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <div className='h-full w-[28%] p-1.5 flex flex-col gap-1'>
        <div className='rounded h-[15%] bg-[#1e2021] text-white flex flex-col gap-4 pl-5 pt-4 cursor-pointer'>
            <div onClick={ () => {navigate('/')} } className='flex items-center gap-2'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p>Home</p>
            </div>
            <div className='flex items-center gap-2'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p>Search</p>
            </div>
        </div>

        <div className='h-[85%] bg-[#1e2021] text-white rounded'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 p-2'>
                    <img className='w-6' src={assets.stack_icon} alt="" />
                    <p>Your Library</p>
                </div>

                <div className='flex gap-2 p-2 cursor-pointer'>
                    <img className='w-5 h-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5 h-5' src={assets.plus_icon} alt="" />
                </div>

            </div>

            <div className='bg-[#2a2f2f] p-2 mt-3 mx-1'>
                <p>Create your first playlist</p>
                <button className='bg-slate-50 mt-3 text-black rounded-full py-1 px-3'>Create Playlist</button>
            </div>

            <div className='bg-[#2a2f2f] p-2 mt-2 mx-1'>
                <p>Let's findsome podcasts</p>
                <button className='bg-slate-50 mt-3 text-black rounded-full py-1 px-3'>Browse Podcasts</button>
            </div>

        </div>

    </div>
  )
}

export default Sidebar