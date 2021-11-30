// Permitirme conectarme con mi ms de autenticación

const { RESTDataSource } = require('apollo-datasource-rest');
const {auth_ms_url} = require('../server')

class AuthAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = auth_ms_url;
    }

    allUser() {
        return this.get('/usuario/', {}, {
            headers: {
                'Authorization': this.context.token
            }
        });
    }

    getUser(userId) {
        return this.get(`/usuario/${userId}`, {}, {
            headers:{
                'Authorization': `${this.context.token}`
            }
        });
    }

    createUser(user) {
        return this.post('/usuario/', user);
    }

    auth(credentials) {
        /**
         * {
         *      "username": "esgantivar",
         *      "password": "1213123"
         * }
         */
        return this.post('/simple/login/', credentials);
    }

    refreshToken(refreshToken) {
        return this.post('/simple/refresh/', {
            refresh: refreshToken
        });
    }
}

module.exports = AuthAPI;
