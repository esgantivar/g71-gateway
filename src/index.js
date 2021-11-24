// Archivo principal de la aplicación

// Importando la liberia del servidor
const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
}

// Creando el servidor
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
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