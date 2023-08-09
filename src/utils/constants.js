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
};


