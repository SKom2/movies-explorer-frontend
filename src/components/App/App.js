import styles from "./App.module.css"
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Authorization/Profile/Profile";
import Register from "../Authorization/Register/Register";
import Login from "../Authorization/Login/Login";
import {Route, Routes, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {apiConfig, moviesApiConfig, MoviesConstant} from "../../utils/constants";
import Error from "../Authorization/Error/Error";
import * as Auth from "../../utils/Auth";
import MainApi from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import MoviesApi from "../../utils/MoviesApi";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";
import {MoviesContext} from "../../contexts/MoviesContext";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    })
    const [isMenuOpened , setIsMenuOpened] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const navigate = useNavigate();
    const mainApi = new MainApi(apiConfig);
    const moviesApi = new MoviesApi(moviesApiConfig);

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        setToken(jwt);

        if (token) {
            mainApi.getProfile(token)
                .then((res) => {
                    setIsLoggedIn(true);
                    setUserData({ name: res.name, email: res.email });
                    navigate("/movies", { replace: true });
                })
                .catch((err) => {
                    console.error("Ошибка:", err);
                });
            moviesApi.getMovies()
                .then((moviesData) => {
                    setMovies(moviesData)
                })
                .catch((err) => {
                    console.error("Ошибка:", err);
                });

            mainApi.getSavedMovies()
                .then((savedMovies) => {
                    console.log(savedMovies)
                    setSavedMovies(savedMovies)
                })
                .catch((err) => {
                    console.error("Ошибка:", err);
                });
        }
    }, [token, setIsLoggedIn]);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 769);
        }

        setIsDesktop(window.innerWidth >= 769);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    function handleMenuIconClick(){
          setIsMenuOpened(!isMenuOpened);
    }

    function registration(values, isValid, navigate){
       if (isValid){
              Auth.register(values.name, values.email, values.password)
                  .then((res) => {
                   navigate('/signin', {replace: true})
               })
               .catch((err) => console.log(err))
       }
    }

    function login(values, isValid, navigate){
        if (isValid){
            Auth.authorize(values.email, values.password)
                .then((res) => {
                    localStorage.setItem('jwt', res.token)
                    setToken(res.token);
                    setUserData({name: res.name, email: res.email})
                    setIsLoggedIn(true)
                    navigate('/movies', {replace: true})
                })
                .catch((err) => console.log(err))
        }
    }

    function signOut(){
      localStorage.removeItem('jwt');
      setIsLoggedIn(false);
      setUserData('');
      setToken('');
    }

    function handleDeleteMovie(id){
        mainApi.removeMovies(id)
            .then(() => {
                return mainApi.getSavedMovies()
            })
            .then((savedMovies) => {
                setSavedMovies(savedMovies);
            })
            .catch(err => console.log(`Ошибка удаления фильма: ${err.stack}`))
    }

    function handleAddMovieToSaved(data){
        const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === data.movieId);
        if (savedMovie){
            handleDeleteMovie(savedMovie._id);
            return;
        }

        delete data.created_at
        delete data.updated_at
        delete data.id


        mainApi.addMovies(data)
            .then(() => {
                return mainApi.getSavedMovies()
            })
            .then((savedMovies) => {
                setSavedMovies(savedMovies);
            })
            .catch(err => console.log(`Ошибка добавления фильма: ${err.stack}`))
    }

    // const filterMovies(movies, value){
    //     return movies.nameRU.toLowerCase().includes(value.toLowerCase())
    // }

    return (
        // --------------------------Добавить MoviesContext
        <SavedMoviesContext.Provider value={{savedMovies}}>
            <MoviesContext.Provider value={{movies}}>
                <CurrentUserContext.Provider value={{userData}}>
                 <Routes>
                        <Route
                            path="/"
                            element=
                                {<Main
                                    isLoggedIn={isLoggedIn}
                                    isMenuOpened={isMenuOpened}
                                    onMenuIconClick={handleMenuIconClick}
                                    isDesktop={isDesktop}
                                />}
                        />
                        <Route
                            path="/movies"
                            element=
                                {<Movies
                                    isDesktop={isDesktop}
                                    movies={MoviesConstant}
                                    isLoggedIn={isLoggedIn}
                                    isMenuOpened={isMenuOpened}
                                    onMenuIconClick={handleMenuIconClick}
                                    onSaveIconClick={handleAddMovieToSaved}
                                />}
                        />
                        <Route
                            path="/saved-movies"
                            element=
                                {<SavedMovies
                                    movies={MoviesConstant}
                                    isLoggedIn={isLoggedIn}
                                    isMenuOpened={isMenuOpened}
                                    onMenuIconClick={handleMenuIconClick}
                                    isDesktop={isDesktop}
                                    onDeleteIconClick={handleDeleteMovie}
                                />}
                        />
                        <Route
                            path="/profile"
                            element={<Profile
                            isLoggedIn={isLoggedIn}
                            isMenuOpened={isMenuOpened}
                            onMenuIconClick={handleMenuIconClick}
                            isDesktop={isDesktop}
                            signOut={signOut} />}
                        />
                        <Route
                            path="/signup"
                            element={<Register register={registration} navigate={navigate} />}
                        />
                        <Route
                            path="/signin"
                            element={<Login login={login}/>}
                        />
                        <Route
                            path="/404"
                            element={<Error />}
                        />
                    </Routes>
                </CurrentUserContext.Provider>
            </MoviesContext.Provider>
        </SavedMoviesContext.Provider>
    );
}

export default App;
