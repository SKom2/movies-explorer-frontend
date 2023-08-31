export const BASE_URL = 'https://oceansparks-movies.nomoredomains.xyz';

const makeRequest = (url, method, body) => {
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

    return fetch(`${BASE_URL}${url}`, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Ошибка код ${response.status}`)
        })

}

export const register = (name, email, password) => {
    return makeRequest(`/signup`, "POST", {name, email, password}, '')
}

export const authorize = (email, password) => {
    return makeRequest('/signin', "POST", {email, password}, '')
};
