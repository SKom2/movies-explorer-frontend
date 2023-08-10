export default class MainApi{
    constructor(config) {
        this._config = config;
    }

    _getResponsiveData(res){
        if (res.ok){
            return res.json();
        }

        return Promise.reject(new Error(`Ошибка: ${res.status} ${res.stack}`))
    }

    setToken(token) {
        this._config.headers.Authorization = `Bearer ${token}`;
    }

    getProfile(token){
        return fetch(`${this._config.url}/users/me`, {
            headers: this._config.headers,
            Authorization: `Bearer ${token}`
        })
            .then((res) => this._getResponsiveData(res))
    }

    addMovies(data){
        return fetch(`${this._config.url}/movies`, {
            method: 'POST',
            headers: this._config.headers,
            body: JSON.stringify(data)
        })
            .then((res) => this._getResponsiveData(res))
    }

    getSavedMovies(token){
        return fetch(`${this._config.url}/movies`, {
            headers: this._config.headers,
            Authorization: `Bearer ${token}`
        })
            .then((res) => this._getResponsiveData(res))
    }

    removeMovies(id){
        return fetch(`${this._config.url}/movies/${id}`, {
            method: "DELETE",
            headers: this._config.headers,
        })
            .then((res) => this._getResponsiveData(res))
    }

    updateUser(data){
        return fetch(`${this._config.url}/users/me`, {
            method: 'PATCH',
            headers: this._config.headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then((res) => this._getResponsiveData(res))
    }
}
