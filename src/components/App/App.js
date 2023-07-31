import styles from "./App.module.css"
import Main from "../Main/Main";
import Header from "../Common/Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Authorization/Profile/Profile";
import Register from "../Authorization/Register/Register";
import Login from "../Authorization/Login/Login";
import {Route, Routes} from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import {useEffect, useState} from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpened , setIsMenuOpened] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);

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

  return (
    <>
      <Header
          isLoggedIn={isLoggedIn}
          isMenuOpened={isMenuOpened}
          onMenuIconClick={handleMenuIconClick}
          isDesktop={isDesktop}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
