export default class MoviesApi{
    constructor(config) {
        this._config = config;
    }

    _getResponsiveData(res){
        if (res.ok){
            return res.json();
        }

        return Promise.reject(new Error(`Ошибка: ${res.status}`))
    }

    getMovies(){
        return fetch(`${this._config.url}/beatfilm-movies`, {
            headers: this._config.headers,
        })
            .then((res) => this._getResponsiveData(res))
    }
}
