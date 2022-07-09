import React from "react";
import moviesJSON from "./../../assets/movies.json";
import CardInfo from "../CardInfo/cardinfo";
import "./home.css";
const Home = () => {
    const movies = moviesJSON.slice(0, 5);
    const listMovies = movies.map((movie) =>{
        return <CardInfo key={movie.id} movie={movie}/>
    });
    return(
        <>
            <div className="home">
                <h2>Películas recientes</h2>
                <div className="movies">
                    {listMovies}
                </div>
            </div>
        </>
    );
}

export default Home;