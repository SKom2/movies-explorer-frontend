export default class MainApi{
    constructor(config) {
        this._config = config;
    }

    setToken(token){
        this._config.headers.Authorization = `Bearer ${token}`
    }

}
