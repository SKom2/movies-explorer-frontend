export const BASE_URL = 'https://oceansparks-movies.nomoredomains.xyz';

const makeRequest = (url, method, body, token) => {
    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    if (token) {
        options.headers.Authorization = `Bearer ${token}`
    }

    return fetch(`${BASE_URL}${url}`, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Ошибка код ${response.status} ${response.stack}`)
        })

}

export const register = (name, email, password) => {
    console.log(name)
    return makeRequest(`/signup`, "POST", {name, email, password}, '')
}

export const authorize = (email, password) => {
    return makeRequest('/signin', "POST", {email, password}, '')
};

export const getContent = (token) => {
    return makeRequest('/users/me', "GET", null, token)
}
