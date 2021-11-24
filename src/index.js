// Archivo principal de la aplicación

// Importando la liberia del servidor
const { ApolloServer } = require('apollo-server');

// Creando el servidor
const server = new ApolloServer({
    typeDefs: [],
    resolvers: {},
    introspection: true,
    playground: true
});

// Levantando el servidor
server.listen(4000).then((params) => {
    console.log(params);
    console.log('servidor corriendo');
}).catch(()=>{
    console.log('error');
});