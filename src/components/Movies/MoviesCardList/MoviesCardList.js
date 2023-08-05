import React, { useState, useEffect } from "react";
import styles from "./MoviesCardList.module.css";
import {MoviesConstant} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useContext} from "react";
import {CurrentUserContext} from "../../../contexts/CurrentUserContext";

export default function MoviesCardList() {
    const {movies} = useContext(CurrentUserContext)
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


    return (
        <div className={styles.moviesCardList}>
            {moviesToShow.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    name={movie.nameRU}
                    duration={movie.duration}
                    image={movie.image.url}
                    saved={movie.saved}
                />
            ))}
        </div>
    );
}
