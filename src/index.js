// Archivo principal de la aplicación

// Importando la liberia del servidor
const {ApolloServer, gql} = require('apollo-server');
const {authenticationByPromise, authentication} = require('./utils/authentication');

const typeDefs = gql`
    type Query {
        hellos: String
    }
`;

const resolvers = {
    Query: {
        hellos: () => 'world',
    },
}

// Creando el servidor
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    playground: true,
    context: authentication
});

// Levantando el servidor
server.listen(4000).then((params) => {
    //console.log(params);
    console.log('servidor corriendo');
}).catch(() => {
    console.log('error');
});
