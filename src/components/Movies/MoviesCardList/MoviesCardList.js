import React, { useState, useEffect } from "react";
import styles from "./MoviesCardList.module.css";
import {MoviesConstant} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useContext} from "react";
import {MoviesContext} from "../../../contexts/MoviesContext";

export default function MoviesCardList({onSaveIconClick, value}) {
    const {movies} = useContext(MoviesContext)
    const maxMoviesToShowDesktop = 12;
    const maxMoviesToShowMobile = 8;
    const maxMoviesToShowSmallMobile = 5;
    const [maxMoviesToShow, setMaxMoviesToShow] = useState(maxMoviesToShowDesktop);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 530) {
                setMaxMoviesToShow(maxMoviesToShowSmallMobile);
            } else if (screenWidth < 1280) {
                setMaxMoviesToShow(maxMoviesToShowMobile);
            } else {
                setMaxMoviesToShow(maxMoviesToShowDesktop);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const moviesToShow = movies.slice(0, maxMoviesToShow);


    const filteredMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={styles.moviesCardList}>
            {filteredMovies.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                    onSaveIconClick={onSaveIconClick}
                />
            ))}
        </div>
    );
}
