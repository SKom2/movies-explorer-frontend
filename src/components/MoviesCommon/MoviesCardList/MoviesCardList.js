import React, { useState, useEffect } from "react";
import styles from "./MoviesCardList.module.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({onSaveIconClick, onDeleteIconClick,moviesToShow}) {

    return (
        <div className={styles.moviesCardList}>
            {moviesToShow.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                    onSaveIconClick={onSaveIconClick}
                    onDeleteIconClick={onDeleteIconClick}
                />
            ))}
        </div>
    );
}
