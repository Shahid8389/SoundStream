import React from 'react'
import { assets } from '../assets/data'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className='w-[100%]'>
        <div className='text-white flex items-center justify-between'>
            <div className='flex gap-2'>
                <img onClick={()=>navigate(-1)} className='w-6 h-5 cursor-pointer' src={assets.arrow_left} alt="" />
                <img onClick={()=>navigate(1)} className='w-6 h-5 cursor-pointer' src={assets.arrow_right} alt="" />
            </div>

            <div>
                <p className='bg-red-500 rounded-full px-3 py-0.5 pb-1 font-semibold text-[1.3rem] text-black cursor-pointer'>A</p>
            </div>

        </div>

        <div className='flex gap-3 font-semibold pt-2'>
            <p className='text-black cursor-pointer rounded-2xl bg-white px-3 py-0.5'>All</p>
            <p className='text-white cursor-pointer'>Music</p>
            <p className='text-white cursor-pointer'>Podcasts</p>
        </div>

    </div>
  )
}

export default Navbar