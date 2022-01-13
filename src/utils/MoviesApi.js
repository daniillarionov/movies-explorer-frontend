class MoviesApi {
    constructor({server}) {
        this._server = server
    }
    _makeRequest(endpoint, method, body) {
        const fetchInit = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return fetch(`${this._server}${endpoint}`, body ? {...fetchInit,
            body: JSON.stringify(body)
        } : fetchInit).then(
            (res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(res.status)
                }
            }))
    }
    getMovies() {
        return this._makeRequest('/beatfilm-movies', 'GET')
    }
}
const moviesApi = new MoviesApi({server: 'https://api.nomoreparties.co'});
export default moviesApi; 