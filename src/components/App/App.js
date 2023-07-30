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
import {useState} from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>} />
          <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn}/>} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
    </>
  );
}

export default App;
