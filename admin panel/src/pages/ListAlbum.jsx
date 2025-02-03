import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { url } from '../App';

const ListAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setData(response.data.albums)
      }

    } catch (error) {
      toast.error("Error, while fetching the Albums!!")
      console.log("Error occured, while fetching the Albums!!");
      
    }
  }

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, {id})

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchAlbum();
      }

    } catch (error) {
      toast.error("Error, Can't delete Album!!")
      console.log("Error Occured, while deleting the Album!!");
      
    }
  }

  useEffect(() => {
    fetchAlbum();
  }, [])


  return (
    <div className='pt-4'>
        <p>All Album List</p>

        <div className='pr-1 pt-3'>
          <div className='bg-[#3995c3] text-white font-semibold grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2 px-2 py-1'>
            <span>Image</span>
            <span>Name</span>
            <span>Desc</span>
            <span>Album Colour</span>
            <span>Action</span>
          </div>

          {data.map( (item, index) => {
            return (
              <div key={index} className='bg-[#ecf1f4fa] text-black font-semibold grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] gap-2 px-2 py-1.5 border-b-[0.1px] border-black last:border-none'>

                <img className='w-10' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <input type="color" value={item.bgColour} readOnly />
                <p onClick={ ()=> { removeAlbum(item._id) }} className='cursor-pointer'>X</p>
              </div>
            )
          })}

        </div>

    </div>
  )

}

export default ListAlbum