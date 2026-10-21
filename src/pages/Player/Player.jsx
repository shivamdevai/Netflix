import React, { useEffect, useMemo, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const [video, setVideo] = useState({name : "", key : "", published_at : "", type : ""})
  const { id } = useParams();
  const navigate = useNavigate()

// headers
  const options = useMemo(() => ({
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  }), []);

  // fetch video data with id by video api
  useEffect(() => {
    const fetchVideoData = async() => {
       try {
       let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      //  console.log(res.data.results)
      setVideo(res.data.results[0])
       } catch (error) {
        console.error("Error fetching videos: ", error)
       }
    }
    fetchVideoData()
  }, [options, id])


  const handleBackButton = () => {
    navigate(-1)
  }
  
  return (
    <div className="player">
      {/* Back icon */}
      <img src={back_arrow_icon} alt="back icon" onClick={handleBackButton}/>

      {/* Video Player iframe */}
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>

      {/* Movie name, Published Date, Movie Type */}
      <div className="player-info">
        <p>{video.published_at?.slice(0,10)}</p>
        <p>{video?.name}</p>
        <p>{video?.type}</p>
      </div>

    </div>
  );
};

export default Player;
