const { ApolloError } = require('apollo-server-errors');

const authResolver = {
    Query: {
        userDetailById: (_, {}, {dataSources, id}) => {
            if(id === null) {
                // No esta autorizado
                throw new ApolloError('No autorizado', 401);
            }
            return dataSources.authAPI.getUser(id);
        },
        getAllUser: (_, {}, {dataSources}) => {
            return dataSources.authAPI.allUser();
        }
    },
    Mutation: {
        logIn: (_, {credentials}, {dataSources}) => {
            return dataSources.authAPI.auth(credentials);
        },
        refreshToken: (_, {refresh}, {dataSources}) => {
            return dataSources.authAPI.refreshToken(refresh)
        },
        createUser: async (_, {userInput}, {dataSources}) => {
            // Orquestando peticiones
            const {
                username,
                first_name,
                last_name,
                email,
                password,
                balance
            } = userInput;
            const user = await dataSources.authAPI.createUser({
                username,
                first_name,
                last_name,
                email,
                password
            });
            await dataSources.accountAPI.createAccount({
                username,
                lastChange: (new Date()).toISOString(),
                balance
            });
            return user
        }
    }
};

module.exports = authResolver;