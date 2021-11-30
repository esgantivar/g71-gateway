const { gql } = require('apollo-server');

const accountTypeDefs = gql `
    type Account {
        username: String!
        balance: Int!
        lastChange: String!
    }
    
    type Query {
        getAccountByUsername: Account!
        getAllAccounts: [Account]!
    }
`;

module.exports = accountTypeDefs;
