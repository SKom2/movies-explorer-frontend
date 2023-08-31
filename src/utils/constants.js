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


const numberOfAddedMoviesOnDesktop = 3;
const numberOfAddedMoviesOnMobile = 2;
const numberOfAddedMoviesSmallMobile = 5;

const userAttentionMessages = {
    successUserUpdate: 'Данные успешно обновлены',
    existingEmail: "Пользователь с таким Email уже существует!",
    invalidPasswordOrEmail: "Неправильный логин или пароль.",
    errorInUserUpdate: "При обновлении пользователя произошла ошибка!",
    errorInUserRegister: "При регистрации пользователя произошла ошибка!",
    errorInUserAuth: "При авторизации пользователя произошла ошибка!"
}

const moviesAttentionMessages = {
    nothingSearched: 'Ничего не найдено',
    noOneSavedMovie: 'У вас нет сохранённых фильмов'
}

const errorStatuses = {
    conflictError: 'Error: Ошибка код 409',
    unauthorizedError: 'Error: Ошибка код 401'
}



export {
    maxMoviesToShowDesktop,
    maxMoviesToShowMobile,
    maxMoviesToShowSmallMobile,
    apiConfig,
    moviesApiConfig,
    numberOfAddedMoviesOnDesktop,
    numberOfAddedMoviesOnMobile,
    numberOfAddedMoviesSmallMobile,
    userAttentionMessages,
    errorStatuses,
    moviesAttentionMessages
};


