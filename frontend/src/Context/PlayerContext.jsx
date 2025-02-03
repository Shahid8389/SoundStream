import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const PlayerContext = createContext();

export const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();

    const url = "http://localhost:4000";
    const navigate = useNavigate();

    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);

    const [token, setToken] = useState('')

    const [track, setTrack] = useState(songsData[1]);
    const [playStatus, setPlayStatus] = useState(false);

    const [time, setTime] = useState({
        currentTime: {
            minute: 0,
            second: 0
        },
        totalTime: {
            minute: 0,
            second: 0
        }
    });


    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    // Play the clicked song.
    const playWithId = async (id) => {

        await songsData.map( (item) => {
            if (id === item._id) {
                setTrack(item);
            }
        })

        await audioRef.current.play();
        setPlayStatus(true);
    }

    const prevSong = async () => {
        songsData.map(async (item, index) => {
            if (track._id === item._id && index > 0) {
                await setTrack(songsData[index-1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const nextSong = async () => {
        songsData.map(async (item, index) => {
            if (track._id === item._id && index < songsData.length-1) {
                await setTrack(songsData[index+1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }

    const getSongsData = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`)

            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);
            
        } catch (error) {
            
        }
    }

    const getAlbumsData = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`)

            setAlbumsData(response.data.albums);

        } catch (error) {
            
        }
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";

                setTime(
                    {
                        currentTime: {
                            minute: Math.floor(audioRef.current.currentTime / 60),
                            second: Math.floor(audioRef.current.currentTime % 60)
                        },
                        totalTime: {
                            minute: Math.floor(audioRef.current.duration / 60),
                            second: Math.floor(audioRef.current.duration % 60)
                        }
                    }
                )
            }
        }, 1000);

    }, [audioRef])

    useEffect(() => {
      getSongsData();
      getAlbumsData();
    }, [])
    

    const contextValue = {
        audioRef,
        seekBar, seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        prevSong, nextSong,
        seekSong,
        songsData, albumsData,
        url, 
        token, setToken
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}