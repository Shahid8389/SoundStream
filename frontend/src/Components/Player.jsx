import React, { useContext } from 'react'
import { assets, songsData } from '../assets/data'
import { PlayerContext } from '../Context/PlayerContext';

const Player = () => {

    const {track, seekBg, seekBar, playStatus, play, pause, time, prevSong, nextSong, seekSong} = useContext(PlayerContext);
    

  return track ? (
    <div className='text-white h-[10%] bg-black pl-3 flex flex-row justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <div>
                <img className='w-10 cursor-pointer' src={track.image} alt="" />
            </div>
            <div className='flex flex-col'>
                <p>{track.name}</p>
                <p>{track.desc.slice(0, 11) + "..."}</p>
            </div>
        </div>

        <div className='m-auto flex flex-col items-center gap-0.5'>
            <div className='flex gap-2'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img onClick={ () => {prevSong()} } className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                {
                playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                :
                <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                }
                <img onClick={ () => {nextSong()} } className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>

            <div className='flex items-center gap-2'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div onClick={seekSong} ref={seekBg} className='w-[40vw] h-1 bg-white rounded-full cursor-pointer'>
                    <div ref={seekBar} className='bg-blue-600 h-1 w-[0vw] rounded-full'>
                    </div>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>

        </div>

        <div className='flex flex-row items-center gap-1 pr-2'>
            <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="" />

            <div className='w-[10vw] h-1 bg-white rounded-full cursor-pointer'>
                <div className='w-[5vw] h-1 bg-blue-500 rounded-full cursor-pointer'>
                </div>
            </div>
        </div>

    </div>
  ) : null
}

export default Player