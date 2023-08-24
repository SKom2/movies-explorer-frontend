import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Authorization/Profile/Profile";
import Register from "../Authorization/Register/Register";
import Login from "../Authorization/Login/Login";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as constants from "../../utils/constants";
import {apiConfig, moviesApiConfig} from "../../utils/constants";
import Error from "../Authorization/Error/Error";
import * as Auth from "../../utils/Auth";
import MainApi from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import MoviesApi from "../../utils/MoviesApi";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";
import {MoviesContext} from "../../contexts/MoviesContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProfileUpdate from "../Authorization/ProfileUpdate/ProfileUpdate";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    })
    const [isMenuOpened , setIsMenuOpened] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [allMovies, setAllMovies] = useState([]);
    const [allSavedMovies, setAllSavedMovies] = useState([])
    const [movies, setMovies] = useState([])
    const [savedMovies, setSavedMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const navigate = useNavigate();
    const mainApi = new MainApi(apiConfig);
    const moviesApi = new MoviesApi(moviesApiConfig);
    const [isLoad, setIsLoad] = useState(false);
    const [maxMoviesToShow, setMaxMoviesToShow] = useState(constants.maxMoviesToShowDesktop);
    const screenWidth = window.innerWidth;
    const [attentionMessage, setAttentionMessage] = useState('')

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");

        if (jwt) {
            setIsLoggedIn(true)
            getMainData(jwt)
        }
    }, [isLoggedIn]);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 769);
            movieCountHandler()
        }

        setIsDesktop(window.innerWidth >= 769);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    function getMainData(token){
        mainApi.setToken(token)
        setIsLoad(true);
        mainApi.getProfile()
            .then((profile) => {
                setUserData({
                    name: profile.name,
                    email: profile.email
                });
            })
            .catch((err) => {
                console.error("Ошибка получения данных пользователя:", err);
            });
        moviesApi.getMovies()
            .then((moviesData) => {
                const savedData = localStorage.getItem('moviesData')
                setAllMovies(moviesData)
                if (savedData) {
                    const { filteredMovies } = JSON.parse(savedData)
                    setMovies(filteredMovies)
                } else {
                    setMovies(moviesData);
                }
            })
            .catch((err) => {
                console.error("Ошибка получения фильмов:", err);
            })
            .finally(() => {
                setIsLoad(false);
            })
        mainApi.getSavedMovies()
            .then((savedMoviesData) => {
                setAllSavedMovies(savedMoviesData)
                const savedData = localStorage.getItem('savedMoviesData')
                if (savedData) {
                    const { filteredMovies } = JSON.parse(savedData)
                    setSavedMovies(filteredMovies)
                } else {
                    setSavedMovies(savedMoviesData);
                }

            })
            .catch((err) => {
                console.error("Ошибка получения сохранённых фильмов:", err);
            })
            .finally(() => {
                setIsLoad(false);
            })
    }

    function handleMenuIconClick(){
          setIsMenuOpened(!isMenuOpened);
    }

    function registration(values, isValid){
       if (isValid){
              Auth.register(values.name, values.email, values.password)
                  .then((res) => {
                    login(values, isValid)
               })
               .catch((err) => {
                   if (err == constants.errorStatuses.conflictError){
                       setAttentionMessage(constants.userAttentionMessages.existingEmail);
                   } else {
                       setAttentionMessage(constants.userAttentionMessages.errorInUserRegister);
                   }
                   console.log(`Ошибка регистрации пользователя: ${err}`)
               })
       }
    }

    function login(values, isValid){
        if (isValid){
            Auth.authorize(values.email, values.password)
                .then((res) => {
                        localStorage.setItem('jwt', res.token)
                        setIsLoggedIn(true)
                        navigate("/movies", { replace: true });
                })
                .catch((err) => {
                    if (err == constants.errorStatuses.unauthorizedError){
                        setAttentionMessage(constants.userAttentionMessages.invalidPasswordOrEmail);
                    } else {
                        setAttentionMessage(constants.userAttentionMessages.errorInUserAuth);
                    }
                    console.log(`Ошибка авторизации пользователя: ${err}`)
                })
        }
    }

    function signOut(){
      localStorage.removeItem('jwt');
      localStorage.removeItem('moviesData');
      localStorage.removeItem('savedMoviesData');
      setIsLoggedIn(false);
      setAttentionMessage('')
      setUserData({
          name: '',
          email: ''
      });
    }

    function updateLocalStorage(dataToSave, key) {
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }

    function handleDeleteMovie(id){
        mainApi.removeMovies(id)
            .then((removedMovie) => {
                const updatedAllSavedMovies = allSavedMovies.filter((movie) => movie.movieId !== removedMovie.movieId);
                setAllSavedMovies(updatedAllSavedMovies);
                const updatedSavedMovies = savedMovies.filter((movie) => movie.movieId !== removedMovie.movieId);
                setSavedMovies(updatedSavedMovies);

                const savedMoviesData = JSON.parse(localStorage.getItem('savedMoviesData')) || {};
                const updatedDataToSave = { ...savedMoviesData, filteredMovies: updatedSavedMovies };
                localStorage.setItem('savedMoviesData', JSON.stringify(updatedDataToSave));
            })
            .catch((err) => {
                console.log(`Ошибка удаления фильма: ${err}`);
            });
    }
    function handleToggleMovieToSaved(data){
        const savedMovie = allSavedMovies.find((savedMovie) => {
            return savedMovie.movieId === data.movieId
        });
        if (savedMovie){
            handleDeleteMovie(savedMovie._id);
        } else {
            delete data.id
            delete data.updated_at
            delete data.created_at
            mainApi.addMovies(data)
                .then((addedMovie) => {
                    const updatedSavedMovies = [...allSavedMovies, addedMovie];
                    setAllSavedMovies(updatedSavedMovies)
                    setSavedMovies(updatedSavedMovies)

                    const savedMoviesData = JSON.parse(localStorage.getItem('savedMoviesData')) || {};
                    const updatedDataToSave = { ...savedMoviesData, filteredMovies: updatedSavedMovies };
                    localStorage.setItem('savedMoviesData', JSON.stringify(updatedDataToSave));
                })
                .catch((err) => console.log(`Ошибка сохранения фильма: ${err}`));
        }
    }

    function filterMovies(moviesArr, inputValue, isShortMovie) {
        return moviesArr.filter((movie) => {
            if (isShortMovie){
                return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) && movie.duration <= 40;
            }
            return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase());
        });
    }

    function searchMovies(inputValue, isShortMoviesShown) {
        const filteredMovies = filterMovies(allMovies, inputValue, isShortMoviesShown);
        const dataToSave = { filteredMovies, inputValue, isShortMoviesShown };
        updateLocalStorage(dataToSave, 'moviesData');

        setMovies([...filteredMovies]);
        movieCountHandler();
    }

    function searchSavedMovies(inputValue, isShortMoviesShown) {
        const filteredMovies = filterMovies(allSavedMovies, inputValue, isShortMoviesShown);
        const dataToSave = { filteredMovies, inputValue, isShortMoviesShown };
        updateLocalStorage(dataToSave, 'savedMoviesData');

        setSavedMovies([...filteredMovies]);
        movieCountHandler();
    }
    function updateUser(values, isValid){
        if (isValid) {
            mainApi.updateUser(values)
                .then((updateUser) => {
                    setUserData(updateUser)
                    setAttentionMessage(constants.userAttentionMessages.successUserUpdate)
                    navigate("/profile", { replace: true });
                })
                .catch((err) => {
                    if (err == constants.errorStatuses.conflictError){
                        setAttentionMessage(constants.userAttentionMessages.existingEmail);
                    } else {
                        setAttentionMessage(constants.userAttentionMessages.errorInUserUpdate);
                    }
                    console.log(`Ошибка обновления данных пользователя: ${err}`)
                })
        }
    }

    function movieCountHandler(){
        if (screenWidth < 530) {
            setMaxMoviesToShow(constants.maxMoviesToShowSmallMobile);
        } else if (screenWidth < 1280) {
            setMaxMoviesToShow(constants.maxMoviesToShowMobile);
        } else {
            setMaxMoviesToShow(constants.maxMoviesToShowDesktop);
        }
    }

    function loadMoreMovies() {
        if (screenWidth >= 1280){
            setMaxMoviesToShow(prevCount => prevCount + constants.numberOfAddedMoviesOnDesktop)
        } else if (screenWidth >= 530){
            setMaxMoviesToShow((prevCount) => prevCount + constants.numberOfAddedMoviesOnMobile)
        } else {
            setMaxMoviesToShow((prevCount) => prevCount + constants.numberOfAddedMoviesSmallMobile)
        }
    }

     return (
        <SavedMoviesContext.Provider value={{savedMovies, allSavedMovies}}>
            <MoviesContext.Provider value={{allMovies, movies}}>
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
                     {isLoggedIn && (
                         <>
                            <Route
                                path="/movies"
                                element=
                                    {<ProtectedRoute
                                        element={Movies}
                                        isDesktop={isDesktop}
                                        onGetMovies={searchMovies}
                                        isLoggedIn={isLoggedIn}
                                        isMenuOpened={isMenuOpened}
                                        onMenuIconClick={handleMenuIconClick}
                                        onSaveIconClick={handleToggleMovieToSaved}
                                        isLoad={isLoad}
                                        maxMoviesToShow={maxMoviesToShow}
                                        moviesToShow={moviesToShow}
                                        setMoviesToShow={setMoviesToShow}
                                        loadMoreMovies={loadMoreMovies}
                                    />}
                            />
                            <Route
                                path="/saved-movies"
                                element=
                                    {<ProtectedRoute
                                        element={SavedMovies}
                                        onGetMovies={searchSavedMovies}
                                        isLoggedIn={isLoggedIn}
                                        isMenuOpened={isMenuOpened}
                                        onMenuIconClick={handleMenuIconClick}
                                        isDesktop={isDesktop}
                                        onDeleteIconClick={handleDeleteMovie}
                                        isLoad={isLoad}
                                        maxMoviesToShow={maxMoviesToShow}
                                        moviesToShow={moviesToShow}
                                        setMoviesToShow={setMoviesToShow}
                                        loadMoreMovies={loadMoreMovies}
                                    />}
                            />
                            <Route
                                path="/profile"
                                element=
                                    {<ProtectedRoute
                                        element={Profile}
                                        isLoggedIn={isLoggedIn}
                                        isMenuOpened={isMenuOpened}
                                        onMenuIconClick={handleMenuIconClick}
                                        isDesktop={isDesktop}
                                        signOut={signOut}
                                        setAttentionMessage={setAttentionMessage}
                                        attentionMessage={attentionMessage}
                                    />}
                            />
                            <Route
                                path="/profile-update"
                                element=
                                    {<ProtectedRoute
                                        element={ProfileUpdate}
                                        isLoggedIn={isLoggedIn}
                                        isMenuOpened={isMenuOpened}
                                        onMenuIconClick={handleMenuIconClick}
                                        isDesktop={isDesktop}
                                        signOut={signOut}
                                        onEditClick={updateUser}
                                        attentionMessage={attentionMessage}
                                    />}
                            />
                             <Route path="*" element={<Navigate to="/movies" />} />
                             <Route path="/signin" element={<Navigate to="/movies" />} />
                             <Route path="/signup" element={<Navigate to="/movies" />} />
                         </>
                     )}
                        <Route
                            path="/signup"
                            element={<Register
                                register={registration}
                                setAttentionMessage={setAttentionMessage}
                                attentionMessage={attentionMessage}
                            />}
                        />
                        <Route
                            path="/signin"
                            element={<Login
                                login={login}
                                setAttentionMessage={setAttentionMessage}
                                attentionMessage={attentionMessage}
                            />}
                        />
                        <Route
                            path="*"
                            element={<Error />}
                        />
                    </Routes>
                </CurrentUserContext.Provider>
            </MoviesContext.Provider>
        </SavedMoviesContext.Provider>
    );
}

export default App;
