import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { assets } from '../../assets/data';
import { PlayerContext } from '../../Context/PlayerContext';

const DisplayAlbum = ({album}) => {
    const {id} = useParams();
    const [albumData, setAlbumData] = useState("");
    const {playWithId, albumsData, songsData} = useContext(PlayerContext);

    useEffect(() => {
      albumsData.map( (item) => {
        if (item._id === id) {
          setAlbumData(item)
        }
      })

    }, [])
    
    
  return albumData ? (
    <div>
        <Navbar />

        <div className='text-white flex gap-3 pt-7'>
            <img className='w-[10rem]' src={albumData.image} alt="" />

            <div>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold'>{albumData.name}</h2>
                <p className='pt-3'>{albumData.desc}</p>
            </div>
        </div>

        <div className='text-slate-300 mt-7 grid grid-cols-3 md:grid-cols-4 border-b-2 border-slate-400 pb-2'>
            <p className=''><span className='mr-2'>#</span>Title</p>
            <p className=''>Album</p>
            <p className=' hidden md:block'>Date Added</p>
            <img className='w-5' src={assets.clock_icon} alt="" />
        </div>

        {
            songsData.filter( (item) => item.album === album.name ).map( (item, index)=> {
                return (
                    <div onClick={ () => {playWithId(item._id)} } key={index} className='grid grid-cols-3 md:grid-cols-4 items-center text-white cursor-pointer hover:bg-[#4b4a4aa2]'>
                        <div className='flex gap-2 py-1.5 px-1 '>
                            <span>{index + 1}</span>
                            <img className='w-7' src={item.image} alt="" />
                            <span className='text-sm'>{item.name}</span>
                        </div>

                        <p className='text-sm'>{albumData.name}</p>
                        <p className='text-sm hidden md:block'>5 days ago</p>
                        <p className='text-sm'>{item.duration}</p>
                    </div>
                )
            })
        }

    </div>
  ) : null
}

export default DisplayAlbum