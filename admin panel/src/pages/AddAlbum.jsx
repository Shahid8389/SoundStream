import React, { useState } from 'react'
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../App';

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [colour, setColour] = useState("#141414");
  const [loading, setloading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const formData = new FormData();

      formData.append("name", name)
      formData.append("desc", desc)
      formData.append("image", image)
      formData.append("bgColour", colour)

      const response = await axios.post(`${url}/api/album/add`, formData)

      if (response.data.success) {
        toast.success("Album added");
        console.log("Album added");

        setName("");
        setDesc("");
        setImage(false);
        
      }
      else{
        toast.error("Error, Album not added!!")
      }

    } catch (error) {
      toast.error("Error occured, Album not added!!")
      console.log("Error occured, While adding the Album");
      
    }

    setloading(false);

  }

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-14 h-14 place-self-center border-8 border-gray-500 border-t-green-800 animate-spin rounded-full'>

      </div>
    </div>
  ) :
    (
      <form onSubmit={onSubmitHandler}>
        <div className='pt-5 flex gap-8'>

          <div className=''>
            <p>Upload Image</p>
            <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id='image' accept='image/*' hidden />
            <label htmlFor="image">
              <img className='w-24 py-3 cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
          </div>

        </div>

        <div className='pt-4 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p>Album name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='w-[80%] border border-slate-800 rounded-md outline-none py-1 px-2' type="text" placeholder='Type Here' required />
          </div>

          <div className='flex flex-col gap-2'>
            <p>Album Description</p>
            <input onChange={(e) => setDesc(e.target.value)} value={desc} className='w-[80%] border border-slate-800 rounded-md outline-none py-1 px-2' type="text" placeholder='Type Here' required />
          </div>

        </div>

        <div className='pt-8 flex flex-col gap-1'>
          <p>Background Colour</p>
          <input onChange={(e) => setColour(e.target.value)} value={colour} className='' type="color" />
        </div>

        <button className='w-[20%] mt-8 bg-slate-800 rounded-sm py-1 px-2 text-white' type='submit'>ADD</button>

      </form>
    )

}

export default AddAlbum