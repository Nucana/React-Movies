import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";

const CardInfo = (props) => {
    console.log(props.movie);
    const navigate = useNavigate();

    const image = "https://image.tmdb.org/t/p/w220_and_h330_face/" + props.movie.poster_path;
    return (
        <>
        <Button onClick={() => {navigate(`/movie/${props.movie.id}/${props.movie.title}`)}}>
            <Card>
                <CardMedia
                    component="img"
                    height="330"
                    image= {image}
                    alt="movie image"
                />
            </Card>
        </Button>
            {/*
            <Card>
                <CardMedia
                    component="img"
                    height="330"
                    image= {image}
                    alt="movie image"
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        {props.movie.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" position="end">+ Info</Button>
                </CardActions>
            </Card>*/}
        </>
    );
}

export default CardInfo;
