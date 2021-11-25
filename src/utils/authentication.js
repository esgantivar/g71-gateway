const {ApolloError} = require('apollo-server');
const {auth_ms_url} = require('../server');
const fetch = require('node-fetch');

const authentication = async (params) => {
    const {req} = params;
    const token = req.headers.authorization || '';
    if (token === '') {
        // No mandaron token
        return {};
    } else {
        // Mandaron un token
        try {
            const response = await fetch(`${auth_ms_url}/simple/check-token/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            if (response.status === 200) {
                const {username, id} = (await response.json())
                return {
                    id,
                    username,
                    token
                }
            } else {
                throw new ApolloError(`Usuario inactivo`, 400);
            }
        } catch (e) {
            //Capturar si la promesa (fetch) me genero un error (entro al metodo catch)
            throw new ApolloError(`Se genero un error de token`, 400);
        }
    }
}

const authenticationByPromise = (params) => {
    return new Promise((resolve, reject) => {
        const {req} = params;
        const token = req.headers.authorization || '';
        if (token === '') {
            // No mandaron token
            resolve({})
        } else {
            // Mandaron un token
            fetch(`${auth_ms_url}/simple/check-token/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            }).then((response) => {
                // == comparacion de valor '200' == 200 => true
                // === comparacion de valor y tipo '200' === 200 => false
                if (response.status === 200) {
                    resolve({
                        token
                    })
                } else {
                    reject(new ApolloError('Usuario inactivo', 400));
                }
            }).catch(() => {
                reject(new ApolloError('Se genero un error de token', 400));
            });
        }
    });
}

module.exports = {
    authenticationByPromise,
    authentication
};
