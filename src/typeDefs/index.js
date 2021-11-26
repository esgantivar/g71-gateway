const {gql} = require('apollo-server');
const lodash = require('lodash');

const typeDefs = gql`

    input CredentialsInput {
        username: String!
        password: String!
    }

    input CreateUserInput {
        username: String!
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        balance: Int!
    }

    type Tokens {
        access: String!
        refresh: String!
    }

    type UserDetail {
        id: Int!
        username: String!
        first_name: String!
        last_name: String!
        email: String!
        password: String!
    }

    type AccessToken {
        access: String!
    }

    type Users {
        usuarios: [UserDetail]!
    }

    type Account {
        username: String!
        balance: Int!
        lastChange: String!
    }


    type Query {
        hellos: String,
        userDetailById: UserDetail!,
        getAllUser: Users!
        getAllAccounts: [Account]!
        getAllAccount: [Account]!
    }

    type Mutation {
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): AccessToken!
        createUser(userInput: CreateUserInput!): UserDetail!
    }
`;

module.exports = typeDefs
