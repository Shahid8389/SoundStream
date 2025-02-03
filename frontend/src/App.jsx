import { useContext } from 'react'
import Display from './Components/Home/Display'
import Player from './Components/Player'
import Sidebar from './Components/Sidebar'
import { PlayerContext } from './Context/PlayerContext'

import React from 'react';


function App() {
  const { audioRef, track, songsData, token, setToken } = useContext(PlayerContext);

  return (
    <div className='bg-black w-[100%] h-screen'>

      {
        songsData.length !== 0
          ? <>
            <div className='h-[90%] flex'>

              <Sidebar />
              <Display />

            </div>
            <Player />
          </>
          : null
      }

      <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>

    </div>

  )
}

export default App
