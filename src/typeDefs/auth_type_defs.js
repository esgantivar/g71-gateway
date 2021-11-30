const {gql} = require('apollo-server');

const authTypeDefs = gql `
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

    extend type Query {
        userDetailById: UserDetail!
        getAllUser: Users!
    }
    
    type Mutation {
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): AccessToken!
        createUser(userInput: CreateUserInput!): UserDetail!
    }
`;

module.exports = authTypeDefs
