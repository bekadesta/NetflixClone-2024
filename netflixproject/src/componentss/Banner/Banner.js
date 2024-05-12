import React, { useEffect, useState } from 'react'
import axios from "../../AXIOS/axios"
import requests from "../../AXIOS/requests"
import "./Banner.css"

function Banner() {
    const [movies, setMovie] = useState();
    useEffect(() => {
        (async () => {
            // Immediately invoked function expression
            try {
                const request = await axios.get(requests.fetchNetflix)
                console.log(request)
                setMovie(request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                ]);
            } catch(error) {
                console.log("error", error)
            }
        })()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." :str 
    }

  return (
    <div className='Banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}           
    >
        <div className='BannerInfo'>
            <h1 className='BannerTitle'> 
                {movies?.title || movies?.name || movies?.original_name}
            </h1>
        <div className='Buttons'>
            <button className='PlayButton'>Play</button>
            <button className='MoreInforButton'>More Info</button>
        </div>
        <h1 className='BannerDescription'>{truncate(movies?.overview, 150)}</h1>
        <div className='BannerBottoms'></div>
        </div>
      
    </div>
  )
}

export default Banner
