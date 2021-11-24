// Permitirme conectarme con mi ms de autenticación

const { RESTDataSource } = require('apollo-datasource-rest');

class AuthAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = 'https://auth-ms-g71.herokuapp.com';
    }

    allUser() {
        // una petición de tipo GET a la url http://localhost:8000/usuario/
        return this.get('/usuario/');
    }

    getUser(userId) {
        return this.get(`/usuario/${userId}`);
    }

    createUser(user) {
        return this.post('/usuario/', user);
    }

    auth(username, password) {
        /**
         * {
         *      "username": "esgantivar",
         *      "password": "1213123"
         * }
         */
        return this.post('/simple/login/', {
            username,
            password
        });
    }

    refreshToken(refreshToken) {
        return this.post('/simple/refresh/', {
            refresh: refreshToken
        });
    }
}

module.exports = AuthAPI;
