import React, {useEffect, useState} from 'react'
import './row.css'
import axios from '../../../AXIOS/axios.js'
import trailer from "movie-trailer"
import YouTube from 'react-youtube'

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movie, setMovie] = useState([]);
    const[trailerUrl, setTrailer] = useState("")
    const base_url = "https://image.tmdb.org/t/p/original"


    useEffect(() => {
      (async () => {
        try {
          console.log(fetchUrl)
          const request = await axios.get(fetchUrl)
          console.log(request)
          setMovie(request.data.results)
        } catch(error) {
          console.log("error", error)
        }
      })()
    }, [fetchUrl])

    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailer('')
      } else {
        trailer(movie?.title || movie?.name || movie?.original_name)
          .then((url) => {
            console.log(url)
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailer(urlParams.get('v'));
          })
          .catch((error) => {
            console.log("Error fetching trailer:", error);
          });
      }
    }

    const opts = {
      height: '390',
      width: '50%',
      playerVars: {
        autoplay: 1,
      }
    }

  return (
    <div className='Row'>
      <h1>{title}</h1>
      <div className='RowPosters'>
          {movie?.map((movie, index) => (
            <img 
              onClick={() => handleClick(movie)}
              key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              className={`RowPoster ${isLargeRow && "RowPostersLarge"}`}
            />
          ))}
      </div>
      <div style={{padding: '50px'}}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 
      </div>
    </div>
  )
}

export default Row

