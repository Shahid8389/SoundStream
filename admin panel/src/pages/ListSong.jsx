import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {

  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);

      if (response.data.success) {
        setData(response.data.songs)
      }

    } catch (error) {
      toast.error("Error, while fetching the Songs!!")
      console.log("Error occured, while fetching the songs!!");
      
    }
  }

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, {id})

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchSongs();
      }

    } catch (error) {
      toast.error("Error, Can't delete Song!!")
      console.log("Error Occured, while deleting the Song!!");
      
    }
  }

  useEffect(() => {
    fetchSongs();
  }, [])
  
  return (
    <div className='pt-4'>
        <p>All Song List</p>

        <div className='pr-1 pt-3'>
          <div className='bg-[#3995c3] text-white font-semibold grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2 px-2 py-1'>
            <span>Image</span>
            <span>Name</span>
            <span>Album</span>
            <span>Duration</span>
            <span>Action</span>
          </div>

          {data.map( (item, index) => {
            return (
              <div key={index} className='bg-[#ecf1f4fa] text-black font-semibold grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] gap-2 px-2 py-1.5 border-b-[0.1px] border-black last:border-none'>

                <img className='w-10' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.album}</p>
                <p>{item.duration}</p>
                <p onClick={ ()=> { removeSong(item._id) }} className='cursor-pointer'>X</p>
              </div>
            )
          })}

        </div>

    </div>
  )
}

export default ListSong