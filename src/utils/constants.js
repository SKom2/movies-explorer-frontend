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
        'Content-Type': 'application/json'
    }
}

const maxMoviesToShowDesktop = 12;
const maxMoviesToShowMobile = 8;
const maxMoviesToShowSmallMobile = 5;

export {
    maxMoviesToShowDesktop,
    maxMoviesToShowMobile,
    maxMoviesToShowSmallMobile,
    apiConfig,
    moviesApiConfig,
};


