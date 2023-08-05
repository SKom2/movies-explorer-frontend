import Inception from '../images/movies/Inception.jpeg'
import Pirates from '../images/movies/Pirates.jpeg'
import Avatar from '../images/movies/Avatar.jpeg'
import Uncharted from '../images/movies/Uncharted.webp'
import American from '../images/movies/American.jpeg'
import Belosnejka from '../images/movies/Belosnejka and Hunter.jpeg'
import Duna from '../images/movies/Duna.webp'
import Fantastic4 from '../images/movies/Fantastic 4.jpeg'
import Warkraft from '../images/movies/Warkraft.jpeg'
import Hollywood from '../images/movies/One day in Hollywood.jpg'
import Obitel from '../images/movies/Obitel Zla.jpeg'
import Malifisenta from '../images/movies/Malifisenta.jpeg'
import Jason from '../images/movies/Jason Born.jpeg'
import Island from '../images/movies/Islind.jpg'

const MoviesConstant = [
    {
        name: 'Начало', duration: '2h 28m', image: Inception, saved: false
    },
    {
        name: 'Пираты карибского моря', duration: '2h 23m', image: Pirates, saved: false
    },
    {
        name: 'Аватар', duration: '2р 42m', image: Avatar, saved: true
    },
    {
        name: 'Анчартед', duration: '1h 56m', image: Uncharted, saved: false
    },
    {
        name: 'Американский ультра', duration: '1h 35m', image: American, saved: true
    },
    {
        name: 'Белоснежка и охотник', duration: '2h 7m', image: Belosnejka, saved: false
    },
    {
        name: 'Дюна', duration: '2h 35m', image: Duna, saved: false
    },
    {
        name: 'Фантастическая четвёрка', duration: '2h 6m', image: Fantastic4, saved: false
    },
    {
        name: 'Варкрафт', duration: '2h 3m', image: Warkraft, saved: false
    },
    {
        name: 'Однажды в Голливуде', duration: '2h 40m', image: Hollywood, saved: true
    },
    {
        name: 'Обитель зла', duration: '1h 40m', image: Obitel, saved: false
    },
    {
        name: 'Малифисента', duration: '1h 37m', image: Malifisenta, saved: false
    }
]

const apiConfig = {
    url: 'https://oceansparks-movies.nomoredomains.xyz',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
    }
}

const moviesApiConfig = {
    url: 'https://api.nomoreparties.co',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
    }
}

export {
    apiConfig,
    moviesApiConfig,
    MoviesConstant
};


