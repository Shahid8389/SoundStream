import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddSong = () => {

  const [song, setSong] = useState(false);
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setloading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const formData = new FormData();

      formData.append("name", name)
      formData.append("desc", desc)
      formData.append("image", image)
      formData.append("audio", song)
      formData.append("album", album)

      const response = await axios.post(`${url}/api/song/add`, formData)

      if (response.data.success) {
        toast.success("Song added");
        console.log("Song added");

        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
        
      }
      else{
        toast.error("Error, Song not added!!")
      }

    } catch (error) {
      toast.error("Error occured, Song not added!!")
      console.log("Error occured, While adding the song");
      
    }

    setloading(false);
    
  }

  const loadAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`)

      if (response.data.success) {
        setAlbumData(response.data.albums);
        console.log("Album Loaded");
      }
      else{
        toast.error("Unable to load Album Data")
      }

    } catch (error) {
      toast.error("Error, Can't load Album list data")
    }
  }

  useEffect(() => {
    loadAlbumData();
  }, [])
  

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
          <p>Upload Song</p>
          <input onChange={ (e)=> { setSong(e.target.files[0]) }} type="file" id='song' accept='audio/*' hidden />
          <label htmlFor="song">
            <img className='w-24 py-3 cursor-pointer' src={song? assets.upload_added : assets.upload_song} alt="" />
          </label>
        </div>

        <div className=''>
          <p>Upload Image</p>
          <input onChange={ (e)=> { setImage(e.target.files[0]) }} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image">
            <img className='w-24 py-3 cursor-pointer' src={image? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
        </div>

      </div>

      <div className='pt-4 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p>Song name</p>
          <input onChange={ (e)=>setName(e.target.value) } value={name} className='w-[80%] border border-slate-800 rounded-md outline-none py-1 px-2' type="text" placeholder='Type Here' required />
        </div>

        <div className='flex flex-col gap-2'>
          <p>Song Description</p>
          <input onChange={ (e)=>setDesc(e.target.value) } value={desc} className='w-[80%] border border-slate-800 rounded-md outline-none py-1 px-2' type="text" placeholder='Type Here' required />
        </div>

      </div>

      <div className='pt-8 flex flex-col gap-1'>
        <p>Album</p>
        <select onChange={ (e)=>setAlbum(e.target.value) } defaultValue={album} className='w-[30%] border border-slate-700 rounded-sm py-1 px-2' name="" id="">
          <option value="none">None</option>
          {albumData.map( (item, index) => (<option key={index} value={item.name}>{item.name}</option>) )}
        </select>
      </div>

      <button className='w-[20%] mt-8 bg-slate-800 rounded-sm py-1 px-2 text-white' type='submit'>ADD</button>

    </form>
  )
}

export default AddSong