class Api {
    constructor({server}) {
        this._server = server
    }
    _makeRequest(endpoint, method, body) {
        const token = localStorage.getItem("jwt");
        const fetchInit = {
            method: method,
            headers: {
                authorization: `Bearer ${token}`,
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
    getUserInfo() {
        return this._makeRequest('/users/me', 'GET')
    }
    getMovies() {
        return this._makeRequest('/movies', 'GET')
    }
    updateUserInfo(name, email) {
        return this._makeRequest('/users/me', 'PATCH', {
            name,
            email
        })
    }
    addMovie(data) {
        return this._makeRequest('/movies', 'POST', data)
    }
    deleteMovie(id) {
        return this._makeRequest(`/movies/${id}`, 'DELETE')
    }
}
const api = new Api({server: 'https://api.srcmovies.nomoredomains.rocks'});
export default api; 