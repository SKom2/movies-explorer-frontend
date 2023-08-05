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

    getProfile(){
        return fetch(`${this._config.url}/users/me`, {
            headers: this._config.headers
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
