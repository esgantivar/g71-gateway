// Archivo principal de la aplicación

// Importando la liberia del servidor
const {ApolloServer, gql} = require('apollo-server');
const {authenticationByPromise, authentication} = require('./utils/authentication');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_ms');
const AccountAPI = require('./dataSources/account_ms');

// Creando el servidor
const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: ()=>{
        return {
            authAPI: new AuthAPI(),
            accountAPI: new AccountAPI()
        }
    },
    introspection: true,
    playground: true,
    context: authentication
});

// Levantando el servidor
server.listen(process.env.PORT||4000).then((params) => {
    //console.log(params);
    console.log('servidor corriendo');
}).catch(() => {
    console.log('error');
});
