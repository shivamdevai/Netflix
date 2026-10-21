// import React, { useEffect, useMemo, useRef, useState } from "react";
import React, { useEffect, useMemo, useState } from "react";
import "./TitleCards.css";
import axios from "axios";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);
  
  // Access the card-list div
  // const cardsRef = useRef();

  const options = useMemo(() => ({
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`    
    },
  }), []);

  // Handle the horizontal scroll in movie card
  // const handleWheel = (e) => {
  //   e.preventDefault();
  //   cardsRef.current.scrollLeft += e.deltaY;
  // };

  // Event listener for horizontal scroll in movie card  & fetch movie list by movie api
  useEffect(() => {
    const fetchMoviesData = async () => {
     try {
      let res = await axios.get(`https://api.themoviedb.org/3/movie/${category ? category : "popular"}?language=en-US&page=1`, options)
      // console.log(res.data.results)
      setApiData(res.data.results)
    }
      catch (error) {
      console.error("Error fetching movies: ", error)
     }
    }
    fetchMoviesData()

    // const cardElement = cardsRef.current;
    // cardElement.addEventListener("wheel", handleWheel);

    // return () => {
      // cardElement.removeEventListener("wheel", handleWheel);
    // }
  
  },[options, category]);

  
  
  return (
    <div className="title-cards">
      {/* Movie card component */}
      <h2>{title ? title : "Popular on Netflix"}</h2>
      {/* <div className="card-list" ref={cardsRef}> */}
      <div className="card-list">
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="Thumbnail of movies" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;















