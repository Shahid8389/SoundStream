import React, { useContext, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { PlayerContext } from '../../Context/PlayerContext'

const Display = () => {
    const { albumsData } = useContext(PlayerContext);

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split('/').pop() : "";
    const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x) => (x._id == albumId)).bgColour : "";

    useEffect(() => {
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
        }
        else {
            displayRef.current.style.background = "black"
        }

    })


    return (
        <div ref={displayRef} className='w-[100%] px-3 pt-5 overflow-auto'>
        {
            albumsData.length > 0
            ? <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((x) => (x._id == albumId))} />} />
            </Routes>
            : null
        }

        </div>
    )
}

export default Display