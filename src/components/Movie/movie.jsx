import React from "react";
import { useParams } from "react-router-dom";   {/*Recoge los parámetros de los datos*/}

const Movie = () => {
    let {id, title} = useParams();
    return(
        <h1>{title}</h1>
    );
}

export default Movie;