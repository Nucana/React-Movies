import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Movie from "@mui/icons-material/Movie";
import {Link, useNavigate} from "react-router-dom";

const Barra = () => {
    const navigate = useNavigate();
    const goToMovies = () => {
        navigate("/movies");
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Movie />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home">
                            Aplicación Películas
                        </Link>
                        </Typography>
                        <Link to="/movies">
                            <Button variant="contained">Películas Link</Button>
                        </Link>
                        <Button variant="contained" onClick={goToMovies}>Películas</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Barra;
